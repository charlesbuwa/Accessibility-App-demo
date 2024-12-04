const express = require("express");
const multer = require("multer");
const path = require("path");
const cors = require("cors"); // Import cors
const analyzer = require("./analyzer");

const app = express();
const PORT = 5000;

// Configure multer for file uploads
const upload = multer({ dest: "uploads/" });

// Enable CORS for specific origin
app.use(
  cors({
    origin: "http://localhost:3000", // Frontend URL
  })
);

// Parse JSON
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

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
