module.exports = {
  name: "startsWith",
  ns: "string",
  async: true,
  description: "Checks whether a string starts with substring",
  phrases: {
    active: "Determining whether string starts with {{input.substring}}"
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
              out: $.write('in', underscore_string.startsWith($.in, $.substring))
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