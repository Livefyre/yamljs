/**
 * @fileoverview Helper utils
 */
var util = require('util');

/**
 * Deep extend - yaml style.
 */
function extend(target, var_mergeables) {
  var i = 1;
  var length = arguments.length;
  var options;
  var clone;
  var name;
  var src;
  var copy;
  
  // Iterate over each mergable passed in.
  for (; i < length; i++) {

    // Only deal with non-null/undefined values
    if ((options = arguments[i]) == null) {
      continue;
    }

    // Extend the base object
    for (name in options) {
      src = target[name];
      copy = options[name];

      // Prevent never-ending loop
      if (target === copy) {
        continue;
      }

      // Recurse if we're merging plain objects or arrays
      if (typeof copy === 'object') {
        if (util.isArray(copy)) {
          clone = src && util.isArray(src) ? src : [];
        } else {
          clone = src || {};
        }

        target[name] = extend(clone, copy);

      // Otherwise, shallow copy
      } else {
        target[name] = copy;
      }
    }
  }

  // Return the modified object
  return target;
}

module.exports = {
  extend: extend
};
