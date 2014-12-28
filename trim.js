module.exports = {
  name: "trim",
  ns: "string",
  async: true,
  description: "trims defined characters from begining and ending of the string. Defaults to whitespace characters.",
  phrases: {
    active: "Trimming string"
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
              out: underscore_string.trim(data, input.chars)
            });
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      },
      chars: {
        title: "Characters",
        type: "string",
        "default": " ",
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