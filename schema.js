var yaml = require('js-yaml');

var uri = new yaml.Type('!uri', {
  loader: {
    kind: 'string',
    resolver: function (object) {
      return object;
    }
  }
});

var required = new yaml.Type('!required', {
  loader: {
    kind: 'string',
    resolver: function (object) {
      if (object === yaml.NIL) {
        throw 'field is required';
        return yaml.NIL;
      }
      return object;
    }
  }
});

var spec = new yaml.Type('!spec', {
  loader: {
    kind: 'object',
    resolver: function (object) {
      if ('value' in object) {
        return object.value;
      }
      throw 'value is required';
    }
  }
});

module.exports = yaml.Schema.create([uri, required, spec]);
