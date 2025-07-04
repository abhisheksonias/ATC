// src/pages/Services.js
import React, { useLayoutEffect, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CTASection from '../components/home/CTASection';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
  }, []);

    const services = [
      {
        "title": "Short Form Video Editing",
        "description": "Create engaging, scroll-stopping content for TikTok, Instagram Reels, and YouTube Shorts that captures attention in seconds.",
        "features": [
          "Trending format adaptation",
          "Packed with motion graphics",
          "Caption and text overlay design",
          "Quick turnaround times",
          "Platform-specific optimization"
        ],
        "videoUrl": "/video.mp4"
      },
      {
        "title": "Long Form Video Editing",
        "description": "Develop polished, professional long-form content that tells your brand story and builds deeper audience connections.",
        "features": [
          "Comprehensive story development",
          "Advanced editing techniques",
          "Color grading and audio enhancement",
          "Custom graphics and animations",
          "SEO optimization for discoverability"
        ],
        "videoUrl": "/video.mp4"
      },
      {
        "title": "Thumbnail Designing",
        "description": "Stand out in crowded feeds with eye-catching thumbnails that drive clicks and increase video performance.",
        "features": [
          "High-impact visual composition",
          "Text that converts to clicks",
          "Brand consistency across content",
          "A/B testing options",
          "Platform-specific size optimization"
        ],
        "videoUrl": "/video.mp4"
      },
      {
        "title": "Social Media Management",
        "description": "Build your online presence with strategic management that grows your audience and drives meaningful engagement.",
        "features": [
          "Content calendar development",
          "Community engagement",
          "Performance analytics and reporting",
          "Trend identification and implementation",
          "Cross-platform strategy alignment"
        ],
        "videoUrl": "/video.mp4"
      },
      {
        "title": "Podcast Video Editing",
        "description": "Turn raw recordings into polished, platform-ready podcast episodes — with visuals that elevate the conversation.",
        "features": [
          "Audio cleanup and enhancement",
          "Multi-cam video edits (Zoom/Studio)",
          "Branded video templates and intros",
          "Shorts and Reels for episode highlights",
          "Platform formatting for YouTube, Spotify, etc."
        ],
        "videoUrl": "/video.mp4"
      },
      {
        "title": "Whiteboard Video Editing",
        "description": "Simplify complex ideas with clear, captivating whiteboard animations that educate and engage.",
        "features": [
          "Script consultation and storyboard support",
          "Custom illustrations and transitions",
          "Voiceover syncing and background music",
          "Branding integration and call-to-actions",
          "Delivery in HD/4K for YouTube & presentations"
        ],
        "videoUrl": "/video.mp4"
      },
      {
        "title": "Cashcow Video Editing",
        "description": "Build your online presence with strategic management that grows your audience and drives meaningful engagement.",
        "features": [
          "Script-to-screen video editing",
          "Stock footage + voiceover integration",
          "Engaging hooks & retention-boosting pacing",
          "High-converting thumbnails (optional add-on)",
          "SEO-optimized formatting and metadata"
        ],
        "videoUrl": "/video.mp4"
      }
    ];


  // const fadeInUp = {
  //   hidden: { opacity: 0, y: 20 },
  //   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  // };

  return (
    <div className="bg-white text-black">
      {/* Services Hero Section */}
      <motion.section
        className="py-24 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 z-0">
          <div className="h-full w-full bg-gradient-to-b from-gray-50 to-white"></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Our Services
          </motion.h1>
          <motion.p
            className="text-xl max-w-3xl mx-auto text-gray-700"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Crafting content that looks good,
            performs better — from edit to upload.
          </motion.p>
          <motion.div
            className="h-1 w-24 bg-black mx-auto mt-8"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          ></motion.div>
        </div>
      </motion.section>

      {/* Services Detail Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center mb-32 last:mb-0`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <div className="md:w-1/2 mb-8 md:mb-0">
                <div className={`bg-gray-100 hover:bg-gray-200 transition-all duration-300 rounded-lg p-12 flex items-center justify-center ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'} shadow-lg transform hover:-translate-y-2`}>
                  <motion.div
                    className="text-8xl"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <video
                      src={service.videoUrl}
                      className="w-full h-64 object-cover rounded-lg"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  </motion.div>
                </div>
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <div className="h-1 w-16 bg-black mb-6"></div>
                <p className="text-lg text-gray-700 mb-6">{service.description}</p>
                <h3 className="font-bold text-lg mb-3">What we offer:</h3>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      className="flex items-center"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={{
                        hidden: { opacity: 0, x: -10 },
                        visible: {
                          opacity: 1,
                          x: 0,
                          transition: { delay: i * 0.1 }
                        }
                      }}
                    >
                      <span className=" w-5 h-5 bg-black text-white rounded-full mr-3 flex items-center justify-center text-xs">✓</span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/contact" className="bg-black text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800 transition duration-300 inline-block shadow-md">
                    Get started
                  </Link>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default Services;
