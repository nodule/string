module.exports = {
  name: "chop",
  ns: "string",
  async: true,
  description: "Chop a string in equal parts.",
  phrases: {
    active: "Chopping string"
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
              out: underscore_string.chop(data, input.step)
            });
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      },
      step: {
        title: "Step",
        type: "number",
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