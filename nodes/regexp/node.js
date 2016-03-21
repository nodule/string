output = function(cb) {

  var r = new RegExp($.regexp, $.flags);
  var res = $.in.match(r);
  if(res) {
    cb({ out: res });
    done();
  } else {
    cb({ error: new Error('Could not match: ' + $.regexp ) });
    done();
  }

};
