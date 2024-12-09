const express = require("express");
const analyzeRoute = require("./routes/analyze");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", analyzeRoute);

module.exports = app;
