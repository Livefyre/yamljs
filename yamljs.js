#!/usr/bin/env node

var parser = require('./index');

var args = process.argv.slice(2);

var obj = parser.loadInjectedOr(function () {
  return parser.mergeYaml(args);
});

console.log(JSON.stringify(obj));
