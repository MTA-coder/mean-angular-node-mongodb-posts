const http = require('http');
const debug = require("debug")("node-angular");
const app = require('./backend/app');
const { env } = require('process');

const normalizePort = val => {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};

const server = http.createServer(app);
server.listen(normalizePort(process.env.PORT || "3000"));
