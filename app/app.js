const express = require("express");
const app = express();
const router = require("./routes/index.js");

// this lets Express read JSON from Postman
app.use(express.json());

// root route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Service is up",
    metadata: {
      hostname: req.hostname,
      method: req.method,
    },
  });
});

// this connects all routes from index.js to /api
app.use("/api", router);

module.exports = app;
