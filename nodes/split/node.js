output = function(cb) {
  try {
    if($.regexp) {
      var m = $.regexp.match(/^\/(.*)\/([gmi]*)/);
      if(m.length === 3) {
        var re = new RegExp(m[1], m[2]);
        cb({ out: $.write('in', $.in.split(re)) });
      } else {
        cb({ error: $.create(new Error(['RegExp not recognized:', $.regexp, 'required format: /..../gm' ].join(' '))) });
      }
    } else if($.seperator) {
      cb({ out: $.write('in', $.in.split($.seperator)) });
    } else {
      cb({ error: $.create(Error('no input seperator or regexp')) });
    }

    done();

  } catch(err) {
    cb({ error: $.create(err) });
    done();
  }

};
