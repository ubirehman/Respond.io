const http = require("http");
const app = require("./app.js");
const config = require("./config/config.js");


const port = config.port;
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

module.exports = { server };
