const fs = require("fs");
const cheerio = require("cheerio");

const analyzeFile = (filePath) => {
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const $ = cheerio.load(fileContent);

  let score = 100;
  const issues = [];

  // Rule 1: Check for missing alt attributes in images
  $("img").each((_, img) => {
    if (!$(img).attr("alt")) {
      issues.push({
        issue: "Missing alt attribute",
        element: $.html(img),
        suggestion: "Add a descriptive alt attribute to this image.",
      });
      score -= 10;
    }
  });

  // Rule 2: Check for skipped heading levels
  const headings = [];
  $("h1, h2, h3, h4, h5, h6").each((_, heading) => {
    headings.push(parseInt(heading.tagName[1]));
  });
  headings.forEach((level, index) => {
    if (index > 0 && level - headings[index - 1] > 1) {
      issues.push({
        issue: "Skipped heading level",
        suggestion: `Use <h${headings[index - 1] + 1}> instead of <h${level}>.`,
      });
      score -= 5;
    }
  });

  // Rule 3: Check for empty anchor tags
  $("a").each((_, anchor) => {
    if (!$(anchor).text().trim()) {
      issues.push({
        issue: "Empty anchor tag",
        element: $.html(anchor),
        suggestion: "Add meaningful text inside the anchor tag.",
      });
      score -= 5;
    }
  });

  // Return the results
  return {
    score: Math.max(score, 0),
    issues,
  };
};

module.exports = { analyzeFile };
