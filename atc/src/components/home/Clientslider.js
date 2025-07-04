import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ClientsWeWorkedWith = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 4000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    pauseOnFocus: false,
    pauseOnDotsHover: false,
    arrows: false,
    swipe: false,
    touchMove: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const clients = [
    { image: '/logo.png', name: 'Meesh & Dee', subscribers: '75K', category: 'Entertainment' },
    { image: '/logo.png', name: 'LiteWeight Reacting', subscribers: '104K', category: 'Lifestyle' },
    { image: '/logo.png', name: 'The Powerful Huma', subscribers: '308K', category: 'Motivation' },
    { image: '/logo.png', name: 'Reacts With Jax', subscribers: '148K', category: 'Gaming' },
    { image: '/logo.png', name: 'NOT SO DAILY', subscribers: '161K', category: 'Vlogs' },
    { image: '/logo.png', name: 'Creative Studio', subscribers: '245K', category: 'Art & Design' },
    { image: '/logo.png', name: 'Tech Reviews', subscribers: '89K', category: 'Technology' },
    { image: '/logo.png', name: 'Fitness Journey', subscribers: '127K', category: 'Health & Fitness' },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-6 leading-tight">
              Trusted by <span className="relative inline-block">
                <span className="text-black">creators</span>
                <div className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-blue-200/50 to-purple-200/50 -z-10 rounded-full"></div>
              </span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-black via-gray-600 to-black mx-auto rounded-full"></div>
          </div>
          <p className="text-gray-600 text-lg sm:text-xl mt-6 max-w-2xl mx-auto">
            Join hundreds of satisfied creators who trust us with their content
          </p>
        </div>

        {/* Enhanced Slider Container */}
        <div className="relative">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100/30 to-transparent rounded-3xl blur-3xl"></div>
          
          <div className="relative z-10">
            <Slider {...settings}>
              {clients.map((client, index) => (
                <div key={index} className="px-2 sm:px-3">
                  <div className="group bg-white rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 border border-gray-100/50 backdrop-blur-sm relative overflow-hidden">
                    {/* Background pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Floating particles effect */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                    <div className="absolute bottom-6 left-6 w-1 h-1 bg-purple-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-bounce"></div>
                    
                    <div className="relative z-10 flex flex-col items-center text-center space-y-5">
                      {/* Enhanced Client Image */}
                      <div className="relative">
                        <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br from-gray-200 via-gray-100 to-white p-1 shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                          <img
                            src={client.image}
                            alt={client.name}
                            className="w-full h-full rounded-full object-cover border-3 border-white shadow-inner"
                            loading="lazy"
                          />
                        </div>
                        {/* Enhanced status indicator with animation */}
                        <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-400 to-green-500 rounded-full border-3 border-white shadow-lg">
                          <div className="w-full h-full bg-green-500 rounded-full animate-ping opacity-75"></div>
                          <div className="absolute inset-0 w-full h-full bg-green-500 rounded-full"></div>
                        </div>
                        {/* Glow effect on hover */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl scale-110"></div>
                      </div>
                      
                      {/* Enhanced Client Info */}
                      <div className="space-y-3">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-tight group-hover:text-black transition-colors duration-300">
                          {client.name}
                        </h3>
                        
                        <div className="space-y-2">
                          {/* Subscriber count with icon */}
                          <div className="flex items-center justify-center space-x-2">
                            <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                            </svg>
                            <p className="text-base sm:text-lg font-semibold text-gray-700">
                              {client.subscribers} Subscribers
                            </p>
                          </div>
                          
                          {/* Category badge */}
                          <div className="inline-block">
                            <span className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 text-xs sm:text-sm font-medium rounded-full border border-gray-200 group-hover:from-blue-50 group-hover:to-purple-50 group-hover:border-blue-200 transition-all duration-300">
                              {client.category}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Success indicator */}
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="flex items-center space-x-1 text-green-600">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                          <span className="text-sm font-medium">Verified Partner</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="flex items-center justify-center space-x-8 text-gray-500">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Active Projects</span>
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Growing Community</span>
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Trusted Partners</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsWeWorkedWith;
