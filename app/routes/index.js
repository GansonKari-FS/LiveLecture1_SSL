const express = require("express");
const router = express.Router();

//local host
router.get("/", (req, res) => {
  res.status(200).json({
    message: "GET to API",
    metadata: {
      hostname: req.hostname,
      method: req.method,
    },
  });
});

module.exports = router;
