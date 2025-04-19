// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Removed Navbar from here */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<><Navbar /><About /></>} />
            <Route path="/services" element={<><Navbar /><Services /></>} />
            <Route path="/contact" element={<><Navbar /><Contact /></>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;