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

exports.loadInjected = function (onErr) {
  try {
    return exports.parse(process.env.PYYACC_INJECT);
  } catch (e) {
    if (onErr) {
      return onErr(e);
    }
    console.error('Unable to read PYYACC_INJECT environment variable', e);
    process.exit(2);
  }
}
/**
 * Uses a fully hydrated config from `process.env.PYYACC_INJECT`,
 * or falls back to the callback.
 */
exports.loadInjectedOr = function (callback) {
  if (!process.env.PYYACC_INJECT) {
    return callback();
  }
  return exports.loadInjected();
}

exports.stringify = function (obj, options) {
  return yaml.safeDump(obj, {schema: schema});
};

exports.parse = function (obj, options) {
  return yaml.safeLoad(obj, {schema: schema});
};
