import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Recommendation.css';  // Reuse same CSS

function FruitRotRecommendation() {
    const navigate = useNavigate();

  return (
    <div className="recommendation-container" style={{ padding: "20px" }}>
      {/* ✅ Floating Green Button (right side) */}
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
        onClick={() => navigate("/scan")} // 👈 change path if you want Scan/Logout
      >
        Back
      </button>
      <h2>Fruit Rot Disease – Recommendation</h2>
      <p className="disease-description">
        Fruit rot is a common fungal disease in arecanut caused by <em>Phytophthora spp.</em>.
        It affects the nuts, causing rotting and premature fruit drop. If not managed, it can lead to severe yield loss.
      </p>

      <div className="card-grid">
        {/* Card 1 */}
        <div className="recommendation-card">
          <img src="https://5.imimg.com/data5/SELLER/Default/2022/6/TV/EF/YK/143481956/tricyclazole-75-wp-1000x1000.jpeg" alt="Tricyclazole" />
          <h3>Tricyclazole 75% WP</h3>
          <p>Mix 2g in 1L of water and spray fruits every 10–15 days during monsoon.</p>
          <a href="https://www.indiamart.com/proddetail/shree-tricyclazole-75-wp-fungicide-25890460233.html" target="_blank" rel="noopener noreferrer">Buy on Indiamart</a>
        </div>

        {/* Card 2 */}
        <div className="recommendation-card">
          <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQJG4MBBK2FBAw1qpudHSlFWGOCLcMiEzKDeY-dkvvKF7TuE3d53IvoueE8otcE2txqcc1F9-6ibxcS2ghVUiyJ0i_PWEEL3mf4fR-Ey8gZ_SCg5OsKxKRTDg" alt="Copper Oxychloride" />
          <h3>Copper Oxychloride</h3>
          <p>Spray 3g in 1L of water on immature fruits to prevent fungal spread.</p>
          <a href="https://agribegri.com/products/gharda-cutox-copper-oxychloride-50-wp-fungicide.php" target="_blank" rel="noopener noreferrer">Buy on AgriBegri</a>
        </div>

        {/* Card 3 */}
        <div className="recommendation-card">
          <img src="https://katyayanikrishidirect.com/cdn/shop/files/bordeaux_mixture_fungicide.webp?v=1752236809&width=713" alt="Bordeaux Mixture" />
          <h3>Bordeaux Mixture</h3>
          <p>Spray 1% Bordeaux mixture on bunches during early infection.</p>
          <a href="https://katyayanikrishidirect.com/products/bordeaux-mixture-fungicide" target="_blank" rel="noopener noreferrer">Buy on Kyatayani</a>
        </div>

        {/* Card 4 */}
        <div className="recommendation-card">
          <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSsdVWVT98gXaMC7myVnbvl9QTsrESpai5UJjaypIn7wKL6e4IfY8_ofwW1QeFyN-_wvNn7HlIoUIO3yLQBTwb8J-KeAuvmXSgrShixoS0JHP9KaW9iYeYv" alt="Trichoderma viride" />
          <h3>Trichoderma viride</h3>
          <p>Apply near root zone and bunches to reduce fungal activity.</p>
          <a href="https://www.flipkart.com/wesfra-bio-organic-trichoderma-viride-liquid-manure/p/itm4be7010a87146" target="_blank" rel="noopener noreferrer">Buy on Flipkart</a>
        </div>

        {/* Card 5 */}
        <div className="recommendation-card">
          <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRmxivcPziIwgNrz9KAkunjT-0A1q5N7aHc8WECfoFAP2Uw1TwTGA1LwOxS_l1_7AjwA7hC_sMwpw0CfXqpUMT8VWDETqXWtDigy2su1QY5RezcoWH0W-qyAg" alt="Neem Cake" />
          <h3>Neem Cake</h3>
          <p>Apply 250g near roots twice a year to boost plant resistance.</p>
          <a href="https://plantcare.co.in/product/plant-care-organic-neem-cake/" target="_blank" rel="noopener noreferrer">Buy on Plantcare</a>
        </div>

        {/* Card 6 */}
        <div className="recommendation-card">
          <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQbcBideIRtNxayAGA2B7KWIS8QJ2Ddn-UiFerA7PCTeHtcC4Ha621WZ7pgVrUzz3-7LlYJe5PK5Vc5TJYf0k4ZJ_qpdC9v3AwBqT0V9lGPLkuLhVDjCoOb" alt="Fungicide Mix" />
          <h3>Fungicide Mix Combo</h3>
          <p>Apply as preventive spray at 20-day intervals during rainy season.</p>
          <a href="https://www.meesho.com/pack-of-100-gm-carbendazim-12-mancozeb-63-wp-a-proven-classic-fungicide/p/4lpu5o" target="_blank" rel="noopener noreferrer">Buy on Flipkart</a>
        </div>
      </div>
    </div>
  );
}

export default FruitRotRecommendation;
