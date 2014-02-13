output = function(cb) {

  try {

    if(input.regexp) {
      cb({ out: input.in.split(new RegExp(input.regexp)) });
    } else if(input.seperator) {
      cb({ out: input.in.split(input.seperator) });
    } else {
      cb({ out: [] });
    }

    done();

  } catch(err) {
    cb({ error: err });
    done();
  }

};
