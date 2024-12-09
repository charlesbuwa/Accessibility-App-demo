const cheerio = require("cheerio");

const analyzeHTML = (html) => {
  const $ = cheerio.load(html);
  let totalIssues = 0;
  const issues = [];

  // Rule 1: Missing alt attributes
  $("img").each((_, element) => {
    if (!$(element).attr("alt")) {
      totalIssues++;
      issues.push({
        issue: "Missing alt attribute",
        element: $(element).toString(),
        suggestion: "Add a descriptive alt attribute to this image.",
      });
    }
  });

  // Rule 2: Skipped heading levels
  const headings = $("h1, h2, h3, h4, h5, h6").map((_, el) =>
    $(el).prop("tagName")
  );
  headings.each((i, el) => {
    const currentLevel = parseInt(el.substring(1));
    const nextLevel = parseInt(headings[i + 1]?.substring(1) || 0);
    if (nextLevel > currentLevel + 1) {
      totalIssues++;
      issues.push({
        issue: "Skipped heading level",
        element: `<${headings[i + 1]}>`,
        suggestion: `Ensure heading levels follow a sequential order.`,
      });
    }
  });

  const score = Math.max(0, 100 - totalIssues * 10);
  return { score, totalIssues, issues };
};

module.exports = analyzeHTML;
