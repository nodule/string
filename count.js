module.exports = {
  name: "count",
  ns: "string",
  async: true,
  description: "Counts the number occurances of a string within another string",
  phrases: {
    active: "Capitalizing string"
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
              out: underscore_string.count(data, input.substring)
            });
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      },
      substring: {
        title: "Sub String",
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