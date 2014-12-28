module.exports = {
  name: "classify",
  ns: "string",
  async: true,
  description: "Converts string to camelized class name. First letter is always upper case",
  phrases: {
    active: "Classifying string"
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
              out: underscore_string.classify(data)
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