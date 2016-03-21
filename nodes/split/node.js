output = function(cb) {

  try {

    if($.regexp) {

      var m = $.regexp.match(/^\/(.*)\/([gmi]*)/);
      if(m.length === 3) {
        var re = new RegExp(m[1], m[2]);
        cb({ out: $.in.split(re) });
      } else {
        cb({ error: ['RegExp not recognized:', $.regexp, 'required format: /..../gm' ].join(' ') });
      }
    } else if($.seperator) {
      cb({ out: $.in.split($.seperator) });
    } else {
      cb({ error: 'no input seperator or regexp' });
    }

    done();

  } catch(err) {
    cb({ error: err });
    done();
  }

};
