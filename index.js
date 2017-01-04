'use strict'

require('babel-register')

// TODO - remove NODE_PATH from package.json in npm run dev script
// Ref. http://stackoverflow.com/questions/34683682/webpack-aliases-in-node-js-server-code
var server = require('./devServer').default

const port = process.env.PORT || 3000

server.listen(port, function() {
  // var host = server.address().address;
  // var port = server.address().port;

  var host = 'localhost';

  console.log('app listening at http://%s:%s', host, port);
})
