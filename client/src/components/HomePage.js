import React from "react";
// ✅ Correct (files are already in the same folder)
import Navbar from './Navbar';
import Carousel from './Carousel';
import Footer from './Footer';


function HomePage() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Footer />
    </div>
  );
}

export default HomePage;
