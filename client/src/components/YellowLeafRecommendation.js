import React from "react";
import '../styles/Recommendation.css';  // ✅ Ensure this CSS file exists
import { useNavigate } from "react-router-dom";

function YellowLeafRecommendation() {
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
        onClick={() => navigate("/scan")}
      >
        Back
      </button>
      
      <h2>Yellow Leaf Disease – Recommendation</h2>
      <p className="disease-description">
        Yellow Leaf Disease is a major issue in arecanut, often associated with fungal infections and 
        nutrient deficiencies (mainly potassium and magnesium). It causes premature yellowing and drying of leaves, 
        reducing yield and tree health if untreated.
      </p>

      <div className="card-grid">
        {/* Card 1 */}
        <div className="recommendation-card">
          <img src="https://m.media-amazon.com/images/I/71Q0D8S6mRL._AC_UL480_FMwebp_QL65_.jpg" alt="Potassium Sulphate" />
          <h3>Potassium Sulphate (K₂SO₄)</h3>
          <p>Apply 200g per plant twice a year to correct potassium deficiency and improve leaf health.</p>
          <a href="https://www.amazon.in/Potassium-Sulphate-Fertilizer" target="_blank" rel="noopener noreferrer">Buy on Amazon</a>
        </div>

        {/* Card 2 */}
        <div className="recommendation-card">
          <img src="https://m.media-amazon.com/images/I/51wG-3vlxRL._AC_UL480_FMwebp_QL65_.jpg" alt="Magnesium Sulphate" />
          <h3>Magnesium Sulphate (MgSO₄)</h3>
          <p>Mix 10g in 1L of water and spray on leaves monthly to control yellowing due to magnesium deficiency.</p>
          <a href="https://www.amazon.in/Magnesium-Sulphate-Fertilizer" target="_blank" rel="noopener noreferrer">Buy on Amazon</a>
        </div>

        {/* Card 3 */}
        <div className="recommendation-card">
          <img src="https://agribegri.com/admin/images/prod_image/AgriBegri-Micro-Boss-Grade-2-Micronutrients.jpg" alt="Micronutrient Mixture" />
          <h3>Micronutrient Mixture</h3>
          <p>Use foliar spray containing Zn, B, Fe once in 2 months to boost resistance and improve leaf color.</p>
          <a href="https://agribegri.com/products/micronutrient-mixture" target="_blank" rel="noopener noreferrer">Buy on AgriBegri</a>
        </div>

        {/* Card 4 */}
        <div className="recommendation-card">
          <img src="https://m.media-amazon.com/images/I/71iX-zyJv4L._AC_UL480_FMwebp_QL65_.jpg" alt="Trichoderma viride" />
          <h3>Trichoderma viride</h3>
          <p>Apply with FYM near the root zone once every 3 months to control fungal pathogens.</p>
          <a href="https://www.amazon.in/Trichoderma-Viride" target="_blank" rel="noopener noreferrer">Buy on Amazon</a>
        </div>

        {/* Card 5 */}
        <div className="recommendation-card">
          <img src="https://5.imimg.com/data5/SELLER/Default/2022/6/TV/EF/YK/143481956/tricyclazole-75-wp-1000x1000.jpeg" alt="Tricyclazole Fungicide" />
          <h3>Tricyclazole 75% WP</h3>
          <p>Spray 2g in 1L water if fungal infection is suspected along with yellowing symptoms.</p>
          <a href="https://www.indiamart.com/proddetail/shree-tricyclazole-75-wp-fungicide-25890460233.html" target="_blank" rel="noopener noreferrer">Buy on Indiamart</a>
        </div>
      </div>
    </div>
  );
}

export default YellowLeafRecommendation;
