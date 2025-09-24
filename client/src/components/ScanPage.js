import React, { useState } from "react";
import '../styles/ScanPage.css';
import { useNavigate } from 'react-router-dom';

function ScanPage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [prediction, setPrediction] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [diseaseType, setDiseaseType] = useState('stem_bleeding'); // default
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
    formData.append("disease_type", diseaseType);

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

  // ✅ Decide result message
  const getResultMessage = () => {
    if (diseaseType === "stem_bleeding") {
      if (prediction === "diseased_stem") return "❌ Diseased Stem Detected";
      if (prediction === "healthy_stem") return "✅ Stem is Healthy";
    } else if (diseaseType === "fruit_rot") {
      if (prediction === "diseased_fruit") return "❌ Diseased Fruit Detected";
      if (prediction === "healthy_fruit") return "✅ Fruit is Healthy";
    } else if (diseaseType === "yellow_leaf") {
      if (prediction === "diseased_leaf") return "❌ Diseased Leaf Detected (Yellow Leaf)";
      if (prediction === "healthy_leaf") return "✅ Leaf is Healthy";
    }
    return "";
  };

  // ✅ Decide if diseased → show recommendation button
  const isDiseased =
    prediction === "diseased_stem" ||
    prediction === "diseased_fruit" ||
    prediction === "diseased_leaf";

  return (
    <>
      {/* Logout button top-right */}
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>

      <div className="scan-container">
        <h2>📸 Scan Arecanut Image</h2>

        {/* Dropdown to select disease type */}
        <label style={{ marginBottom: "0.5rem", display: "block" }}>
          Select Disease Type:
        </label>
        <select
          value={diseaseType}
          onChange={(e) => setDiseaseType(e.target.value)}
          style={{
            padding: "0.5rem",
            borderRadius: "6px",
            marginBottom: "1rem"
          }}
        >
          <option value="stem_bleeding">Stem</option>
          <option value="fruit_rot">Fruit</option>
          <option value="yellow_leaf">Leaf</option>
        </select>

        <br />

        {/* File upload */}
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
        <br />

        {/* Detect button */}
        <button onClick={handleDetectClick} disabled={loading}>
          {loading ? "Detecting..." : "Detect Disease"}
        </button>

        {/* ✅ Show Prediction Result */}
        {prediction && (
          <h3
            style={{
              marginTop: "1.5rem",
              color: isDiseased ? "red" : "green"
            }}
          >
            {getResultMessage()}
          </h3>
        )}

        {/* ✅ Show Recommendation Button if Diseased */}
        {isDiseased && (
          <button
            onClick={() =>
              navigate(
                diseaseType === "stem_bleeding"
                  ? "/stem-bleeding-recommendation"
                  : diseaseType === "fruit_rot"
                  ? "/fruit-rot-recommendation"
                  : "/yellow-leaf-recommendation"
              )
            }
            style={{
              marginTop: "1.5rem",
              padding: "0.6rem 1.5rem",
              fontSize: "1.1rem",
              backgroundColor: "#28a745", // ✅ Green instead of blue
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer"
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
