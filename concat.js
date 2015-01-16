module.exports = {
  name: "concat",
  ns: "string",
  description: "Combines the text of two or more strings and returns a new string.",
  async: true,
  phrases: {
    active: "Concatenating string"
  },
  ports: {
    input: {
      "in": {
        title: "String Parts",
        type: "array",
        async: true,
        fn: function __IN__(data, x, source, state, input, output) {
          var r = function() {
            output({
              out: String.prototype.concat.apply(input.in)
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
  state: {}
}