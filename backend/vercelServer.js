const express = require("express");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const analyzer = require("./utils/analyzer");

const app = express();
const upload = multer({ dest: "uploads/" });

app.use(cors());
app.use(express.json());

app.post("/upload", upload.single("htmlFile"), (req, res) => {
  try {
    const filePath = path.join(__dirname, req.file.path);
    const analysis = analyzer.analyzeFile(filePath);
    res.json(analysis);
  } catch (error) {
    console.error("Error analyzing file:", error);
    res.status(500).json({ error: "Failed to analyze file" });
  }
});

module.exports = app;
