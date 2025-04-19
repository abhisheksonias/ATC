import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Scroll to top on component mount.  This is the key fix.

  const services = [
    {
      title: 'Short Form Video Editing',
      description: 'Engage audiences with dynamic, attention-grabbing short-form videos optimized for social media.',
      image: '/41.png',
      frontColor: 'bg-blue-100',
      backColor: 'bg-blue-300',
    },
    {
      title: 'Long Form Video Editing',
      description: 'Create compelling long-form content that tells your brand story and builds deeper connections.',
      image: '/42.png',
      frontColor: 'bg-purple-100',
      backColor: 'bg-purple-300',
    },
    {
      title: 'Thumbnail Designing',
      description: 'Capture attention with eye-catching thumbnails that drive clicks and engagement.',
      image: '/43.png',
      frontColor: 'bg-green-100',
      backColor: 'bg-green-300',
    },
    {
      title: 'Social Media Management',
      description: 'Build your online presence with strategic social media management that grows your audience.',
      image: '/44.png',
      frontColor: 'bg-amber-100',
      backColor: 'bg-amber-300',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-blue-400 rounded-full opacity-20 -translate-x-24 -translate-y-12"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-400 rounded-full opacity-20 translate-x-20 translate-y-24"></div>

      <motion.div
        className="container mx-auto px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={titleVariants}>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <div className="bg-gradient-to-r from-white via-gray-100 to-white text-black border border-gray-700 rounded-full px-8 py-2 mx-auto mb-16 max-w-fit shadow-md relative">
            <h2 className="text-3xl font-bold text-center tracking-wider flex items-center gap-2">
              SERVICES
              <span className="w-5 h-5 ml-2 bg-blue-500 rounded-full inline-block shadow-inner"></span>
            </h2>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 rounded-full blur-md -z-10"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="w-full h-72 perspective-1000"
            >
              <motion.div
                className="relative w-full h-full shadow-xl rounded-2xl transition-all"
                animate={{
                  rotateY: hoveredIndex === index ? 180 : 0,
                  scale: hoveredIndex === index ? 1.05 : 1,
                }}
                transition={{ duration: 0.4 }} // Increased animation speed
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Front Side */}
                <div
                  className={`absolute w-full h-full rounded-2xl overflow-hidden ${service.frontColor}`}
                  style={{
                    backfaceVisibility: 'hidden',
                  }}
                >
                  {/* Content wrapper */}
                  <div className="flex flex-col items-center justify-center h-full p-6 relative">
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute top-0 left-0 w-full h-full bg-white opacity-40 transform -skew-y-6"></div>
                      <div className="absolute top-1/4 left-0 w-full h-1 bg-white opacity-30"></div>
                      <div className="absolute bottom-1/4 left-0 w-full h-1 bg-white opacity-30"></div>
                    </div>

                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                      <div className="absolute top-0 right-0 w-16 h-2 bg-white opacity-40 rotate-45 origin-top-right"></div>
                    </div>

                    {/* Image with frame effect */}
                    <motion.div
                      className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg bg-white relative mb-4"
                      animate={{
                        scale: hoveredIndex === index ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-contain"
                      />
                    </motion.div>

                    {/* Title */}
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
                      <motion.div
                        className="h-0.5 bg-blue-500 mx-auto mt-1"
                        animate={{
                          width: hoveredIndex === index ? '100%' : '0%',
                          opacity: hoveredIndex === index ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>

                    {/* Hint to flip */}
                    {/* <motion.p 
                      className="text-xs mt-3 text-gray-600 absolute bottom-3"
                      animate={{
                        opacity: hoveredIndex === index ? 1 : 0.7
                      }}
                    >
                      Hover to learn more
                    </motion.p> */}
                  </div>
                </div>

                {/* Back Side */}
                <div
                  className={`absolute w-full h-full rounded-2xl flex flex-col items-center justify-center p-6 ${service.backColor} text-white`}
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }}
                >
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-white opacity-10 rounded-full translate-y-20 -translate-x-20"></div>
                  </div>

                  {/* Content with animated border */}
                  <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center">
                    <div className="absolute inset-4  opacity-30 rounded-lg"></div>

                    {/* Only show description on the back, not the title */}
                    <p className="mb-8 text-black font-extrabold text-opacity-90 px-2">{service.description}</p>

                    <Link
                      to="/services"
                      className="group relative inline-flex items-center overflow-hidden rounded-full bg-white bg-opacity-20 px-6 py-2 transition-all hover:bg-opacity-50"
                    >
                      <span className="text-black relative">Learn more</span>
                      <motion.span
                        className="ml-2"
                        animate={{
                          x: [0, 5, 0],
                        }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                      >
                        →
                      </motion.span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-1/2 left-6 w-4 h-4 bg-blue-400 rounded-full"
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-10 w-4 h-4 bg-purple-400 rounded-full"
        animate={{ y: [0, -12, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut', delay: 0.5 }}
      />
      <motion.div
        className="absolute top-1/4 right-1/4 w-4 h-4 bg-green-400 rounded-full"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 1 }}
      />
    </section>
  );
};

export default ServicesSection;
