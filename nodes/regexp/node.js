output = function(cb) {

  var r = new RegExp(input.regexp, input.flags);
  var res = input.in.match(r);
  if(res) {
    cb({ out: res });
  }

};