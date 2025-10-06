import React, { useRef, useState } from "react"; 
import '../styles/Recommendation.css';
import { useNavigate } from "react-router-dom";

function FruitRotRecommendation() {
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
          body: JSON.stringify({ disease_type: "fruit_rot" })
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
      {/* Floating Back Button */}
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

      <h2>Fruit Rot Disease – Recommendation</h2>
      <p className="disease-description">
        Fruit rot (Koleroga) is caused by <em>Phytophthora palmivora</em>. 
        It causes rotting and premature dropping of arecanut fruits, especially during the monsoon. 
        Early treatment can prevent heavy losses.
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
          <img src="https://example.com/bordeaux.jpg" alt="Bordeaux Mixture" />
          <h3>Bordeaux Mixture (1%)</h3>
          <p>Spray 1% Bordeaux mixture on bunches and crown region before and during monsoon.</p>
          <a href="https://www.amazon.in/Agrostar-Bordeaux-Mixture/dp/B0B5JPRZ1M" target="_blank" rel="noopener noreferrer">Buy on Amazon</a>
        </div>

        {/* Card 2 */}
        <div className="recommendation-card">
          <img src="https://example.com/ridomil.jpg" alt="Ridomil Gold" />
          <h3>Metalaxyl + Mancozeb (Ridomil Gold)</h3>
          <p>Mix 2.5g per liter of water and spray on bunches every 25 days during monsoon.</p>
          <a href="https://www.indiamart.com/proddetail/ridomil-gold-fungicide-22028647288.html" target="_blank" rel="noopener noreferrer">Buy on Indiamart</a>
        </div>

        {/* Card 3 */}
        <div className="recommendation-card">
          <img src="https://example.com/phosphorus_acid.jpg" alt="Phosphorus Acid" />
          <h3>Phosphorus Acid 40%</h3>
          <p>Drench the soil around roots (10 ml/L water) to protect from root infection.</p>
          <a href="https://www.amazon.in/Agrostar-Fosetyl-Aluminium/dp/B09SZV2F14" target="_blank" rel="noopener noreferrer">Buy on Amazon</a>
        </div>

        {/* Card 4 */}
        <div className="recommendation-card">
          <img src="https://example.com/trichoderma.jpg" alt="Trichoderma" />
          <h3>Trichoderma harzianum</h3>
          <p>Mix with FYM and apply near roots at onset of monsoon.</p>
          <a href="https://www.flipkart.com/agrobliss-trichoderma-harzianum-bio-fungicide/p/itmb21c02a8fdb1a" target="_blank" rel="noopener noreferrer">Buy on Flipkart</a>
        </div>

        {/* Card 5 */}
        <div className="recommendation-card">
          <img src="https://example.com/neem_extract.jpg" alt="Neem Extract" />
          <h3>Neem Extract (Bio-fungicide)</h3>
          <p>Spray 3–5 ml per liter water as preventive during rainy season.</p>
          <a href="https://www.amazon.in/Neem-Based-Bio-Fungicide/dp/B0C5T2R7X2" target="_blank" rel="noopener noreferrer">Buy on Amazon</a>
        </div>

        {/* Card 6 */}
        <div className="recommendation-card">
          <img src="https://example.com/mancozeb.jpg" alt="Mancozeb" />
          <h3>Mancozeb 75% WP</h3>
          <p>Spray 2g per liter water on bunches every 20–25 days during infection period.</p>
          <a href="https://www.indiamart.com/proddetail/mancozeb-75-wp-25196122748.html" target="_blank" rel="noopener noreferrer">Buy on Indiamart</a>
        </div>
      </div>
    </div>
  );
}

export default FruitRotRecommendation;
