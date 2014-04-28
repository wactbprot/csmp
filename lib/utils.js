var http  = require('http');

exports.stdin2http = function(req){

  process.stdin.setEncoding('utf8');
  process.stdin.on('readable', function(chunk) {
    chunk = process.stdin.read();
    if (chunk !== null) {
      req.write(chunk);
    }
  });
  process.stdin.on('end', function() {
    req.end();
  });
};

exports.httpreq = function(con){
  var str = '';

  var postfn = function (data) {
    str += data;
  };

  var putfn = function (data) {
    str += data;
  };


  var getfn = function (data) {
    process.stdout.write(data);
  };

  var req = http.request(con, function(res) {
              res.setEncoding('utf8');

              if(con.method == 'POST'){
                res.on('data', postfn);
              }
              if(con.method == 'GET'){
                res.on('data', getfn);
              }
              if(con.method == 'PUT'){
                res.on('data', putfn);
              }
              res.on('end', function(){});
            });

  req.on('error', function(e) {
    process.stderr.write("http get error " + e.message);
  });

  return req;
};