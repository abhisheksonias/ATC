// src/components/home/CTASection.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="relative py-10 md:py-10 bg-black text-white overflow-hidden"
    >
      {/* Decorative Gradient Blobs */}
      <div className="absolute top-[-4rem] left-[-4rem] w-[14rem] h-[14rem] bg-white/5 rounded-full blur-3xl z-0 animate-pulse"></div>
      <div className="absolute bottom-[-4rem] right-[-4rem] w-[14rem] h-[14rem] bg-white/10 rounded-full blur-3xl z-0 animate-pulse"></div>

      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        <div className="bg-white/5 w-auto backdrop-blur-md border border-white/10 rounded-xl p-5 md:p-10 shadow-xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent"
          >
            Let’s scale your content like never before 🚀
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-3 text-base sm:text-lg text-gray-300"
          >
            Book a free strategy call with our experts.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-6"
          >
            <Link
              to="/contact"
              className="inline-block px-8 py-3 rounded-full bg-white text-black font-semibold text-base shadow-md hover:bg-gray-200 transition-all duration-300 hover:scale-105"
            >
              Free Consultation
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default CTASection;
