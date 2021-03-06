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
        fn: function __IN__(data, source, state, input, $, output, underscore_string) {
          var r = function() {
            output({
              out: $.write('in', underscore_string.insert($.in, $.index, $.substring))
            });
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