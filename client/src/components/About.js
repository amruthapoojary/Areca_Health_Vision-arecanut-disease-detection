import React from 'react';
import "../styles/App.css";

const About = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>About Us</h1>
      </header>

      <section className="about-content">
        <div className="about-description">
          <h2>Arecanut Disease Detection System</h2>
          <p style={{ textAlign: "justify" }}>
            Our Arecanut Disease Detection System is an AI-powered web platform designed to assist farmers, researchers, and agricultural experts in identifying and managing diseases affecting arecanut crops. By utilizing advanced image processing, deep learning, and explainable AI techniques, our system detects diseases at various stages and suggests appropriate treatments to help minimize crop loss and ensure better productivity.
          </p>
        </div>
        <div className="about-image">
          <img
            src="https://media.istockphoto.com/id/1183803820/photo/group-of-school-children-with-teacher-on-field-trip-in-nature-learning-science.jpg?s=612x612&w=0&k=20&c=bVUAikVLGkCoJ21g7WTlN1wD6etDwDBcp5LX_Rq7UOI="
            alt="Arecanut Field"
          />
        </div>
      </section>

      <section className="about-creative-features">
        <h2>Features of Our System</h2>
        <div className="feature-item">
          <i className="fas fa-microscope"></i>
          <h3>Real-time Disease Detection</h3>
          <p>Upload images of arecanut plants and get instant disease identification using our AI model.</p>
        </div>
        <div className="feature-item">
          <i className="fas fa-notes-medical"></i>
          <h3>Treatment Suggestions</h3>
          <p>Get recommended pesticides, fungicides, and preventive measures based on the identified disease.</p>
        </div>
        <div className="feature-item">
          <i className="fas fa-eye"></i>
          <h3>Explainable AI </h3>
          <p>Development of a Smart Hat integrated with sensors and a camera, along with a web application, to detect arecanut diseases .</p>
        </div>
        <div className="feature-item">
          <i className="fas fa-database"></i>
          <h3>Disease Knowledge Base</h3>
          <p>Explore a static gallery of common arecanut diseases and learn how to recognize and treat them.</p>
        </div>
      </section>
    </div>
  );
};

export default About;
