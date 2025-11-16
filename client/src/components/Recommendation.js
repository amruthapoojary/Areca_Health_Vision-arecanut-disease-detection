import React, { useEffect, useState } from "react";
import "../styles/Recommendation.css";
import { useNavigate, useLocation } from "react-router-dom";

function RecommendationPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const { disease, stage } = location.state || {}; 
  // Example: disease = "stem_bleeding", stage = "critical"

  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!disease || !stage) return;

    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:5001/get_recommendations", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ disease, stage }),
        });

        const data = await res.json();
        setCards(data.data || []);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching recommendations:", err);
        setLoading(false);
      }
    };

    fetchData();
  }, [disease, stage]);

  if (!disease || !stage) {
    return (
      <div style={{ padding: "20px", color: "red" }}>
        <h2>Error: Disease or Stage missing!</h2>
      </div>
    );
  }

  return (
    <div className="recommendation-container">

      {/* Back Button */}
      <button className="back-btn" onClick={() => navigate("/scan")}>
        Back
      </button>

      {/* Title */}
      <h2 style={{ marginTop: "40px", textTransform: "capitalize" }}>
        {disease.replace("_", " ")} – {stage} Stage Recommendations
      </h2>

      {/* Loader */}
      {loading && <p style={{ fontSize: "18px" }}>Loading recommendations...</p>}

      {/* Cards Grid */}
      <div className="card-grid">
        {cards.map((card) => (
          <div key={card.id} className="recommendation-card">
            <img src={card.image_url} alt={card.title} />
            <h3>{card.title}</h3>
            <p>{card.description}</p>

            {card.buy_link && (
              <a href={card.buy_link} target="_blank" rel="noopener noreferrer">
                Buy Now
              </a>
            )}
          </div>
        ))}

        {!loading && cards.length === 0 && (
          <p>No recommendations found for this category.</p>
        )}
      </div>
    </div>
  );
}

export default RecommendationPage;
