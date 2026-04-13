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

//localhost: 3000/api/anything that follows it
// where we define our route parmaters
// get , put , delete
router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    message: `GET by id for /api`,
    metadata: {
      hostname: req.hostname,
      method: req.method,
    },
  });
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
