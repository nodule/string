module.exports = {
  name: "splice",
  ns: "string",
  async: true,
  description: "Replaces part of a string by index number and length",
  phrases: {
    active: "Splicing string"
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
              out: $.write('in', underscore_string.splice($.in, $.index, $.length, $.substring))
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
      length: {
        title: "Length",
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