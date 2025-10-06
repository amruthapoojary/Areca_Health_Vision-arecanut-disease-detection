import React, { useRef, useState } from "react"; 
import '../styles/Recommendation.css';
import { useNavigate } from "react-router-dom";

function YellowLeafRecommendation() {
  const navigate = useNavigate();
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = async () => {
    try {
      if (audioRef.current) {
        if (isPlaying) {
          audioRef.current.pause();
          setIsPlaying(false);
        } else {
          audioRef.current.play();
          setIsPlaying(true);
        }
      } else {
        // Fetch audio from Flask server
        const response = await fetch("http://localhost:5001/detailed_recommendation_audio", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ disease_type: "diseased_leaf" })
        });
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        audioRef.current = new Audio(url);
        audioRef.current.play();
        setIsPlaying(true);

        audioRef.current.onended = () => setIsPlaying(false);
      }
    } catch (error) {
      console.error("Error playing audio:", error);
    }
  };

  return (
    <div className="recommendation-container" style={{ padding: "20px" }}>
      {/* Back Button */}
      <button
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          backgroundColor: "green",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "bold",
          boxShadow: "0 4px 6px rgba(0,0,0,0.2)"
        }}
        onClick={() => navigate("/scan")}
      >
        Back
      </button>

      <h2>Yellow Leaf Disease – Recommendation</h2>
      <p className="disease-description">
        Yellow Leaf Disease is a major issue in arecanut, often caused by fungal infections and nutrient deficiencies (mainly potassium and magnesium). 
        Leaves turn yellow prematurely, reducing yield and weakening the tree if untreated.
      </p>

      {/* Play/Pause Audio Button */}
      <button
        onClick={toggleAudio}
        style={{
          margin: "20px 0",
          padding: "10px 20px",
          backgroundColor: isPlaying ? "#B22222" : "#006400",
          color: "white",
          borderRadius: "8px",
          fontWeight: "bold",
          cursor: "pointer",
          boxShadow: "0 3px 6px rgba(0,0,0,0.2)"
        }}
      >
        {isPlaying ? "🔇 Pause Audio" : "🔊 Play Audio"}
      </button>

      {/* Recommendation Cards */}
      <div className="card-grid">
        {/* Card 1 */}
        <div className="recommendation-card">
          <img src="https://example.com/urea.jpg" alt="Urea" />
          <h3>Urea (Nitrogen Fertilizer)</h3>
          <p>Apply 50g per palm once a month to improve leaf greenness and overall plant vigor.</p>
          <a href="https://www.indiamart.com/proddetail/urea-fertilizer-22028647288.html" target="_blank" rel="noopener noreferrer">Buy on Indiamart</a>
        </div>

        {/* Card 2 */}
        <div className="recommendation-card">
          <img src="https://example.com/potassium_sulfate.jpg" alt="Potassium Sulfate" />
          <h3>Potassium Sulfate (K2SO4)</h3>
          <p>Apply 25g per plant monthly to correct potassium deficiency and strengthen leaves.</p>
          <a href="https://www.amazon.in/Potassium-Sulfate-Fertilizer/dp/B08XYZ1234" target="_blank" rel="noopener noreferrer">Buy on Amazon</a>
        </div>

        {/* Card 3 */}
        <div className="recommendation-card">
          <img src="https://example.com/magnesium_sulfate.jpg" alt="Magnesium Sulfate" />
          <h3>Magnesium Sulfate (Epsom Salt)</h3>
          <p>Dissolve 20g in 1L water and spray on leaves every 15 days to correct magnesium deficiency.</p>
          <a href="https://www.amazon.in/Magnesium-Sulfate-Epsom/dp/B07XYZ1234" target="_blank" rel="noopener noreferrer">Buy on Amazon</a>
        </div>

        {/* Card 4 */}
        <div className="recommendation-card">
          <img src="https://example.com/neem_extract.jpg" alt="Neem Extract" />
          <h3>Neem Extract</h3>
          <p>Spray 3–5 ml per liter water to control leafhopper populations, the main vector of Yellow Leaf disease.</p>
          <a href="https://www.amazon.in/Neem-Extract-Bio-Pesticide/dp/B08XYZ1234" target="_blank" rel="noopener noreferrer">Buy on Amazon</a>
        </div>

        {/* Card 5 */}
        <div className="recommendation-card">
          <img src="https://example.com/micronutrient_mix.jpg" alt="Micronutrient Mix" />
          <h3>Micronutrient Mix</h3>
          <p>Apply near root zone to correct minor deficiencies (Fe, Zn, Mn) which support leaf health.</p>
          <a href="https://www.flipkart.com/micronutrient-mix/p/itmf123456" target="_blank" rel="noopener noreferrer">Buy on Flipkart</a>
        </div>

        {/* Card 6 */}
        <div className="recommendation-card">
          <img src="https://example.com/balanced_npk.jpg" alt="Balanced NPK" />
          <h3>Balanced NPK Fertilizer</h3>
          <p>Use 50g per plant monthly to maintain overall nutrition balance and support recovery from Yellow Leaf.</p>
          <a href="https://www.amazon.in/Balanced-NPK-Fertilizer/dp/B08XYZ5678" target="_blank" rel="noopener noreferrer">Buy on Amazon</a>
        </div>
      </div>
    </div>
  );
}

export default YellowLeafRecommendation;
