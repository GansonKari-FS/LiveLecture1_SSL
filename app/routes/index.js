const express = require(`express`);
const router = express.Router();

router.get(`/`, (req, res) => {
  res.status(200).json({ message: `From the API` });
});

router.post("/", (req, res) => {
  console.log("Resquest body >>>", req.body);
});

module.exports = router;
