module.exports = {
  name: "slugify",
  ns: "string",
  async: true,
  description: "Transform text into a URL slug. Replaces whitespaces, accentuated, and special characters with a dash.",
  phrases: {
    active: "Slugifying string"
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
              out: $.write('in', underscore_string.slugify($.in))
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