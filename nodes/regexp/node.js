output = function(cb) {
  var r = new RegExp($.regexp, $.flags);
  var res = $.in.match(r);
  if(res) {
    cb({ out: $.create(res) });
    done();
  } else {
    cb({ error: $.create(new Error('Could not match: ' + $.regexp )) });
    done();
  }
};
