var http  = require("http");

exports.stdin2http = function(req){

  process.stdin.setEncoding("utf8");
  process.stdin.on("readable", function(chunk) {
    chunk = process.stdin.read();
    if (chunk !== null) {
      req.write(chunk);
    }
  });
  process.stdin.on("end", function() {
    req.end();
  });
};

exports.httpreq = function(con){
  var req = http.request(con, function(res) {

              res.setEncoding("utf8");
              res.on("data",function (data) {
                var out = JSON.stringify(JSON.parse(data))
                process.stdout.write(out, null, 4);
              });
              res.on("end", function(){

              });
            });

  req.on("error", function(e) {
    process.stderr.write("http error " + e.message);
  });

  return req;
};