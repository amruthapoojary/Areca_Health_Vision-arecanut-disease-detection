import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import StemBleedingRecommendation from './components/StemBleedingRecommendation';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import About from './components/About';
import Gallery from './components/Gallery';
import Login from './components/Login';
import Signup from './components/Signup';
import ScanPage from './components/ScanPage';

function Layout({ children }) {
  const location = useLocation();
  const hideNavbar = location.pathname === '/scan';

  return (
    <>
      {!hideNavbar && <Navbar />}
      {children}
    </>
  );
}

function App() {
  return (
    <Router>
      {/* Wrap Routes inside Layout to get access to useLocation */}
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/scan" element={<ScanPage />} />
          <Route path="/stem-bleeding-recommendation" element={<StemBleedingRecommendation />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
