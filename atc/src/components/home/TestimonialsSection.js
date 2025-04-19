import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TestimonialsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const testimonials = [
    {
      name: 'Abshar Abdullah',
      position: 'Marketing Director, TechStart',
      content: 'Working with ATC has transformed our digital presence. Their strategic approach to content creation has increased our engagement by 200% in just three months.',
      image: '/AbsharAbdullah.png',
    },
    {
      name: 'Tony Jefferies',
      position: 'CEO, GrowthBrand',
      content: 'The creative team at ATC truly understands our brand voice. They have delivered content that not only looks great but drives real results for our business.',
      image: '/TonyJefferies.png',
    },
    {
      name: 'Sarah Jefferies',
      position: 'Influencer & Content Creator',
      content: 'ATC helped me scale my content creation while maintaining quality. Their video editing and thumbnail design services have been game-changing for my channel growth.',
      image: '/SarahJefferies.png',
    }
  ];

  // Animations
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-purple-400 rounded-full opacity-20 -translate-x-24 -translate-y-12"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-400 rounded-full opacity-20 translate-x-20 translate-y-24"></div>
      
      <motion.div 
        className="container mx-auto px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} 
      >
        <motion.div variants={titleVariants}>
          <div className="w-24 h-1 bg-purple-500 mx-auto mb-6"></div>
          <div className="bg-gradient-to-r from-white via-gray-100 to-white text-black border border-gray-700 rounded-full px-8 py-2 mx-auto mb-16 max-w-fit shadow-md relative">
            <h2 className="text-3xl font-bold text-center tracking-wider flex items-center gap-2">
              TESTIMONIALS
              <span className="w-5 h-5 ml-2 bg-purple-500 rounded-full inline-block shadow-inner"></span>
            </h2>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 rounded-full blur-md -z-10"></div>
          </div>
        </motion.div>
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`rounded-2xl p-6 transition-all duration-500 ease-in-out relative overflow-hidden ${hoveredIndex === index ? 'scale-105' : ''}`}
            >
              {/* Stylized background */}
              <div className="absolute inset-0 bg-white rounded-2xl z-0"></div>
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-purple-50 opacity-80 z-0"></div>
              
              {/* Border effect */}
              <div className="absolute inset-0 rounded-2xl border border-purple-200 z-0"></div>
              
              {/* Glowing effect on hover */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-purple-200 to-purple-100 rounded-2xl opacity-0 z-0"
                animate={{ 
                  opacity: hoveredIndex === index ? 0.15 : 0
                }}
                transition={{ duration: 0.5 }}
              />
              
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden z-0">
                <div className="absolute top-0 right-0 w-24 h-2 bg-purple-400 rotate-45 origin-top-right"></div>
              </div>
              
              {/* Bottom accent */}
              <motion.div 
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-400 to-purple-200 z-0"
                style={{ width: '30%' }}
                animate={{ 
                  width: hoveredIndex === index ? '100%' : '30%'
                }}
                transition={{ duration: 0.7 }}
              />
              
              {/* Content wrapper */}
              <div className="relative z-10">
                {/* Quote mark decoration */}
                <div className="absolute -top-1 -left-1 text-6xl text-purple-300 font-serif opacity-30">❛❛</div>
                <div className="absolute bottom-12 right-0 text-6xl text-purple-300 font-serif opacity-20 transform rotate-180">❛❛</div>
                
                {/* Content with slight padding for the quote marks */}
                <div className="pt-6 px-2">
                  <p className="text-gray-700 italic text-lg mb-8 relative z-10">
                    {`"${testimonial.content}"`}
                  </p>
                  
                  {/* Profile */}
                  <div className="flex items-center mt-6 bg-white bg-opacity-70 rounded-xl p-3 border border-purple-100 shadow-sm">
                    <motion.div
                      initial={{ borderRadius: "50%" }}
                      animate={{ 
                        borderRadius: hoveredIndex === index ? "20%" : "50%",
                        rotateZ: hoveredIndex === index ? 10 : 0
                      }}
                      transition={{ duration: 0.4 }}
                      className="flex-shrink-0 mr-4 overflow-hidden shadow-lg relative"
                      style={{ width: "65px", height: "65px" }}
                    >
                      {/* Image frame with double border effect */}
                      <div className="absolute inset-0 border-2 border-purple-300"></div>
                      <div className="absolute inset-1 border border-white"></div>
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover relative z-0"
                      />
                    </motion.div>
                    <div>
                      <motion.h4 
                        className="font-bold text-xl leading-tight"
                        animate={{ 
                          color: hoveredIndex === index ? "#a855f7" : "#000000"
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {testimonial.name}
                      </motion.h4>
                      <p className="text-gray-600">{testimonial.position}</p>
                      
                      {/* Animated underline */}
                      <motion.div 
                        className="h-0.5 bg-gradient-to-r from-purple-400 to-purple-200 mt-1"
                        animate={{ 
                          width: hoveredIndex === index ? "100%" : "40%",
                          opacity: hoveredIndex === index ? 1 : 0.7
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Subtle shape in background */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-100 rounded-full opacity-20 z-0"></div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Floating decorative elements */}
      <motion.div 
        className="absolute top-1/2 left-6 w-4 h-4 bg-purple-400 rounded-full"
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-10 w-4 h-4 bg-black rounded-full"
        animate={{ y: [0, -12, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.div 
        className="absolute top-1/4 right-1/4 w-4 h-4 bg-purple-300 rounded-full"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 1 }}
      />
    </section>
  );
};

export default TestimonialsSection;