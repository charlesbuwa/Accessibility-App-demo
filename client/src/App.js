import React, { useState } from "react";
import FileUpload from "./components/FileUpload";
import AccessibilityReport from "./components/AccessibilityReport";

const App = () => {
  const [analysis, setAnalysis] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-6">
        {/* Header Section */}
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-center text-blue-600">
            Accessibility Checker
          </h1>
          <p className="text-center text-gray-700 mt-2">
            Upload your HTML file to check its accessibility compliance.
          </p>
        </header>

        {/* File Upload Component */}
        <section className="mb-6">
          <FileUpload setAnalysis={setAnalysis} />
        </section>

        {/* Accessibility Report Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Analysis Results
          </h2>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <AccessibilityReport analysis={analysis} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
