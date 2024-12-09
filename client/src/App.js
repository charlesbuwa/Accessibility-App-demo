import React, { useState } from "react";
import FileUploader from "./components/FileUpload";
import AnalysisResults from "./components/AccessibilityReport";

const App = () => {
  const [results, setResults] = useState(null);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">
        HTML Accessibility Analyzer
      </h1>
      <FileUploader onResults={setResults} />
      {results && <AnalysisResults results={results} />}
    </div>
  );
};

export default App;
