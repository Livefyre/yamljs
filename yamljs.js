#!/usr/bin/env node

var fs = require('fs'),
    yaml = require('js-yaml'),
    extend = require('xtend'),
    docs = [];

var uri = new yaml.Type('!uri', {
    loader: {
        kind: 'string',
        resolver: function(object) {
            return object;
        }
    }
});

var required = new yaml.Type('!required', {
    loader: {
        kind: 'string',
        resolver: function(object) {
            if (object == yaml.NIL) {
                throw 'field is required';
                return yaml.NIL;
            }
            return object;
        }
    }
});

var spec = new yaml.Type('!spec', {
    loader: {
        kind: 'object',
        resolver: function(object) {
            if ('value' in object) {
                return object.value;
            }
            throw 'value is required';
        }
    }
});

var EXTENDED_LF_SCHEMA = yaml.Schema.create([uri, required, spec]);

var args = process.argv.slice(2);
args.forEach(function(filename) {
    var contents;
    try {
        contents = fs.readFileSync(filename, 'utf8'),
        docs.push(yaml.safeLoad(contents, {
            schema: EXTENDED_LF_SCHEMA
        }));
    } catch (e) {
        console.error('Error reading yaml file', e);
        process.exit(1);
    }
});

console.log(JSON.stringify(extend.apply(this, docs)));
