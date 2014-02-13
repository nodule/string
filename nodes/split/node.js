output = function(cb) {

  try {

    if(input.regexp) {

      var m = input.regexp.match(/^\/(.*)\/([gmi]*)/);
      if(m.length === 3) {
        var re = new RegExp(m[1], m[2]);
        cb({ out: input.in.split(re) });
      } else {
        cb({ error: ['RegExp not recognized:', input.regexp, 'required format: /..../gm' ].join(' ') });
      }
    } else if(input.seperator) {
      cb({ out: input.in.split(input.seperator) });
    } else {
      cb({ error: 'no input seperator or regexp' });
    }

    done();

  } catch(err) {
    cb({ error: err });
    done();
  }

};
