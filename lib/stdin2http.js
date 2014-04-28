exports.stdin2http = function(req){

  process.stdin.setEncoding('utf8');
  process.stdin.on('readable', function(chunk) {
    chunk = process.stdin.read();
    if (chunk !== null) {
      req.write(chunk);
    }
    req.end();
  });
  process.stdin.on('end', function() {
    process.stdout.write("end stdin\n");
  });
}