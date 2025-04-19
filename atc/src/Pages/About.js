import React, { useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Lightbulb, BarChart } from 'lucide-react';
import CTASection from '../components/home/CTASection';

const About = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    {
      name: 'Archit Chaudhry',
      position: 'Founder & CEO',
      bio: 'With over 15 years in digital marketing, Alex founded ATC with a vision to blend strategy with creativity.',
      image: '/team.svg',
    },
    {
      name: 'Taniya Sharma',
      position: 'Creative Director',
      bio: 'Jamie leads our creative team with an eye for design and a passion for storytelling across digital platforms.',
      image: '/team.svg',
    },
  ];

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
  };

  // const teamMemberVariants = {
  //   hidden: { opacity: 0, scale: 0.9 },
  //   visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeInOut' } },
  // };

  const valueVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
  };

  const sectionTitleStyle = {
    background: 'linear-gradient(to right, white, #f3f4f6, white)', // Tailwind's gray-100
    color: 'black',
    border: '1px solid #d1d5db', // Tailwind's border-gray-300
    borderRadius: '2rem', // Tailwind's rounded-full (approximation)
    padding: '0.5rem 2rem', //  px-8 py-2  approximation
    margin: '0 auto 4rem auto', //  mb-16  approximation
    maxWidth: 'fit-content',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', // Tailwind's shadow-md
    position: 'relative',
  };

  const sectionTitleInnerSpanStyle = {
    width: '1.25rem', //  w-5  -> 20px, converted to rem
    height: '1.25rem', // h-5
    marginLeft: '0.5rem', // ml-2
    backgroundColor: '#3b82f6', // Tailwind's bg-blue-500
    borderRadius: '50%',
    display: 'inline-block',
    boxShadow: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)', // Tailwind's shadow-inner
  };

  const sectionTitleBlurDivStyle = {
    position: 'absolute',
    inset: '0',
    background: 'linear-gradient(to right, transparent, white, transparent)',
    opacity: 0.5,
    borderRadius: '2rem',
    filter: 'blur(12px)', // Tailwind's blur-md approximation
    zIndex: -1,
  };

  return (
    <div>
      {/* About Hero Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-white py-20"
      >

        <div className="container  mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="text-4xl md:text-5xl font-bold mb-6 text-black"
          >
            About ATC
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto text-gray-700"
          >
            At ATC Agency, we don’t just create content—we craft experiences that captivate, engage, and drive results. Our team of expert editors, designers, and strategists work tirelessly to transform ideas into compelling visuals that leave a lasting impact.
          </motion.p>
        </div>
      </motion.section>

      {/* Our Story Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-8 bg-white"
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <motion.img
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: 'easeInOut' }}
                src="/team.svg"
                alt="ATC Team"
                className="rounded-lg bg-blue-100 shadow-lg w-full max-w-md mx-auto"
              />
            </div>
            <div className="md:w-1/2">
              <div style={sectionTitleStyle}>
                <h2 className="text-3xl font-bold text-center tracking-wider flex items-center gap-2">
                  Our Story
                  <span style={sectionTitleInnerSpanStyle}></span>
                </h2>
                <div style={sectionTitleBlurDivStyle}></div>
              </div>
              <p className="text-gray-700 mb-4">
                Founded in 2024, ATC began with a simple mission: to help brands cut through the digital noise with strategic, creative content that drives real results.
              </p>
              <p className="text-gray-700 mb-4">
                What started as a small team of passionate marketers has grown into a full-service agency with expertise spanning video production, social media management, and digital strategy.
              </p>
              <p className="text-gray-700 mb-6">
                Today, we work with clients across industries, from startups to established brands, all united by a desire to create meaningful connections with their audiences through compelling digital experiences.
              </p>
              <div className="flex space-x-8 flex-wrap justify-center md:justify-start">
                <div className="text-center mb-4 md:mb-0">
                  <h3 className="text-3xl font-bold text-blue-600">120+</h3>
                  <p className="text-gray-600">YouTube videos edited</p>
                </div>
                <div className="text-center mb-4 md:mb-0">
                  <h3 className="text-3xl font-bold text-blue-600">550+</h3>
                  <p className="text-gray-600">Short videos edited</p>
                </div>
                <div className="text-center mb-4 md:mb-0">
                  <h3 className="text-3xl font-bold text-blue-600">250+</h3>
                  <p className="text-gray-600">hour of content edited</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-8 px-8 bg-white"
      >
        <div className="bg-black rounded-3xl p-5 mt-5 shadow-lg border border-black">
          {/* Outer Black Rounded Box */}
          <div className=" container mx-auto px-6 py-16">
            {/* Section Title */}
            <div style={sectionTitleStyle}>
              <h2 className="text-3xl font-bold text-center tracking-wider flex items-center  text-black">
                Our Values
                <span style={sectionTitleInnerSpanStyle}></span>
              </h2>
              <div style={sectionTitleBlurDivStyle}></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Card 1 */}
              <motion.div
                variants={valueVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-white/20 rounded-xl p-8 flex flex-col items-center text-center shadow-lg transition-all duration-300"
              >
                <Lightbulb className="w-12 h-12 text-amber-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">Strategy First</h3>
                <p className="text-white text-sm">We believe in thoughtful planning before action, ensuring every piece of content serves a clear purpose.</p>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                variants={valueVariants}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/20 rounded-xl p-8 flex flex-col items-center text-center shadow-lg transition-all duration-300"
              >
                <Users className="w-12 h-12 text-amber-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">Creative Excellence</h3>
                <p className="text-white text-sm">We push creative boundaries while staying true to brand identities and audience needs.</p>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                variants={valueVariants}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/20 rounded-xl p-8 flex flex-col items-center text-center shadow-lg transition-all duration-300"
              >
                <BarChart className="w-12 h-12 text-amber-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">Data-Driven Decisions</h3>
                <p className="text-white text-sm">We measure everything, using insights to continuously refine and improve our approach.</p>
              </motion.div>
            </div>
          </div>
        </div>

      </motion.section>

      {/* Team Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-6">
          {/* Section Title */}
          <div style={sectionTitleStyle}>
            <h2 className="text-3xl font-bold text-center tracking-wider flex items-center gap-2 text-black">
              Meet Our Team
              <span style={sectionTitleInnerSpanStyle}></span>
            </h2>
            <div style={sectionTitleBlurDivStyle}></div>
          </div>

          {/* Team Grid */}

          <div className="grid justify-center md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden border border-gray-200 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 relative"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

                <div className="p-6 flex flex-col items-center text-center">
                  {/* Image with overlay effect */}
                  <div className="relative mb-5 rounded-full overflow-hidden w-32 h-32">
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-10"></div>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full border-4 border-white shadow-md transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Subtle ring animation on hover */}
                    <div className="absolute inset-0 border-2 border-black opacity-0 group-hover:opacity-30 rounded-full scale-110 group-hover:scale-125 transition-all duration-500"></div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-1 transition-all duration-300 group-hover:text-black">{member.name}</h3>
                  <div className="w-10 h-0.5 bg-black mx-auto mb-3 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
                  <p className="text-black font-medium text-sm mb-3 opacity-70">{member.position}</p>
                  <p className="text-gray-600 text-sm transition-all duration-300">{member.bio}</p>

                  {/* Social icons that appear on hover */}
                  <div className="flex space-x-3 mt-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <a
                      href="/"
                      className="w-8 h-8 rounded-full bg-black bg-opacity-10 flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors duration-300"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M4.206 3h3.847l4.155 5.683L16.62 3h3.174l-5.918 7.993L20.775 21h-3.847l-4.48-6.125L7.46 21H4.286l6.393-8.622L4.206 3zm3.093 1.308L16.04 19.69h1.66L8.96 4.308H7.299z" />
                      </svg>
                    </a>

                    <a href="/" className="w-8 h-8 rounded-full bg-black bg-opacity-10 flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z" />
                      </svg>
                    </a>
                    <a href="/" className="w-8 h-8 rounded-full bg-black bg-opacity-10 flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm-1-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm8 7h-2v-3c0-.55-.45-1-1-1s-1 .45-1 1v3h-2v-6h2v1.1c.17-.31.48-.6 1.3-.6 1.49 0 2.7 1.21 2.7 2.7V17z" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Bottom shadow accent */}
                <div className="absolute -bottom-2 left-0 right-0 h-2 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>


      <CTASection />
    </div>
  );
};

export default About;
