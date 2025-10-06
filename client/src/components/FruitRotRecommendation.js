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
          <img src="https://katyayanikrishidirect.com/cdn/shop/files/bordeaux_mixture_fungicide.webp?v=1752236809&width=713" alt="Bordeaux Mixture" />
          <h3>Bordeaux Mixture (1%)</h3>
          <p>Spray 1% Bordeaux mixture on bunches and crown region before and during monsoon.</p>
          <a href="https://katyayanikrishidirect.com/products/bordeaux-mixture-fungicide" target="_blank" rel="noopener noreferrer">Buy on Kyatayani</a>
        </div>

        {/* Card 2 */}
        <div className="recommendation-card">
          <img src="https://cdn.dotpe.in/longtail/store-items/6792607/xo91RAVs.png" alt="Ridomil Gold" />
          <h3>Metalaxyl + Mancozeb (Ridomil Gold)</h3>
          <p>Mix 2.5g per liter of water and spray on bunches every 25 days during monsoon.</p>
          <a href="https://www.kisancenter.in/product/26147925/Syngenta-Ridomil-Gold-Fungicide--Metalaxyl-4--Manconzeb-64--?srsltid=AfmBOorzwyIt8pG3n6SNlxWEr7A0xyFy08-4jB5QL1XNTQl_xvc3UX9Y4Q8" target="_blank" rel="noopener noreferrer">Buy on Kisancenter</a>
        </div>

        {/* Card 3 */}
        <div className="recommendation-card">
          <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQhuDJP0jeEMdYfreIrKjHInoz_Iews20MAwDCM9vChl6n4evfdmR050KWi8wSy8SbY40wYTLhpdkBJuZl0UYht2n13K2IpCO1_ZyXPKVNVJAbDt6e-58aPPdU" alt="Phosphorus Acid" />
          <h3>Phosphorus Acid 40%</h3>
          <p>Drench the soil around roots (10 ml/L water) to protect from root infection.</p>
          <a href="https://agribegri.com/products/thyla-p-1-litre.php?srsltid=AfmBOorlUJamX8if2se4BcQ3F0eSKA04ZxA0prpVMMoy7AdNHhtuZG9YAUk" target="_blank" rel="noopener noreferrer">Buy on AgriBegri</a>
        </div>

        {/* Card 4 */}
        <div className="recommendation-card">
          <img src="https://m.media-amazon.com/images/I/71tje6e9SIL._SL1280_.jpg" alt="Trichoderma" />
          <h3>Trichoderma harzianum</h3>
          <p>Mix with FYM and apply near roots at onset of monsoon.</p>
          <a href="https://www.amazon.in/Trichoherz-P-Trichoderma-Harzianum-Gardening-Pack/dp/B0D78X9S2X?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&smid=A2AL6IVND0I91F&th=1" target="_blank" rel="noopener noreferrer">Buy on Amazon</a>
        </div>

        {/* Card 5 */}
        <div className="recommendation-card">
          <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSYrQx4ATUcC9ejC254wp8LAkQet_wzHjQdj8osFsRGGw3fPrWbAAXiFACSzg1T7clu2--Ip9x9La-UNQS_H1jSqiQmUBydKMW6s0rYS-9I" alt="Neem Extract" />
          <h3>Neem Extract (Bio-fungicide)</h3>
          <p>Spray 3–5 ml per liter water as preventive during rainy season.</p>
          <a href="https://agriplexindia.com/products/anshul-maxi-neem-azadiractin-0-03-ec?variant=44325038817574&country=IN&currency=INR&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&srsltid=AfmBOorbEojP5sAVjqO6nYxa06oANBg6ug3U5OLBGCWbsW5NL-72Yr-VcSE" target="_blank" rel="noopener noreferrer">Buy on AgriPlus</a>
        </div>

        {/* Card 6 */}
        <div className="recommendation-card">
          <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQRDqHfzHjlAnA-S19L8SaHc4f9SV_yxGGFWA1J3vb3JNN4Trds_s9ZsuGO_KNryy6d3EpMtjsm7CNs9Y51F9nYACBD6HoWNjEwxyz6p7xYEHbDRhziVYNcHg" alt="Mancozeb" />
          <h3>Mancozeb 75% WP</h3>
          <p>Spray 2g per liter water on bunches every 20–25 days during infection period.</p>
          <a href="https://agribegri.com/products/buy-indofil-m-45-mancozeb-75-wp-broad-spectrum-fungicides--online-agro-store.php?srsltid=AfmBOopcQaxB-9UYjuNKwPFvsMGq3ReLqU39zgeyc9TrslAJkwbgWVGeFio" target="_blank" rel="noopener noreferrer">Buy on AgriBegri</a>
        </div>
      </div>
    </div>
  );
}

export default FruitRotRecommendation;
