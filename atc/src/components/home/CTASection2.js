import React from 'react';
// import { Link } from 'react-router-dom';

const CTASection2 = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        <div className="bg-gray-300 rounded-3xl p-10 flex flex-col lg:flex-row items-center justify-between shadow-md">

          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left ml-3 mb-8 lg:mb-0">
            <h2 className="font-gagalin text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              We help brands grow through impactful social media strategies and engaging digital experiences
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              From content creation to targeted campaigns, we craft powerful, data-driven marketing solutions that elevate brands, drive engagement, and maximize impact in the digital world.
            </p>
            <button className="mt-2 px-6 py-3 bg-black text-white font-semibold rounded-full border-2 border-black hover:bg-white hover:text-black transition-all">
              Schedule Call Now
            </button>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 flex justify-around">
            <img
              src="/img01.svg" 
              alt="Creative Work"
              className="w-64 sm:w-80 md:w-96  lg:w-[400px] xl:w-[400px] rounded-2xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTASection2;
