module.exports = {
  name: "toUpperCase",
  ns: "string",
  async: true,
  description: "Convert string to uppercase",
  phrases: {
    active: "Uppercasing string"
  },
  ports: {
    input: {
      "in": {
        title: "String",
        type: "string",
        async: true,
        required: true,
        fn: function __IN__(data, x, source, state, input, output) {
          var r = function() {
            output({
              out: data.toUpperCase()
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