import React from "react"; 
import '../styles/Recommendation.css';
import { useNavigate } from "react-router-dom";

function FruitRotRecommendation() {
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

      <h2>Fruit Rot Disease – Recommendation</h2>
      <p className="disease-description">
        Fruit rot (Koleroga) is caused by <em>Phytophthora palmivora</em>.
        It causes rotting and premature dropping of arecanut fruits, especially during the monsoon. Early treatment can prevent heavy losses.
      </p>

      <div className="card-grid">
        {/* Card 1 */}
        <div className="recommendation-card">
          <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.katyayaniorganics.com%2Fproduct%2Fkatyayani-bordeaux-mixture%2F&psig=AOvVaw2UPUM04OqRACce3A8axZyL&ust=1758881996179000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPiL77TY848DFQAAAAAdAAAAABAK" alt="Bordeaux Mixture" />
          <h3>Bordeaux Mixture (1%)</h3>
          <p>Spray 1% Bordeaux mixture on bunches and crown region before and during monsoon.</p>
          <a href="https://www.amazon.in/Agrostar-Bordeaux-Mixture/dp/B0B5JPRZ1M" target="_blank" rel="noopener noreferrer">Buy on Amazon</a>
        </div>

        {/* Card 2 */}
        <div className="recommendation-card">
          <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tradeindia.com%2Fproducts%2Fmetalaxyl-mancozeb-double-protection-leaf-spot-ridomil-gold-fungicides-for-agriculture-7882629.html&psig=AOvVaw3o3wcfCOiqCS3B2EX6pe-l&ust=1758882316007000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCMD35LTZ848DFQAAAAAdAAAAABAT" alt="Ridomil Gold" />
          <h3>Metalaxyl + Mancozeb (Ridomil Gold)</h3>
          <p>Mix 2.5g per liter of water and spray on bunches every 25 days during monsoon.</p>
          <a href="https://www.indiamart.com/proddetail/ridomil-gold-fungicide-22028647288.html" target="_blank" rel="noopener noreferrer">Buy on Indiamart</a>
        </div>

        {/* Card 3 */}
        <div className="recommendation-card">
          <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fdir.indiamart.com%2Fimpcat%2Fphosphorous-acid.html&psig=AOvVaw3guHNBzQFAdVr8cl7Rmfn6&ust=1758882423642000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCKiUxebZ848DFQAAAAAdAAAAABAL" alt="Phosphorus Acid" />
          <h3>Phosphorus Acid 40%</h3>
          <p>Drench the soil around roots (10 ml/L water) to protect from root infection.</p>
          <a href="https://www.amazon.in/Agrostar-Fosetyl-Aluminium/dp/B09SZV2F14" target="_blank" rel="noopener noreferrer">Buy on Amazon</a>
        </div>

        {/* Card 4 */}
        <div className="recommendation-card">
          <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.indiamart.com%2Fproddetail%2Ftrichoderma-harzianum-10-billion-20536724848.html%3Fsrsltid%3DAfmBOopKj-mmZaPocFWdVW7e2jBcUTf0IpFCEn1nTWwxdJVTVrcxwDRc&psig=AOvVaw0FlCiXBnpe1aTQwYy-Hq0o&ust=1758882505842000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCMjN8Yza848DFQAAAAAdAAAAABAE" alt="Trichoderma" />
          <h3>Trichoderma harzianum</h3>
          <p>Mix with FYM and apply near roots at onset of monsoon.</p>
          <a href="https://www.flipkart.com/agrobliss-trichoderma-harzianum-bio-fungicide/p/itmb21c02a8fdb1a" target="_blank" rel="noopener noreferrer">Buy on Flipkart</a>
        </div>

        {/* Card 5 */}
        <div className="recommendation-card">
          <img src="https://www.google.com/imgres?q=Neem%20Extract%20(Bio-fungicide)%20packet%20image&imgurl=https%3A%2F%2Fs7cdn.spectrumbrands.com%2F~%2Fmedia%2FHomeAndGarden%2FGarden%2520Safe%2FImages%2FProduct%2F2025%2520Product%2520Update%2FNeem%2FHG93231%2520Neem%2520Oil%252010%2520oz%2FHG93231_GS_NeemOil_10oz_G01_Front.jpg&imgrefurl=https%3A%2F%2Fwww.gardensafe.com%2Fproducts%2Ffungicide%2Fneem-oil-extract-concentrate.aspx&docid=tLa5jKVkNG-dMM&tbnid=9P8x99tPb6Fw5M&vet=12ahUKEwiGn72g2vOPAxVJUGwGHdERFS0QM3oECB4QAA..i&w=1500&h=1500&hcb=2&ved=2ahUKEwiGn72g2vOPAxVJUGwGHdERFS0QM3oECB4QAA" alt="Neem Extract" />
          <h3>Neem Extract (Bio-fungicide)</h3>
          <p>Spray 3–5 ml per liter water as preventive during rainy season.</p>
          <a href="https://www.amazon.in/Neem-Based-Bio-Fungicide/dp/B0C5T2R7X2" target="_blank" rel="noopener noreferrer">Buy on Amazon</a>
        </div>

        {/* Card 6 */}
        <div className="recommendation-card">
          <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.kisanestore.com%2Findex.php%3Froute%3Dproduct%2Fproduct%26product_id%3D6361&psig=AOvVaw2e17QhdGiXrNHcyhxnEHG-&ust=1758882807733000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCNDHuKHb848DFQAAAAAdAAAAABAE" alt="Mancozeb" />
          <h3>Mancozeb 75% WP</h3>
          <p>Spray 2g per liter water on bunches every 20–25 days during infection period.</p>
          <a href="https://www.indiamart.com/proddetail/mancozeb-75-wp-25196122748.html" target="_blank" rel="noopener noreferrer">Buy on Indiamart</a>
        </div>
      </div>
    </div>
  );
}

export default FruitRotRecommendation;

