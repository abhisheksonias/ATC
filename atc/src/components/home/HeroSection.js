// src/components/home/HeroSection.js
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar'; // Assuming you have a Navbar component

const HeroSection = () => {
  return (
    <section
      className="hero-bg relative bg-cover bg-center bg-no-repeat text-white min-h-screen flex items-center"
      style={{ backgroundImage: "url('/hero.svg')" }}
    >
      {/* Navbar on top layer */}
      <div className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 lg:px-10">
        <Navbar />
      </div>

      {/* Optional overlay if needed */}
      <div className="absolute inset-0  z-0" />

      {/* Hero content wrapper */}
      <div className="relative z-10 container mx-auto px-6 pt-20"> {/* pt-20 to offset nav */}
        <div className="flex flex-col lg:flex-row items-center">

          {/* Left side */}
          <div className="lg:w-1/2 items- mb-12 lg:mb-0">
            <h1 className="text-black text-4xl md:text-5xl font-bold mb-6">
              Attention to Create
            </h1>
            <h2 className="text-black text-2xl md:text-3xl font-semibold mb-6">
              Where Strategy meets Creativity
            </h2>
            <Link
              to="/contact"
              className="mt-4 text-center p-3 bg-black text-white rounded-lg border-2 border-black hover:bg-white hover:text-black transition-all"
            >
              Schedule call now
            </Link>
          </div>

          {/* Optional right content if needed later */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;