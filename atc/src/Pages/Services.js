// src/pages/Services.js
import React, { useLayoutEffect} from 'react';
import { Link } from 'react-router-dom';
import CTASection from '../components/home/CTASection';

const Services = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const services = [
    {
      title: 'Short Form Video Editing',
      description: 'Create engaging, scroll-stopping content for TikTok, Instagram Reels, and YouTube Shorts that captures attention in seconds.',
      features: [
        'Trending format adaptation',
        'Music selection and syncing',
        'Caption and text overlay design',
        'Quick turnaround times',
        'Platform-specific optimization'
      ],
      icon: '🎬'
    },
    {
      title: 'Long Form Video Editing',
      description: 'Develop polished, professional long-form content that tells your brand story and builds deeper audience connections.',
      features: [
        'Comprehensive story development',
        'Advanced editing techniques',
        'Color grading and audio enhancement',
        'Custom graphics and animations',
        'SEO optimization for discoverability'
      ],
      icon: '📹'
    },
    {
      title: 'Thumbnail Designing',
      description: 'Stand out in crowded feeds with eye-catching thumbnails that drive clicks and increase video performance.',
      features: [
        'High-impact visual composition',
        'Text that converts to clicks',
        'Brand consistency across content',
        'A/B testing options',
        'Platform-specific size optimization'
      ],
      icon: '🖼️'
    },
    {
      title: 'Social Media Management',
      description: 'Build your online presence with strategic management that grows your audience and drives meaningful engagement.',
      features: [
        'Content calendar development',
        'Community engagement',
        'Performance analytics and reporting',
        'Trend identification and implementation',
        'Cross-platform strategy alignment'
      ],
      icon: '📱'
    }
  ];

  return (
    <div>
      {/* Services Hero Section */}
      <section className="bg-white text-white py-20">
        <div className="container text-black mx-auto px-6 text-center">
          <h1 className="text-4xl  md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive digital marketing solutions designed to elevate your brand and engage your audience.
          </p>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          {services.map((service, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center mb-20 last:mb-0`}>
              <div className="md:w-1/2 mb-8 md:mb-0">
                <div className={`bg-blue-50 rounded-lg p-12 flex items-center justify-center ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                  <div className="text-8xl text-blue-600">{service.icon}</div>
                </div>
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-lg text-gray-700 mb-6">{service.description}</p>
                <h3 className="font-bold text-lg mb-3">What we offer:</h3>
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className="text-blue-600 mr-2">✓</span> {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition duration-300 inline-block">
                  Get started
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Our Process</h2>
          <div className="h-1 w-24 bg-blue-600 mx-auto mb-12"></div>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
              
              {/* Timeline items */}
              <div className="relative z-10">
                <div className="mb-12 flex items-center">
                  <div className="w-1/2 pr-12 text-right">
                    <h3 className="text-xl font-bold mb-2">1. Research</h3>
                    <p className="text-gray-700">We begin by understanding your brand, audience, and goals to develop a solid foundation for your strategy.</p>
                  </div>
                  <div className="bg-blue-600 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold z-10">1</div>
                  <div className="w-1/2 pl-12"></div>
                </div>
                
                <div className="mb-12 flex items-center">
                  <div className="w-1/2 pr-12"></div>
                  <div className="bg-blue-600 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold z-10">2</div>
                  <div className="w-1/2 pl-12">
                    <h3 className="text-xl font-bold mb-2">2. Analysis & Planning</h3>
                    <p className="text-gray-700">Based on research insights, we create a tailored strategy aligned with your business objectives.</p>
                  </div>
                </div>
                
                <div className="mb-12 flex items-center">
                  <div className="w-1/2 pr-12 text-right">
                    <h3 className="text-xl font-bold mb-2">3. Design</h3>
                    <p className="text-gray-700">Our creative team designs engaging visuals and content that resonate with your target audience.</p>
                  </div>
                  <div className="bg-blue-600 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold z-10">3</div>
                  <div className="w-1/2 pl-12"></div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-1/2 pr-12"></div>
                  <div className="bg-blue-600 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold z-10">4</div>
                  <div className="w-1/2 pl-12">
                    <h3 className="text-xl font-bold mb-2">4. Usability Testing</h3>
                    <p className="text-gray-700">We test solutions with real users to ensure they deliver the expected impact and results.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection/>
    </div>
  );
};

export default Services;