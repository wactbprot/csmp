#!/usr/bin/env node
/**
 * csmp.gs ... get/send
 *
 * gs fromurl tourl
 */
(function() {
  var pa      = process.argv,
      from    = pa[2],
      to      = pa[3];

  var http = require('http');
  var options = {
    host: to,
    method: 'POST'
  };

  var callback = function(response) {
    var str = ''
    response.on('data', function (chunk) {
      str += chunk;
    });

    response.on('end', function () {
      console.log(str);
    });
  }

  var req = http.request(options, callback);

  req.write("hello world!");
  req.end();

  //
  // at least this works
  // var  request = require('request');
  // request.get(from).pipe(request.put(to))
  //
})();