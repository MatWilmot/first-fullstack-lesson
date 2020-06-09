const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/api", (req, res) => {
  res.json({ mes: "FULL STACK YEEEEEEE" });
});

router.get("/api2", (req, res) => {
  res.json({ mes: "Hello from the API AGAIN!!!" });
});

module.exports = router;
