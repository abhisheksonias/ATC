import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';

const HeroSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  useEffect(() => {
    // Preload the image
    const img = new Image();
    img.src = '/hero.svg';
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <section className="relative text-white min-h-screen flex items-center">
      {/* Desktop background - hidden on mobile */}
      <div 
        className={`absolute inset-0 z-0 hidden md:block ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-500`}
        style={imageLoaded ? { backgroundImage: "url('/hero.svg')", backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
      />
      
      {/* Mobile fallback gradient background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-gray-100 to-gray-300 md:hidden" />

      {/* Navbar on top layer */}
      <div className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 lg:px-10">
        <Navbar />
      </div>

      {/* Hero content wrapper */}
      <div className="relative z-10 container mx-auto px-6 pt-20 w-full">
        <div className="flex flex-col items-center md:items-start md:flex-row">
          {/* Left side - Text content */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-black text-4xl md:text-5xl font-bold mb-6 text-center md:text-left">
              Attention to Create
            </h1>
            <h2 className="text-black text-2xl md:text-3xl font-semibold mb-6 text-center md:text-left">
              Where Strategy meets Creativity
            </h2>
            <div className="flex justify-center md:justify-start">
              <Link
                to="/contact"
                className="mt-4 inline-block text-center p-3 bg-black text-white rounded-lg border-2 border-black hover:bg-white hover:text-black transition-all"
              >
                Schedule call now
              </Link>
            </div>
          </div>

          {/* Mobile-only image - shown below text on mobile */}
          {imageLoaded && (
            <div className="w-full md:hidden mt-8">
              <img 
                src="/hero.svg" 
                alt="Hero visual" 
                className="w-full h-auto max-h-96 object-contain"
              />
            </div>
          )}
          
          {/* Optional right content for desktop */}
          <div className="hidden md:block md:w-1/2">
            {/* You can add additional content for desktop right side here if needed */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;