module.exports = {
  name: "truncate",
  ns: "string",
  async: true,
  description: "Truncate a string to the length specified",
  phrases: {
    active: "Truncating string to a length of {{input.length}}"
  },
  ports: {
    input: {
      "in": {
        title: "String",
        type: "string",
        async: true,
        required: true,
        fn: function __IN__(data, x, source, state, input, output, underscore_string) {
          var r = function() {
            output({
              out: $.write('in', underscore_string.truncate($.in, $.length))
            });
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      },
      length: {
        title: "Length",
        type: "number",
        required: true
      }
    },
    output: {
      out: {
        title: "String",
        type: "string"
      }
    }
  },
  dependencies: {
    npm: {
      "underscore.string": "##underscore.string##"
    }
  },
  state: {}
}