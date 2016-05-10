#!/usr/bin/env node

var mergeYaml = require('./index');

var args = process.argv.slice(2);

var obj = mergeYaml(args);
console.log(JSON.stringify(obj));
