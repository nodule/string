module.exports = {
  name: "prune",
  ns: "string",
  async: true,
  description: "Elegant version of truncate. Makes sure the pruned string does not exceed the original length. Avoid half-chopped words when truncating.",
  phrases: {
    active: "Pruning string to a length of {{input.length}}"
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
              out: $.write('in', underscore_string.prune($.in, $.length, $.prune))
            });
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      },
      length: {
        title: "Length",
        type: "number",
        required: true
      },
      prune: {
        title: "Prune string",
        type: "string",
        "default": "..."
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