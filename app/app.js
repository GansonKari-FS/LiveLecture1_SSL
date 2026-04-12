const express = require("express");
const app = express();
const router = require("./routes");

// localhost 3000
app.get("/", (req, res) => {
  console.log(`GET`);
  res.json({ message: "Hello World" });
});

app.use(`/api`, router);

module.exports = app;
