import React, { useEffect, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);
  const navigate = useNavigate();

  const slides = [
    {
      image: "https://wallpapercave.com/wp/wp3115809.jpg",
      content: (
        <div className="carousel-content" style={{
          backgroundColor: "rgba(0, 0, 0, 0.75)",
          padding: "2rem",
          borderRadius: "12px",
          color: "white",
          maxWidth: "700px",
          textAlign: "center",
          boxShadow: "0 0 15px rgba(0, 0, 0, 0.8)",
          backdropFilter: "blur(3px)",
        }}>
          <h3>Unlock Smart Arecanut Disease Detection</h3>
          <p>
            Discover how to optimize crop protection and yield with advanced AI-based diagnostics.
          </p>
          <button className="carousel-btn" onClick={() => navigate("/login")}>
            Learn More
          </button>
        </div>
      ),
    },
    {
      image: "https://wallpaperaccess.com/full/3543885.jpg",
      content: (
        <div className="carousel-content" style={{
          backgroundColor: "rgba(0, 0, 0, 0.75)",
          padding: "2rem",
          borderRadius: "12px",
          color: "white",
          maxWidth: "700px",
          textAlign: "center",
          boxShadow: "0 0 15px rgba(0, 0, 0, 0.8)",
          backdropFilter: "blur(3px)",
        }}>
          <h3>Disease Detection & Recommendation</h3>
          <p>
            Use a smart wearable or your mobile to capture plant symptoms for real-time diagnosis.

          </p>
        </div>
      ),
    },
    {
      image: "https://wallpaperbat.com/img/319677-agriculture-desktop-wallpaper.jpg",
      content: (
        <div className="carousel-content" style={{
          backgroundColor: "rgba(0, 0, 0, 0.75)",
          padding: "2rem",
          borderRadius: "12px",
          color: "white",
          maxWidth: "700px",
          textAlign: "center",
          boxShadow: "0 0 15px rgba(0, 0, 0, 0.8)",
          backdropFilter: "blur(3px)",
        }}>
          <h3>Smart Hat / Mobile Photo Upload</h3>
          <p>
            Upload images of arecanut plants and get expert treatment suggestions instantly.
          </p>
        </div>
      ),
    },
  ];

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % slides.length);
      }, 4000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPaused]);

  return (
    <div id="carouselExampleControls" className="carousel slide" >
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            className={`carousel-item ${index === activeIndex ? "active" : ""}`}
            key={index}
          >
            <img
              className="d-block w-100 carousel-img"
              src={slide.image}
              alt={`Slide ${index + 1}`}
              style={{ height: "90vh", objectFit: "cover" }}
            />
            <div className="carousel-caption d-flex justify-content-center align-items-center">
              {slide.content}
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
