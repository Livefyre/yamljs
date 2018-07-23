var assert = require('assert');
var livefyreYaml = require('..');

var fs = require('fs');
var appYamlStr = fs.readFileSync(__dirname+'/fixtures/app.yaml', 'utf8');

describe('.parse', function () {
  it('parses an app.yaml example', function () {
    process.env.TEST_ENV_VAR = 'test_env_var';
    var parsed = livefyreYaml.parse(appYamlStr);
    assert.deepEqual(parsed, {
      app: {
        ga_tracking_id: 'SUCH GOOGLE',
        apis: '',
        assets_dir: '',
        env_var: 'test_env_var'
      }
    });
  });
});

