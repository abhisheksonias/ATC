import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';

const HeroSection = () => {
  const [desktopImageLoaded, setDesktopImageLoaded] = useState(false);
  const [mobileImageLoaded, setMobileImageLoaded] = useState(false);

  useEffect(() => {
    // Optimized image preloading with error handling
    const loadImage = (src, callback) => {
      const img = new Image();
      img.onload = () => callback(true);
      img.onerror = () => callback(false);
      img.src = src;
    };

    loadImage('/hero.svg', setDesktopImageLoaded);
    loadImage('/heromv.svg', setMobileImageLoaded);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Desktop background */}
      {desktopImageLoaded && (
        <div
          className="absolute inset-0 z-0 hidden lg:block opacity-90"
          style={{
            backgroundImage: "url('/ATC.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
      )}

      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left space-y-6">
            <div className="space-y-4">
              <h1 className="text-black text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                Attention to Create
              </h1>
              <h2 className="text-gray-700 text-xl sm:text-2xl lg:text-3xl font-medium">
                Where Strategy meets Creativity
              </h2>
            </div>
            
            <div className="pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-black border-2 border-black rounded-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Schedule call now
              </Link>
            </div>
          </div>

          {/* Visual content - Mobile only */}
          <div className="flex justify-center lg:hidden">
            <div className="relative">
              <div className="w-auto h-auto sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-black/10 hover:scale-105 transition-transform duration-500">
                {mobileImageLoaded ? (
                  <img
                    src="/heromv.svg"
                    alt="Hero visual"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center">
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-8 h-8 border-4 border-gray-600 border-t-transparent rounded-full animate-spin"></div>
                      <span className="text-gray-600 text-sm">Loading...</span>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-black/5 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-black/5 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;