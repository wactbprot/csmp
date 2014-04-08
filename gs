#!/usr/bin/env node
/**
 * csmp.gs ... get/send
 *
 * gs fromurl tourl
 */
(function() {
  var pa      = process.argv,
      from    = pa[2],
      to      = pa[3],
      request = require('request');

  request.get(from).pipe(request.put(to))
})();