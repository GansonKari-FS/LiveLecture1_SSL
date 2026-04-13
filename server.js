const http = require("http");
require("dotenv").config();
const app = require("./app/app.js");
const server = http.createServer(app);

server.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});
