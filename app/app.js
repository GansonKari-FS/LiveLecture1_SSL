const express = require("express");
const app = express();

// localhost 3000
app.get("/", (req, res) => {
  console.log("GET");
});

module.exports = app;
