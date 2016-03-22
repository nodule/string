module.exports = {
  name: "humanize",
  ns: "string",
  async: true,
  description: "Converts an underscored, camelized, or dasherized string into a humanized one. Also removes beginning and ending whitespace, and removes the postfix '_id'.",
  phrases: {
    active: "Humanizing string"
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
              out: $.write('in', underscore_string.humanize($.in))
            });
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
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