var assert = require('assert');
var util = require('../util');

describe('util tests', function() {

  describe('extends test', function() {
    it('Simple (non recursive extends work)', function() {
      var x = {};
      util.extend(x, {a: 'b'});
      assert(x.a === 'b');
    });

    it('Recursive extends work', function() {
      var x = {};
      util.extend(x, {a: {b: 'c'}, 'f4': 123}, {a: {d: 'e'}})

      assert(x.a.b === 'c');
      assert(x.a.d === 'e');
      assert(x['f4'] === 123);
    });
  });
});
