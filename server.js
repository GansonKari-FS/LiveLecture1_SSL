const http = require("http");
require("dotenv").config();

const server = http.createServer();

server.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});
