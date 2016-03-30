module.exports = {
  name: "underscored",
  ns: "string",
  async: true,
  description: "Converts a camelized or dasherized string into an underscored one",
  phrases: {
    active: "Underscoring string"
  },
  ports: {
    input: {
      "in": {
        title: "String",
        type: "string",
        async: true,
        required: true,
        fn: function __IN__(data, source, state, input, $, output, underscore_string) {
          var r = function() {
            output({
              out: $.write('in', underscore_string.underscore($.in))
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