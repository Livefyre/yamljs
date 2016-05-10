var fs = require('fs');
var yaml = require('js-yaml');
var extend = require('./util').extend;
var schema = require('./schema');

function mergeYaml(fileList) {
  var docs = fileList.map(function (fileName) {
    try {
      var contents = fs.readFileSync(fileName, 'utf8');
      return exports.parse(contents);
    } catch (e) {
      console.error('Error reading yaml file', e);
      process.exit(1);
    }
  });

  var obj = {};
  docs.unshift(obj);
  return extend.apply(null, docs);
}

module.exports = exports = mergeYaml;

exports.stringify = function (obj, options) {
  return yaml.safeDump(obj, {schema: schema});
};

exports.parse = function (obj, options) {
  return yaml.safeLoad(obj, {schema: schema});
};
