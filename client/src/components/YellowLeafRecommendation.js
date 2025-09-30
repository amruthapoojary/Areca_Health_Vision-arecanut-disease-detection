import React from "react"; 
import '../styles/Recommendation.css';
import { useNavigate } from "react-router-dom";

function YellowLeafRecommendation() {
  const navigate = useNavigate();

  return (
    <div className="recommendation-container" style={{ padding: "20px" }}>
      {/* Floating Green Back Button */}
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
          <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.in%2FFertiliser-Soluble-Vegetables-Flowers-Fertilizer%2Fdp%2FB0FC6Z3KXD&psig=AOvVaw0MHUupTZxSSSfIdBZGiz4J&ust=1758883718750000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCLjUlNve848DFQAAAAAdAAAAABAE" alt="Urea" />
          <h3>Urea (Nitrogen Fertilizer)</h3>
          <p>Apply 50g per palm once a month to improve leaf greenness and overall plant vigor.</p>
          <a href="https://www.indiamart.com/proddetail/urea-fertilizer-22028647288.html" target="_blank" rel="noopener noreferrer">Buy on Indiamart</a>
        </div>

        {/* Card 2 */}
        <div className="recommendation-card">
          <img src="https://www.google.com/imgres?q=Potassium%20Sulfate%20%20packet%20image&imgurl=https%3A%2F%2Fcdn.commercev3.net%2Fcdn.arbico-organics.com%2Fimages%2Fuploads%2F1300335_dte_SG_potassium_sulfate_600x600.jpg&imgrefurl=https%3A%2F%2Fwww.arbico-organics.com%2Fproduct%2Fsolution-grade-potassium-sulfate-down-to-earth-fertilizers%2FOrganic-Fertilizer%3Fsrsltid%3DAfmBOopCxw0HiB0R2rhFG_uhxmdPcNRDVL-BX5pq6SkZTO-WuAKknbcD&docid=EmJp1xI-lVb93M&tbnid=dRAAwCu_uirlRM&vet=12ahUKEwj2utTv3vOPAxX0RmwGHdBOJngQM3oECDcQAA..i&w=600&h=600&hcb=2&ved=2ahUKEwj2utTv3vOPAxX0RmwGHdBOJngQM3oECDcQAA" alt="Potassium Sulfate" />
          <h3>Potassium Sulfate (K2SO4)</h3>
          <p>Apply 25g per plant monthly to correct potassium deficiency and strengthen leaves.</p>
          <a href="https://www.amazon.in/Potassium-Sulfate-Fertilizer/dp/B08XYZ1234" target="_blank" rel="noopener noreferrer">Buy on Amazon</a>
        </div>

        {/* Card 3 */}
        <div className="recommendation-card">
          <img src="https://www.google.com/imgres?q=Magnesium%20Sulfate%20(Epsom%20Salt)%20packet%20image&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F814Kdsm%2BC4L._UF1000%2C1000_QL80_.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.in%2FElemensis-Naturals-Magnesium-Therapeutic-Refreshing%2Fdp%2FB082FKFTKW&docid=kDKl4tHiotNH4M&tbnid=1G4KAEwm_C1vZM&vet=12ahUKEwiEzfKT3_OPAxWoTWwGHe1AB_IQM3oECBwQAA..i&w=1000&h=1000&hcb=2&ved=2ahUKEwiEzfKT3_OPAxWoTWwGHe1AB_IQM3oECBwQAA" alt="Magnesium Sulfate" />
          <h3>Magnesium Sulfate (Epsom Salt)</h3>
          <p>Dissolve 20g in 1L water and spray on leaves every 15 days to correct magnesium deficiency.</p>
          <a href="https://www.amazon.in/Magnesium-Sulfate-Epsom/dp/B07XYZ1234" target="_blank" rel="noopener noreferrer">Buy on Amazon</a>
        </div>

        {/* Card 4 */}
        <div className="recommendation-card">
          <img src="https://www.google.com/imgres?q=Neem%20Extract%20packet%20image&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F61N2oGMth3L._UF1000%2C1000_QL80_.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.in%2FNatureal-Organic-Neem-Extract-Capsules%2Fdp%2FB07TLCBC9W&docid=2VI5nvAfqEa5lM&tbnid=cwJMT5-KRRbk0M&vet=12ahUKEwimsJio3_OPAxXjSmwGHdFTB_YQM3oECBIQAA..i&w=1000&h=749&hcb=2&ved=2ahUKEwimsJio3_OPAxXjSmwGHdFTB_YQM3oECBIQAA" alt="Neem Extract" />
          <h3>Neem Extract</h3>
          <p>Spray 3–5 ml per liter water to control leafhopper populations, the primary vector of Yellow Leaf disease.</p>
          <a href="https://www.amazon.in/Neem-Extract-Bio-Pesticide/dp/B08XYZ1234" target="_blank" rel="noopener noreferrer">Buy on Amazon</a>
        </div>

        {/* Card 5 */}
        <div className="recommendation-card">
          <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fkrushidukan.bharatagri.com%2Fen%2Fproducts%2Fifc-micronutrient-mix-fertilizer-250-gm-1-1-free%3Fsrsltid%3DAfmBOoogqchxrvzEisvaI0kpnwJvXI1yz1asJsAQDJctqwZsWlAN6raa&psig=AOvVaw3Az4dbcUTuPXaqlc_RM3K4&ust=1758883959359000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCNDzwMXf848DFQAAAAAdAAAAABAE" alt="Micronutrient Mix" />
          <h3>Micronutrient Mix</h3>
          <p>Apply near root zone to correct minor deficiencies (Fe, Zn, Mn) which support leaf health.</p>
          <a href="https://www.flipkart.com/micronutrient-mix/p/itmf123456" target="_blank" rel="noopener noreferrer">Buy on Flipkart</a>
        </div>

        {/* Card 6 */}
        <div className="recommendation-card">
          <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Froyalsplant.com%2Fproduct%2Fnpk-19-19-19-water-soluble-fertilizer-pack-of-1kg%2F&psig=AOvVaw3m-2FCjh2L1MT5k4zI7CXF&ust=1758884023153000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCPDzo-Df848DFQAAAAAdAAAAABAE" alt="Balanced NPK" />
          <h3>Balanced NPK Fertilizer</h3>
          <p>Use 50g per plant monthly to maintain overall nutrition balance and support recovery from Yellow Leaf.</p>
          <a href="https://www.amazon.in/Balanced-NPK-Fertilizer/dp/B08XYZ5678" target="_blank" rel="noopener noreferrer">Buy on Amazon</a>
        </div>
      </div>
    </div>
  );
}

export default YellowLeafRecommendation;

