import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Sample YouTube video links - using the provided link
const videoLinks = [
  { id: 'JgDNFQ2RaLQ', title: 'Our Work Sample 1', channelName: 'Creative Studio', subscribers: '125K' },
  { id: 'JgDNFQ2RaLQ', title: 'Our Work Sample 2', channelName: 'Digital Media', subscribers: '98K' },
  { id: 'JgDNFQ2RaLQ', title: 'Our Work Sample 3', channelName: 'Video Pro', subscribers: '203K' },
  { id: 'JgDNFQ2RaLQ', title: 'Our Work Sample 4', channelName: 'Content Creators', subscribers: '167K' },
  { id: 'JgDNFQ2RaLQ', title: 'Our Work Sample 5', channelName: 'Media House', subscribers: '245K' },
];

const CheckOurWork = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: 'ease-in-out',
    pauseOnHover: true,
    pauseOnFocus: true,
    arrows: false,
    dotsClass: "slick-dots custom-dots",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '20px',
        },
      },
    ],
  };

  return (
    <section className="bg-white py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-6 leading-tight">
              Check out our <span className="relative inline-block">
                <span className="text-black">work</span>
                <div className="absolute bottom-0 left-0 w-full h-3 bg-black/10 -z-10"></div>
              </span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-black via-gray-600 to-black mx-auto rounded-full"></div>
          </div>
          <p className="text-gray-600 text-lg sm:text-xl mt-6 max-w-2xl mx-auto">
            Discover our latest projects and creative solutions
          </p>
        </div>

        {/* Video Slider */}
        <div className="relative px-4 sm:px-0">
          <Slider {...settings}>
            {videoLinks.map((video, index) => (
              <div key={index} className="px-2 sm:px-3">
                <div className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 backdrop-blur-sm">
                  {/* Video Container */}
                  <div className="relative aspect-video overflow-hidden">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${video.id}?modestbranding=1&rel=0&playsinline=1&enablejsapi=1`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                      title={video.channelName}
                    />
                    {/* Gradient overlay for better integration */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>
                  </div>
                  
                  {/* Enhanced Video Info */}
                  <div className="p-6 sm:p-8 bg-gradient-to-br from-gray-50 to-white">
                    {/* Channel Information */}
                    <div className="flex items-center space-x-4">
                      {/* Enhanced Channel Image */}
                      <div className="relative group">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 p-1 shadow-lg">
                          <img
                            src="/logo.png"
                            alt={video.channelName}
                            className="w-full h-full rounded-full object-cover border-2 border-white"
                            loading="lazy"
                          />
                        </div>
                        {/* Enhanced status indicator */}
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-3 border-white shadow-lg animate-pulse"></div>
                        {/* Hover glow effect */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
                      </div>
                      
                      {/* Enhanced Channel Details */}
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1 group-hover:text-black transition-colors">
                          {video.channelName}
                        </h3>
                        <div className="flex items-center space-x-2">
                          <p className="text-sm sm:text-base text-gray-600 font-medium">
                            {video.subscribers} Subscribers
                          </p>
                          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                          <span className="text-sm text-green-600 font-medium">Active</span>
                        </div>
                      </div>
                      
                      {/* Action button */}
                      {/* <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Enhanced Custom Dots Styling */}
        <style jsx>{`
          .custom-dots {
            bottom: -60px !important;
            text-align: center;
          }
          .custom-dots li {
            margin: 0 6px;
          }
          .custom-dots li button:before {
            color: #d1d5db !important;
            font-size: 14px !important;
            opacity: 0.5;
            transition: all 0.3s ease;
          }
          .custom-dots li.slick-active button:before {
            color: #000 !important;
            opacity: 1;
            transform: scale(1.2);
          }
          .custom-dots li:hover button:before {
            opacity: 0.8;
            transform: scale(1.1);
          }
          
          /* Mobile video optimization */
          @media (max-width: 768px) {
            iframe {
              pointer-events: auto !important;
            }
          }
          
          /* Enhanced card animations */
          .group:hover .animate-pulse {
            animation-duration: 1s;
          }
        `}</style>
      </div>
    </section>
  );
};

export default CheckOurWork;
