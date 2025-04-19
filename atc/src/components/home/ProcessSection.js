// src/components/home/ProcessSection.js
import React from 'react';
import { motion } from 'framer-motion';

const ProcessSection = () => {
  const processes = [
    {
      number: '1',
      title: 'Research',
      description: 'We dive deep into your industry, competitors, and target audience to understand your unique challenges.'
    },
    {
      number: '2',
      title: 'Analysis & Planning',
      description: 'Based on research insights, we develop tailored strategies aligned with your business goals.'
    },
    {
      number: '3',
      title: 'Design',
      description: 'Our creative team designs engaging visuals and content that resonate with your audience.'
    },
    {
      number: '4',
      title: 'Usability Testing',
      description: 'We test solutions with real users to ensure they deliver the expected impact and results.'
    }
  ];

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

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-[85rem]">
        <motion.div
          className="container mx-auto px-6 relative z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={titleVariants}>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
            <div className="bg-gradient-to-r from-white via-gray-100 to-white text-black border border-gray-700 rounded-full px-8 py-2 mx-auto mb-16 max-w-fit shadow-md relative">
              <h2 className="text-3xl font-bold text-center tracking-wider flex items-center gap-2">
                OUR PROCESS
                <span className="w-5 h-5 ml-2 bg-amber-400 rounded-full inline-block shadow-inner"></span>
              </h2>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 rounded-full blur-md -z-10"></div>
            </div>
          </motion.div>


          <div className="relative grid gap-y-20 md:grid-cols-1">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-black"></div>
            {processes.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.3 }}
                className={`relative z-10 flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} items-center justify-between md:gap-10`}
              >
                <div className="bg-black text-white rounded-full w-16 h-16 text-2xl font-bold flex items-center justify-center shadow-lg">
                  {process.number}
                </div>
                <div className="bg-[#fff9f0] border border-black p-6 md:p-8 rounded-2xl shadow-xl mt-4 md:mt-0 w-full md:max-w-xl">
                  <h3 className="text-2xl font-bold mb-2 text-black uppercase tracking-wide">
                    {process.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                    {process.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section >
  );
};

export default ProcessSection;