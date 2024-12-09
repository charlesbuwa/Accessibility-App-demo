import React, { useState } from "react";
import axios from "axios";

const FileUploader = ({ onResults }) => {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("htmlFile", file);
    const { data } = await axios.post(
      "http://localhost:5000/api/analyze",
      formData
    );

    // const { data } = await axios.post("/api/analyze", formData);

    onResults(data);
  };

  return (
    <div className="p-4">
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        className="border p-2"
      />
      <button
        onClick={handleUpload}
        className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
      >
        Analyze
      </button>
    </div>
  );
};

export default FileUploader;
