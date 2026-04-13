const express = require("express");
const app = express();

// attach a way to request boody data in json format
app.use(express.json());

// from local hot 3000
app.get("/", (req, res) => {
  res.status(200).json({
    message: "GET - root",
    metadata: {
      hostname: req.hostname,
      method: req.method,
    },
  });
});

module.exports = app;
