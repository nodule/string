module.exports = {
  name: "insert",
  ns: "string",
  description: "Inserts a substring at the index given",
  phrases: {
    active: "Inserting substring"
  },
  async: true,
  ports: {
    input: {
      "in": {
        title: "String",
        type: "string",
        async: true,
        required: true,
        fn: function __IN__(data, x, source, state, input, output, underscore_string) {
          var r = function() {
            underscore_string.insert(data, input.index, input.substring);
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      },
      index: {
        title: "Index",
        type: "number",
        required: true
      },
      substring: {
        title: "Substring",
        type: "string",
        required: true
      }
    },
    output: {
      out: {
        title: "Distance",
        type: "number"
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