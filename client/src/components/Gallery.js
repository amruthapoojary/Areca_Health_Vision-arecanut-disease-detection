import React from "react";
import "../styles/Gallery.css";

const diseases = [
  {
    id: 1,
    name: "Fruit Rot",
    image: "/Picture4.png",
    description: "This disease affects the fruit causing it to rot and fall prematurely.",
    treatment: "Apply Bordeaux mixture (1%) or copper oxychloride (0.25%)."
  },
  
  {
    id: 2,
    name: "Yellow leaf disease",
    image: "/Picture2.png",

    description: "Irregular yellow lesions develop on leaves.",
    treatment: "Spray fungicides like carbendazim or mancozeb at 0.2% concentration."
  },
  {
    id: 3,
    name: "Stem Bleeding",
    image: "/Picture3.png",
    description: "Dark brown patches and bleeding on stem surface.",
    treatment: "Scrape the affected area and apply Bordeaux paste or coal tar."
  }
];

function Gallery() {
  return (
    <div className="gallery-container">
      <h2>🌿 Arecanut Disease Gallery</h2>
      <div className="gallery-grid">
        {diseases.map((disease) => (
          <div key={disease.id} className="gallery-card">
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

export default Gallery;
