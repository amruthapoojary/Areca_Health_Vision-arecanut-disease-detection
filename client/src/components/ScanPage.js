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

  const handleRecommendationClick = () => {
    alert("🌱 Recommendation:\nApply Bordeaux paste after cleaning infected area.\nAvoid excess moisture.\nUse disease-resistant varieties if possible.");
  };

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <>
      {/* Logout button outside container (top-right) */}
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

        {prediction && (
          <>
            <h3 style={{ color: "green", marginTop: "1rem" }}>
              ✅ Prediction: {prediction}
            </h3>

            {prediction.includes("diseased") && (
              <button
                className="recommend-btn"
                onClick={handleRecommendationClick}
              >
                Show Recommendation
              </button>
            )}
          </>
        )}

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
