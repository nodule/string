module.exports = {
  name: "concat",
  ns: "string",
  description: "Combines the text of two or more strings and returns a new string.",
  phrases: {
    active: "Concatenating string"
  },
  ports: {
    input: {
      "in": {
        title: "String Parts",
        type: "array",
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
  fn: function concat(input, output, state, done, cb, on) {
    var r = function() {
      output.out = input.string.concat.apply(null, input.in)
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}