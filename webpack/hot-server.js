var WebpackDevServer = require('webpack-dev-server'),
    webpack = require('webpack'),
    config = require('./development-client');

var server = new WebpackDevServer(webpack(config), {
  quiet: true,
  headers: {
    "Access-Control-Allow-Origin": '*'
  }
});

server.listen(3000, "localhost", function(err) {
  if (err) throw "webpack-dev-server: " + err;
  console.log("[webpack-dev-server]", "http://localhost:3000/webpack-dev-server/index.html");
});
