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
  fn: function split(input, $, output, state, done, cb, on) {
    var r = function() {
      try {
        if ($.regexp) {
          var m = $.regexp.match(/^\/(.*)\/([gmi]*)/);
          if (m.length === 3) {
            var re = new RegExp(m[1], m[2]);
            output({
              out: $.write('in', $.in.split(re))
            });
          } else {
            output({
              error: $.create(new Error(['RegExp not recognized:', $.regexp, 'required format: /..../gm'].join(' ')))
            });
          }
        } else if ($.seperator) {
          output({
            out: $.write('in', $.in.split($.seperator))
          });
        } else {
          output({
            error: $.create(Error('no input seperator or regexp'))
          });
        }

        done();

      } catch (err) {
        output({
          error: $.create(err)
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