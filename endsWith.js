module.exports = {
  name: "endsWith",
  ns: "string",
  async: true,
  description: "Checks whether a string ends with substring",
  phrases: {
    active: "Determining whether string ends with {{input.substring}}"
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
              out: $.write('in', underscore_string.endsWith($.in, $.substring))
            });
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      },
      substring: {
        title: "Substring",
        type: "string",
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