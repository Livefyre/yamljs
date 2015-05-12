#!/usr/bin/env node

var fs = require('fs');
var yaml = require('js-yaml');
var extend = require('./util').extend;
var mergeYaml = require('./index');

var args = process.argv.slice(2);

var obj = mergeYaml(args);
console.log(JSON.stringify(obj));
