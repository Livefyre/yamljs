var fs = require('fs');
var yaml = require('js-yaml');
var extend = require('./util').extend;
var schema = require('./schema');

function mergeYaml(fileList) {
  var docs = fileList.map(function (fileName) {
    try {
        var contents = fs.readFileSync(fileName, 'utf8');
        return yaml.safeLoad(contents, {
            schema: schema
        });
    } catch (e) {
        console.error('Error reading yaml file', e);
        process.exit(1);
    }
  });

  var obj = {};
  docs.unshift(obj);
  return extend.apply(null, docs);
}

module.exports = mergeYaml;
