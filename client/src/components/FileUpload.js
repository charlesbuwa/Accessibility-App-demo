import React, { useState } from "react";
import axios from "axios";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [results, setResults] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select a file to upload.");

    const formData = new FormData();
    formData.append("htmlFile", file);

    try {
      const response = await axios.post(
        "http://localhost:5000/upload",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setResults(response.data);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <div className="bg-white shadow-lg rounded-lg p-8 w-11/12 md:w-1/2">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
          HTML Accessibility Checker
        </h1>
        <div className="flex flex-col items-center space-y-4">
          <input
            type="file"
            accept=".html"
            className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            onChange={handleFileChange}
          />
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-600"
            onClick={handleUpload}
          >
            Upload File
          </button>
        </div>

        {results && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-800">
              Accessibility Report
            </h2>
            <p className="text-gray-700 mt-2">
              <strong>Compliance Score:</strong> {results.score}%
            </p>

            <h3 className="text-lg font-semibold mt-4 text-gray-800">
              Issues:
            </h3>
            {results.issues.length > 0 ? (
              <ul className="list-disc ml-5 mt-2 text-gray-700">
                {results.issues.map((issue, index) => (
                  <li key={index} className="mb-2">
                    <p>
                      <strong>Issue:</strong> {issue.issue}
                    </p>
                    {issue.element && (
                      <p>
                        <strong>Element:</strong> <code>{issue.element}</code>
                      </p>
                    )}
                    <p>
                      <strong>Suggestion:</strong> {issue.suggestion}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-2 text-green-700">No issues found. Great job!</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
