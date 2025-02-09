import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AnimatedRoute from './components/AnimatedRoute';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Management from './pages/Management';
import Alumni from './pages/Alumni';
import Gallery from './pages/Gallery';
import ContactUs from './pages/ContactUs';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<AnimatedRoute><Home /></AnimatedRoute>} />
        <Route path="/about" element={<AnimatedRoute><AboutUs /></AnimatedRoute>} />
        <Route path="/management" element={<AnimatedRoute><Management /></AnimatedRoute>} />
        <Route path="/alumni" element={<AnimatedRoute><Alumni /></AnimatedRoute>} />
        <Route path="/gallery" element={<AnimatedRoute><Gallery /></AnimatedRoute>} />
        <Route path="/contact" element={<AnimatedRoute><ContactUs /></AnimatedRoute>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;