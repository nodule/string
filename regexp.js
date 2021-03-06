module.exports = {
  name: "regexp",
  ns: "string",
  description: "Execute a regular expression",
  phrases: {
    active: "RegExping {{input.regexp}} {{input.flags}}"
  },
  ports: {
    input: {
      "in": {
        type: "string",
        title: "Data",
        required: true
      },
      regexp: {
        type: "string",
        title: "A Regular Expression",
        required: true
      },
      flags: {
        type: "string",
        title: "Flags",
        "default": "g"
      }
    },
    output: {
      out: {
        type: "array",
        title: "Results"
      },
      error: {
        type: "object",
        title: "Error"
      }
    }
  },
  fn: function regexp(input, $, output, state, done, cb, on) {
    var r = function() {
      var r = new RegExp($.regexp, $.flags);
      var res = $.in.match(r);
      if (res) {
        output({
          out: $.create(res)
        });
        done();
      } else {
        output({
          error: $.create(new Error('Could not match: ' + $.regexp))
        });
        done();
      }
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}