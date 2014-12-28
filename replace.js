module.exports = {
  name: "replace",
  ns: "string",
  description: "Replaces a string within another string",
  phrases: {
    active: "Replacing string"
  },
  ports: {
    input: {
      "in": {
        title: "String",
        type: "string",
        required: true
      },
      match: {
        title: "Match",
        type: "string",
        required: true
      },
      replace: {
        title: "Replacement",
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
  fn: function replace(input, output, state, done, cb, on) {
    var r = function() {
      var r = new RegExp(input.match, 'g');
      output.out = input.in.replace(r, input.replace)
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}