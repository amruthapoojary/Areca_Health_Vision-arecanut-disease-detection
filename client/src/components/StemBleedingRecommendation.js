import React, { useRef, useState } from "react";
import '../styles/Recommendation.css';
import { useNavigate } from "react-router-dom";

function StemBleedingRecommendation() {
  const navigate = useNavigate();
  const audioRef = useRef(null); // Reference to audio
  const [isPlaying, setIsPlaying] = useState(false); // Track play/pause state

  const toggleAudio = async () => {
    try {
      // If audio is already loaded
      if (audioRef.current) {
        if (isPlaying) {
          audioRef.current.pause();
          setIsPlaying(false);
        } else {
          audioRef.current.play();
          setIsPlaying(true);
        }
      } else {
        // Fetch audio first time
        const response = await fetch("http://localhost:5001/detailed_recommendation_audio", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ disease_type: "diseased_stem" })
        });
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        audioRef.current = new Audio(url);
        audioRef.current.play();
        setIsPlaying(true);

        // Stop button state when audio ends
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

      <h2>Stem Bleeding Disease – Recommendation</h2>
      <p className="disease-description">
        Stem bleeding is a serious fungal disease in arecanut caused by <em>Ganoderma lucidum</em>.
        It causes reddish-brown liquid to ooze from the stem, weakening the plant if left untreated.
      </p>

      {/* 🔊 Play/Pause Audio Button */}
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
          <img src="https://5.imimg.com/data5/SELLER/Default/2022/6/TV/EF/YK/143481956/tricyclazole-75-wp-1000x1000.jpeg" alt="Tricyclazole" />
          <h3>Tricyclazole 75% WP</h3>
          <p>Mix 2g in 1L of water and spray around the stem once every 15 days.</p>
          <a href="https://www.indiamart.com/proddetail/shree-tricyclazole-75-wp-fungicide-25890460233.html" target="_blank" rel="noopener noreferrer">Buy on Indiamart</a>
        </div>

        {/* Card 2 */}
        <div className="recommendation-card">
          <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQJG4MBBK2FBAw1qpudHSlFWGOCLcMiEzKDeY-dkvvKF7TuE3d53IvoueE8otcE2txqcc1F9-6ibxcS2ghVUiyJ0i_PWEEL3mf4fR-Ey8gZ_SCg5OsKxKRTDg" alt="Copper Oxychloride" />
          <h3>Copper Oxychloride</h3>
          <p>Apply 3g in 1L water. Use brush or sprayer to treat the affected stem.</p>
          <a href="https://agribegri.com/products/gharda-cutox-copper-oxychloride-50-wp-fungicide.php" target="_blank" rel="noopener noreferrer">Buy on AgriBegri</a>
        </div>

        {/* Card 3 */}
        <div className="recommendation-card">
          <img src="https://katyayanikrishidirect.com/cdn/shop/files/bordeaux_mixture_fungicide.webp?v=1752236809&width=713" alt="Bordeaux Paste" />
          <h3>Bordeaux Paste</h3>
          <p>Apply directly to the infected area once every week.</p>
          <a href="https://katyayanikrishidirect.com/products/bordeaux-mixture-fungicide" target="_blank" rel="noopener noreferrer">Buy on Kyatayani</a>
        </div>
        {/* Card 4 */}
        <div className="recommendation-card">
          <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSsdVWVT98gXaMC7myVnbvl9QTsrESpai5UJjaypIn7wKL6e4IfY8_ofwW1QeFyN-_wvNn7HlIoUIO3yLQBTwb8J-KeAuvmXSgrShixoS0JHP9KaW9iYeYv" alt="Trichoderma viride" />
          <h3>Trichoderma viride</h3>
          <p>Mix in FYM and apply near roots monthly.</p>
          <a href="https://www.flipkart.com/wesfra-bio-organic-trichoderma-viride-liquid-manure/p/itm4be7010a87146?pid=SMNGD6BKXWUZ4GFA&lid=LSTSMNGD6BKXWUZ4GFALPQ858&marketplace=FLIPKART&cmpid=content_soil-manure_8965229628_gmc" target="_blank" rel="noopener noreferrer">Buy on Flipkart</a>
        </div>

        {/* Card 5 */}
        <div className="recommendation-card">
          <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRmxivcPziIwgNrz9KAkunjT-0A1q5N7aHc8WECfoFAP2Uw1TwTGA1LwOxS_l1_7AjwA7hC_sMwpw0CfXqpUMT8VWDETqXWtDigy2su1QY5RezcoWH0W-qyAg" alt="Neem Cake" />
          <h3>Neem Cake</h3>
          <p>Use 250g per plant twice a year to prevent recurrence.</p>
          <a href="https://plantcare.co.in/product/plant-care-organic-neem-cake/?attribute_weight=500+GRAMS&srsltid=AfmBOopnM5h086FEsfYgeLvLNeE7u96ziiF_R-V72UK_6NyrN_pH-faoUTA" target="_blank" rel="noopener noreferrer">Buy on Plantcare</a>
        </div>

        {/* Card 6 */}
        <div className="recommendation-card">
          <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQbcBideIRtNxayAGA2B7KWIS8QJ2Ddn-UiFerA7PCTeHtcC4Ha621WZ7pgVrUzz3-7LlYJe5PK5Vc5TJYf0k4ZJ_qpdC9v3AwBqT0V9lGPLkuLhVDjCoOb" alt="Fungicide Mix" />
          <h3>Fungicide Mix Combo</h3>
          <p>Use as per label. Suitable for broad treatment.</p>
          <a href="https://www.meesho.com/pack-of-100-gm-carbendazim-12-mancozeb-63-wp-a-proven-classic-fungicide-with-systemic-contact-action/p/4lpu5o?utm_source=google&utm_medium=cpc&utm_campaign=gmc&srsltid=AfmBOop1Jqm94nj3RdbYmhTY75fRJbgb_S-1GTvWVGyoPAvbRVFubRbn5G8" target="_blank" rel="noopener noreferrer">Buy on Flipkart</a>
        </div>
      </div>
    </div>
      
    
  );
}

export default StemBleedingRecommendation;
