const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/initconundrum21", (req, res) => {
  res.sendFile(path.resolve("public/build/initEvent.html"));
});

router.post("/feedData", (req, res) => {
  const { key } = req.body;
  const time = parseInt(process.env.DURATION) * 60 * 1000;
  if (key === process.env.STARTSECRET) {
    const startTime = Date.now();
    const endTime = startTime + time;
    process.env.startTime = startTime;
    process.env.endTime = endTime;

    console.log(`Start time: ${startTime}`);
    console.log(`End time: ${endTime}`);
    res.send(`Start time: ${startTime}  End time: ${endTime}`);
  }
});

module.exports = router;
