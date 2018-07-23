var assert = require('assert');
var livefyreYaml = require('..');

var fs = require('fs');
var appYamlStr = fs.readFileSync(__dirname+'/fixtures/app.yaml', 'utf8');

describe('.parse', function () {
  it('parses an app.yaml example', function () {
    process.env.TEST_ENV_VAR = 'test_env_var';
    process.env.TEST_ENV_VAR_OBJECT = '{test_env_var: 1}';
    var parsed = livefyreYaml.parse(appYamlStr);
    assert.deepEqual(parsed, {
      app: {
        ga_tracking_id: 'SUCH GOOGLE',
        apis: '',
        assets_dir: '',
        env_var: 'test_env_var',
        env_var_object: {test_env_var: 1}
      }
    });
  });
});

