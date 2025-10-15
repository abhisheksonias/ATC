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
      {/* Desktop background (unchanged) */}
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
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 md:mt-10 py-20">
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

          {/* Visual content — MOBILE REDESIGN WITH GRID BACKGROUND */}
          <div className="flex justify-center lg:hidden">
            <div className="relative w-full max-w-[22rem]">
              {/* Mobile-only grid background */}
              <div
                aria-hidden="true"
                className="absolute -inset-6 rounded-[2rem] opacity-20"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
                  backgroundSize: '28px 28px',
                }}
              />
              {/* Soft radial glow */}
              <div
                aria-hidden="true"
                className="absolute -inset-10 rounded-[2.5rem] blur-2xl"
                style={{
                  background:
                    'radial-gradient(60% 50% at 50% 40%, rgba(0,0,0,0.12), transparent 70%)',
                }}
              />

              {/* Glass card that sits on the grid */}
              <div className="relative rounded-[1.75rem] border border-black/10 bg-white/60 backdrop-blur-xl shadow-[0_18px_50px_rgba(0,0,0,0.12)] overflow-hidden">
                {/* Image area */}
                <div className="relative aspect-[5/4]">
                  <div className="absolute inset-0 p-4">
                    <div className="w-full h-full rounded-2xl overflow-hidden ring-1 ring-black/10">
                      {mobileImageLoaded ? (
                        <img
                          src="/heromv.svg"
                          alt="Hero visual"
                          className="w-full h-full object-cover"
                          loading="eager"
                          decoding="async"
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
                  </div>

                  {/* Subtle shine sweep */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,transparent_40%,rgba(255,255,255,0.45)_50%,transparent_60%,transparent_100%)]"
                    style={{ transform: 'translateX(-15%)' }}
                  />
                </div>

                {/* Bottom info bar */}
                <div className="flex items-center justify-between px-4 py-3">
                  <div className="text-xs text-gray-700">
                    <span className="font-semibold text-black">ATC</span> · Creative Ops
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-gray-600">
                    <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    Live Preview
                  </div>
                </div>
              </div>

              {/* Floating badge on mobile */}
              <div className="absolute -left-2 -bottom-6 flex items-center gap-3 rounded-xl border border-black/10 bg-white/80 backdrop-blur px-3 py-2 shadow-md">
                <div className="h-7 w-7 rounded-full bg-black text-white grid place-items-center text-[10px] font-semibold">
                  ATC
                </div>
                <div className="text-[11px] leading-tight">
                  <div className="font-semibold text-black">Strategy × Creativity</div>
                  <div className="text-gray-600">Built for speed & scale</div>
                </div>
              </div>
            </div>
          </div>
          {/* END mobile redesign */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
