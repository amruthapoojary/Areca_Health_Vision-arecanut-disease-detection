import React, { useState } from "react";
import '../styles/ScanPage.css';

import { useNavigate } from 'react-router-dom';


function ScanPage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleDetectClick = () => {
    if (selectedFile) {
      alert(`Detecting disease from: ${selectedFile.name}`);
      // Future: send file to backend for detection
    } else {
      alert("Please select an image first.");
    }
  };

  const handleLogout = () => {
    // If you want to clear any auth data, do it here (e.g. localStorage.clear())
    navigate('/login');
  };

  return (
    <div className="scan-container">
      <h2>📸 Scan Arecanut Image</h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />
      <br />
      <button onClick={handleDetectClick}>Detect Disease</button>

      {/* Logout button at the bottom */}
      <button 
        onClick={handleLogout} 
        style={{
          marginTop: '3rem', 
          backgroundColor: '#d9534f',  // red color
          color: 'white',
          padding: '0.5rem 1rem',
          borderRadius: '6px',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default ScanPage;
