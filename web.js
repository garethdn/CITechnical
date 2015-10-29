(function() {
  'use strict';

  /* global process:false, require:false, __dirname:false, console:false */
  var port = Number(process.env.PORT || 8000);
  var express = require('express');

  var app = express();

  app.use('/', express.static('dist'));

  app.get('/*', function(req, res, next) {
    res.sendFile('index.html', { root: __dirname + '/dist' });
  });

  var server = app.listen(port, function() { 
    console.log('Listening on port %d', server.address().port); 
  });

})();