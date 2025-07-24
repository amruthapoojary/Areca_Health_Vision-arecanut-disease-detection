import React, { useState } from "react";
import '../styles/ScanPage.css';
import { useNavigate } from 'react-router-dom';

function ScanPage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [prediction, setPrediction] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setPrediction('');
    setError('');
  };

  const handleDetectClick = async () => {
    if (!selectedFile) {
      alert("Please select an image first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      setLoading(true);
      setError('');
      setPrediction('');

      const response = await fetch("http://localhost:5001/predict", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Flask error:", errorText);
        setError("Server error: Could not process the image.");
        return;
      }

      const data = await response.json();

      if (data.prediction) {
        setPrediction(data.prediction);
      } else {
        setError("Prediction failed. No prediction returned.");
      }
    } catch (err) {
      console.error("Error during prediction:", err);
      setError("Could not connect to the Flask server.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <>
      {/* Logout button top-right */}
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>

      <div className="scan-container">
        <h2>📸 Scan Arecanut Image</h2>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
        <br />
        <button onClick={handleDetectClick} disabled={loading}>
          {loading ? "Detecting..." : "Detect Disease"}
        </button>

        {/* ✅ Show Prediction Result */}
        {prediction && (
          <h3 style={{ marginTop: '1.5rem', color: prediction === 'diseased_stem' ? 'red' : 'green' }}>
            {prediction === 'diseased_stem' ? '❌ Diseased Stem Detected' : '✅ Stem is Healthy'}
          </h3>
        )}

        {/* ✅ Show Recommendation Button if Diseased */}
        {prediction === 'diseased_stem' && (
          <button
            onClick={() => navigate('/stem-bleeding-recommendation')}
            style={{
              marginTop: '1.5rem',
              padding: '0.6rem 1.5rem',
              fontSize: '1.1rem',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
          >
            Show Recommendation
          </button>
        )}

        {/* ❌ Error Display */}
        {error && (
          <p style={{ color: "red", marginTop: "1rem" }}>
            ⚠️ {error}
          </p>
        )}
      </div>
    </>
  );
}

export default ScanPage;
