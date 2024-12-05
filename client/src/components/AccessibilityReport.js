import React from "react";

const AccessibilityReport = ({ analysis }) => {
  if (!analysis) {
    return <p>No analysis available. Upload a file to begin.</p>;
  }

  return (
    <div className="p-4 border rounded-md shadow-md">
      <h2 className="text-xl font-bold">Accessibility Report</h2>
      <p className="text-lg mt-2">
        Compliance Score: <span className="font-bold">{analysis.score}%</span>
      </p>
      <ul className="list-disc list-inside mt-4">
        {analysis.issues.map((issue, index) => (
          <li key={index} className="mb-2">
            <p>
              <strong>Issue:</strong> {issue.issue}
            </p>
            <p>
              <strong>Suggestion:</strong> {issue.suggestion}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AccessibilityReport;
