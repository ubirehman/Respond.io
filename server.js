const http = require("http");
const app = require("./app.js");
const config = require("./config/config.js");



function onError (error) {
  if (error.syscall !== 'listen') {
    throw error
  }

  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges')
      process.exit(1)
      break
    case 'EADDRINUSE':
      console.error(bind + ' is already in use')
      process.exit(1)
      break
    default:
      throw error
  }
}


function onListening () {
  const addr = server.address()
  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port
    console.log('Listening on ' + bind)
}

const port = process.PORT || 4001;
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

server.on('error', onError)
server.on('listening', onListening)

module.exports = { server };
