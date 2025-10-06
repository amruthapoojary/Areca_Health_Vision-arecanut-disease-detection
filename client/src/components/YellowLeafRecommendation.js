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
          <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQMkI0slvvnNiPAPC9vkDxOqc_kUY-t-7sX6M7kb2Yls1b452Xk4ietB-sOu9O7Tk4_Ht9Ui93o30ionkMgM2NSXDmLLKiMPlgjB4budBMwZiREg_6B1vth" alt="Urea" />
          <h3>Urea (Nitrogen Fertilizer)</h3>
          <p>Apply 50g per palm once a month to improve leaf greenness and overall plant vigor.</p>
          <a href="https://www.tradeindia.com/products/packaging-size-50kg-99-purity-iffco-grade-urea-agriculture-usage-7824792.html" target="_blank" rel="noopener noreferrer">Buy on TradeIndia</a>
        </div>

        {/* Card 2 */}
        <div className="recommendation-card">
          <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR0bfHkUYglGyD3K9ySphF-PWouf7ObzO_VDj1spYCrs3DXnPnY6XUB6tQgtpUdev69EBwEJqGI1K5O5kuAiKrqoUoN5fEWd8ZX-q3L56NX64qCUL02FzFvtQ" alt="Potassium Sulfate" />
          <h3>Potassium Sulfate (K2SO4)</h3>
          <p>Apply 25g per plant monthly to correct potassium deficiency and strengthen leaves.</p>
          <a href="https://www.mystore.in/en/product/0-0-50-potassium-sulphate-1?srsltid=AfmBOopnBj0Ot_urKUTX9TB2T0VIp4BOaM7QQCvJR3qAaZZzeW4uq1fNjuE" target="_blank" rel="noopener noreferrer">Buy on Mystore</a>
        </div>

        {/* Card 3 */}
        <div className="recommendation-card">
          <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ9D5yqWCyZmvbkpROUNLbv3cIAPi1GX_H-l3ymet3ZYM6GmEn_jFcG8ZCrEjNT7E4l_HheaTNliy5G37dDGfrC4lzFrIjeJl-FRNiwIqBii8faYaVnGJeG" alt="Magnesium Sulfate" />
          <h3>Magnesium Sulfate (Epsom Salt)</h3>
          <p>Dissolve 20g in 1L water and spray on leaves every 15 days to correct magnesium deficiency.</p>
          <a href="https://www.meesho.com/mittilyst-epsom-salt-1-kg-multi-purpose-magnesium-sulphate-vital-growth-of-fruits-flowering-plants-vegetables-nutrient-green-healthy-garden-bath-feet-soak-relieves-aches-pain/p/90bpdd?utm_source=google&utm_medium=cpc&utm_campaign=gmc&srsltid=AfmBOoqJ_Fz9fNqbtaV198aNSdKjTlekPYYnrvz-4Q1Bu_wzgVkT_hwqFvk" target="_blank" rel="noopener noreferrer">Buy on Meesho</a>
        </div>

        {/* Card 4 */}
          <div className="recommendation-card">
          <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSYrQx4ATUcC9ejC254wp8LAkQet_wzHjQdj8osFsRGGw3fPrWbAAXiFACSzg1T7clu2--Ip9x9La-UNQS_H1jSqiQmUBydKMW6s0rYS-9I" alt="Neem Extract" />
          <h3>Neem Extract (Bio-fungicide)</h3>
          <p>Spray 3–5 ml per liter water as preventive during rainy season.</p>
          <a href="https://agriplexindia.com/products/anshul-maxi-neem-azadiractin-0-03-ec?variant=44325038817574&country=IN&currency=INR&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&srsltid=AfmBOorbEojP5sAVjqO6nYxa06oANBg6ug3U5OLBGCWbsW5NL-72Yr-VcSE" target="_blank" rel="noopener noreferrer">Buy on AgriPlus</a>
        </div>

        {/* Card 5 */}
        <div className="recommendation-card">
          <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSJruE2DTmoCodrsjdXp5SMT2q5QCKGs35BXiWTi_2XClI_1lIdgWvTX5EEuKglff3Qaq9h1eN9LxaUw3AM4M-ppjEjRGzMZ4Pxzy7BK6QSPbLl3YVLOCkuNHw" alt="Micronutrient Mix" />
          <h3>Micronutrient Mix</h3>
          <p>Apply near root zone to correct minor deficiencies (Fe, Zn, Mn) which support leaf health.</p>
          <a href="https://agribegri.com/products/buy-tata-rallis-surplus-boron-20-fertilizer-online.php?srsltid=AfmBOorCB-mOj-xY0D_6MGaFmlU71TlA9ZZ9d_SnhfOgdV0-R84hWqilBiQ" target="_blank" rel="noopener noreferrer">Buy on AgriBegri</a>
        </div>

        {/* Card 6 */}
        <div className="recommendation-card">
          <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ8o-W4Y4yHzaotuG47aWNyKysm7KkKIlpBiuCgcQQ7VjJ-x3F6d4NIlsBnORJLQPHC28jtBe5e0n5bBQ3NrE5IwrT7phwNmCfsvw3tpSZ0I5A94BExNkCg" alt="Balanced NPK" />
          <h3>Balanced NPK Fertilizer</h3>
          <p>Use 50g per plant monthly to maintain overall nutrition balance and support recovery from Yellow Leaf.</p>
          <a href="https://www.flipkart.com/aranyani-balanced-npk-nutrients-plants-manure/p/itm73e0b372658ce?pid=SMNH2YBVYYAFCJJJ&lid=LSTSMNH2YBVYYAFCJJJUIVBIV&marketplace=FLIPKART&cmpid=content_soil-manure_8965229628_gmc" target="_blank" rel="noopener noreferrer">Buy on Flipkart</a>
        </div>
      </div>
    </div>
  );
}

export default YellowLeafRecommendation;
