import React from "react";

const AnalysisResults = ({ results }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Compliance Score: {results.score}</h2>
      <h3 className="text-lg">Issues Detected: {results.totalIssues}</h3>
      <ul className="list-disc pl-6">
        {results.issues.map((issue, index) => (
          <li key={index} className="mt-2">
            <p className="text-red-500 font-bold">Issue: {issue.issue}</p>
            <p className="text-gray-700">Element: {issue.element}</p>
            <p className="text-blue-500">Suggestion: {issue.suggestion}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnalysisResults;
