module.exports = {
  name: "include",
  ns: "string",
  async: true,
  description: "Indicates whether a string includes another string",
  phrases: {
    active: "Determining string inclusion"
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
              out: $.write('in', underscore_string.include($.in, $.include))
            });
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      },
      include: {
        title: "Include",
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