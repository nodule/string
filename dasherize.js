module.exports = {
  name: "dasherize",
  ns: "string",
  async: true,
  description: "Converts a underscored or camelized string into an dasherized one",
  phrases: {
    active: "Dasherizing string"
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
              out: $.write('in', underscore_string.dasherize($.in))
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