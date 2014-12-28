module.exports = {
  name: "swapCase",
  ns: "string",
  async: true,
  description: "Swap the case of all case-based characters",
  phrases: {
    active: "Swapping case-based characters"
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
              out: underscore_string.swapCase(data)
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