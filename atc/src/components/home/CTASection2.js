import React from 'react';
// import { Link } from 'react-router-dom';

const CTASection2 = () => {
  return (
    <section className="bg-white py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            
            {/* Text Content */}
            <div className="text-center lg:text-left space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 leading-tight">
                Helping creators and brand owners shine brighter
              </h2>
              <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
                You shoot the magic. We cut, color, clean, and craft it into gold. From raw footage to scroll-stopping edits — we handle the post, so you can stay in the spotlight.
              </p>
              <div className="pt-2 sm:pt-4">
                <button className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-black text-white font-semibold text-sm sm:text-base rounded-full border-2 border-black hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Schedule Call Now
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative" style={{ height: '450px' }}> {/* Adjust height as needed */}
                <img
                  src="/img01.svg"
                  alt="Creative Work"
                  className="w-auto h-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded-xl sm:rounded-2xl transition-all duration-300 hover:scale-105"
                  loading="lazy"
                  style={{ objectFit: 'contain' }} // Ensures the image maintains its aspect ratio
                />
                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 w-8 h-8 sm:w-12 sm:h-12 bg-black/5 rounded-full blur-lg"></div>
                <div className="absolute -bottom-2 -left-2 w-10 h-10 sm:w-16 sm:h-16 bg-black/5 rounded-full blur-lg"></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection2;
