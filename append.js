module.exports = {
  name: "append",
  ns: "string",
  description: "Appends a string to an other string",
  phrases: {
    active: "Appending string"
  },
  ports: {
    input: {
      "in": {
        title: "String",
        type: "string",
        required: true
      },
      append: {
        title: "Other String",
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
  fn: function append(input, output, state, done, cb, on) {
    var r = function() {
      output.out = input.in + input.append
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}