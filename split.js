module.exports = {
  name: "split",
  ns: "string",
  description: "Splits a String object into an array of strings by separating the string into substrings.",
  phrases: {
    active: "Splitting string"
  },
  ports: {
    input: {
      "in": {
        title: "String",
        type: "string",
        required: true
      },
      seperator: {
        title: "Seperator",
        type: "string",
        description: "Specifies the character(s) to use for separating the string. The separator is treated as a string or a regular expression. If separator is omitted, the array returned contains one element consisting of the entire string. If separator is an empty string, str is converted to an array of characters.",
        required: true,
        "default": null
      },
      regexp: {
        title: "Regular Expression",
        type: "string",
        "default": null
      }
    },
    output: {
      out: {
        title: "String parts",
        type: "array"
      },
      error: {
        title: "Error",
        type: "object"
      }
    }
  },
  fn: function split(input, output, state, done, cb, on) {
    var r = function() {
      try {

        if (input.regexp) {

          var m = input.regexp.match(/^\/(.*)\/([gmi]*)/);
          if (m.length === 3) {
            var re = new RegExp(m[1], m[2]);
            output({
              out: input.in.split(re)
            });
          } else {
            output({
              error: ['RegExp not recognized:', input.regexp, 'required format: /..../gm'].join(' ')
            });
          }
        } else if (input.seperator) {
          output({
            out: input.in.split(input.seperator)
          });
        } else {
          output({
            error: 'no input seperator or regexp'
          });
        }

        done();

      } catch (err) {
        output({
          error: err
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