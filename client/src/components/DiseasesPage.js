import React from "react";
import "../styles/DiseasesPage.css";

const diseases = [
  {
    id: 1,
    name: "Fruit Rot",
    image: "arecanut-disease-detection\client\Picture4.png",
    description: "This disease affects the fruit causing it to rot and fall prematurely.",
    treatment: "Apply Bordeaux mixture (1%) or copper oxychloride (0.25%)."
  },
  {
    id: 2,
    name: "Bud Rot",
    image: "arecanut-disease-detection\client\images (2).jfif",
    description: "The central shoot decays and the spindle withers and falls.",
    treatment: "Remove infected parts and spray 1% Bordeaux mixture or mancozeb."
  },
  {
    id: 3,
    name: "Leaf Blight",
    image: "arecanut-disease-detection\client\Picture2.png",
    description: "Irregular dark brown lesions develop on leaves.",
    treatment: "Spray fungicides like carbendazim or mancozeb at 0.2% concentration."
  },
  {
    id: 4,
    name: "Stem Bleeding",
    image: "arecanut-disease-detection\client\Picture3.png",
    description: "Dark brown patches and bleeding on stem surface.",
    treatment: "Scrape the affected area and apply Bordeaux paste or coal tar."
  }
];

function DiseasesPage() {
  return (
    <div className="diseases-container">
      <h2>🌿 Common Arecanut Diseases</h2>
      <div className="disease-grid">
        {diseases.map((disease) => (
          <div key={disease.id} className="disease-card">
            <img src={disease.image} alt={disease.name} />
            <h3>{disease.name}</h3>
            <p>{disease.description}</p>
            <strong>Treatment: {disease.treatment}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DiseasesPage;
