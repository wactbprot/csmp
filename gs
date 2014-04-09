#!/usr/bin/env node
/**
 * csmp.gs ... get/send
 *
 * gs fromurl tourl
 */
(function() {
  var pa      = process.argv,
      fpath    = pa[2],
      fserver  = 'localhost',
      fport    = 5984,
      tpath    = pa[3],
      tserver  = 'localhost',
      tport    = 8001,
      http    = require('http'),
      postreq,
      getreq;

  var getops = {
    hostname:fserver,
    port: fport,
    path:fpath,
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
    };

  var postops = {
    hostname:tserver,
    port: tport,
    path:tpath,
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
    };

  //--- post ---
  if(tpath){
    var tocb = function(res) {
      var str = ''
      res.on('data', function (chunk) {
        str += chunk;
      });

      res.on('end', function () {
        console.log(str);
      });
    }

    postreq = http.request(postops, tocb);
    postreq.on('error', function(e) {
      console.log('post error ' + e.message);
    });
  }



  // --- get---
  if(fpath){

    var fromcb = function(res) {
      res.setEncoding('utf8');
      res.on('data', function (data) {
        if(tpath){
          postreq.write(data);
          postreq.end();

        }else{
          console.log(data);
        }
        });
    }

    getreq = http.request(getops, fromcb);
    getreq.on('error', function(e) {
      console.log('get error ' + e.message);
    });

    getreq.end();
  }
  //
  // at least this works
  // var  request = require('request');
  // request.get(from).pipe(request.put(to))
  //
})();