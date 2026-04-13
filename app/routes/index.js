const express = require("express");
const router = express.Router();

//localhost: 3000/api
router.get("/", (req, res) => {
  res.status(200).json({
    message: "GET to API ",
    metadata: {
      hostname: req.hostname,
      method: req.method,
    },
  });
});

// where we define our route parmaters
router.get("/:bob", (req, res) => {
  const { bob } = req.params;

});

router.post("/", (req, res) => {
  const { data } = req.body;
  res.status(200).json({
    message: "POST to /api",
    data: req.body,
    metadata: {
      hostname: req.hostname,
      method: req.method,
    },
  });
});

module.exports = router;
