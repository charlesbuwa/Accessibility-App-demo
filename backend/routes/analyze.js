const express = require("express");
const multer = require("multer");
const analyzeHTML = require("../utils/analyzer");
const fs = require("fs");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/analyze", upload.single("htmlFile"), (req, res) => {
  try {
    const html = fs.readFileSync(req.file.path, "utf8");
    const analysis = analyzeHTML(html);
    fs.unlinkSync(req.file.path); // Cleanup file
    res.json(analysis);
  } catch (err) {
    res.status(500).json({ error: "Error processing the file." });
  }
});

module.exports = router;
