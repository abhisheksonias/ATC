import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import 'remixicon/fonts/remixicon.css'

const Footer = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const staggerChildren = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const socialLinks = [
    { name: 'Twitter', icon: 'ri-twitter-x-fill', url: '#' },
    { name: 'Instagram', icon: 'ri-instagram-line', url: 'https://www.instagram.com/atcagency.in' },
    { name: 'LinkedIn', icon: 'ri-linkedin-fill', url: '#' },
    { name: 'YouTube', icon: 'ri-youtube-fill', url: '#' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#0a0a0a] to-[#111] text-white pt-20 pb-8 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-amber-500 opacity-80"></div>
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-900 rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-700 rounded-full opacity-5 blur-3xl"></div>
      
      {/* Animated dots */}
      <motion.div 
        className="absolute top-1/4 left-10 w-3 h-3 bg-blue-400 rounded-full opacity-20"
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-10 w-2 h-2 bg-amber-400 rounded-full opacity-20"
        animate={{ y: [0, -12, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: 0.5 }}
      />

      <div className="relative z-10 container mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerChildren}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10"
        >
          {/* Logo and About */}
          <motion.div variants={fadeInUp} className="col-span-1 lg:col-span-1">
            <div className="bg-black bg-opacity-40 p-6 rounded-2xl backdrop-blur-sm border border-gray-800">
              <img 
                src="/ATC_Black_nobg.png" 
                alt="ATC Logo" 
                className="w-36 mb-6 drop-shadow-lg" 
              />
              <p className="text-gray-400 leading-relaxed">
                From content creation to targeted campaigns, we craft powerful, data-driven marketing solutions.
              </p>
              
              {/* Social Icons */}
              <div className="mt-6 flex space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.a 
                    key={index}
                    href={social.url} 
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors duration-300"
                    aria-label={social.name}
                  >
                    <i className={`${social.icon} text-lg`}></i>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUp} className="col-span-1">
            <div className="h-full bg-black bg-opacity-30 p-6 rounded-2xl backdrop-blur-sm border border-gray-800">
              <h3 className="text-white text-lg font-semibold mb-4 flex items-center">
                <span className="w-2 h-8 bg-blue-500 mr-3 rounded-full"></span>
                Quick Links
              </h3>
              <motion.ul 
                className="space-y-3"
                variants={staggerChildren}
                initial="hidden"
                whileInView="visible"
              >
                {['Home', 'About', 'Services', 'Contact'].map((item, index) => (
                  <motion.li key={index} variants={fadeInUp}>
                    <Link 
                      to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                      className="group flex items-center text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      <span className="w-0 h-0.5 bg-blue-400 mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                      {item}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeInUp} className="col-span-1">
            <div className="h-full bg-black bg-opacity-30 p-6 rounded-2xl backdrop-blur-sm border border-gray-800">
              <h3 className="text-white text-lg font-semibold mb-4 flex items-center">
                <span className="w-2 h-8 bg-amber-500 mr-3 rounded-full"></span>
                Services
              </h3>
              <motion.ul 
                className="space-y-3"
                variants={staggerChildren}
                initial="hidden"
                whileInView="visible"
                
              >
                {[
                  'Short Form Video Editing',
                  'Long Form Video Editing',
                  'Thumbnail Designing',
                  'Social Media Management'
                ].map((item, index) => (
                  <motion.li key={index} variants={fadeInUp}>
                    <Link 
                      to="/services" 
                      className="group flex items-center text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      <span className="w-0 h-0.5 bg-amber-400 mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                      {item}
                      
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeInUp} className="col-span-1 md:col-span-3 lg:col-span-1">
            <div className="h-full bg-black bg-opacity-30 p-6 rounded-2xl backdrop-blur-sm border border-gray-800">
              <h3 className="text-white text-lg font-semibold mb-4 flex items-center">
                <span className="w-2 h-8 bg-purple-500 mr-3 rounded-full"></span>
                Contact Us
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center mr-3">
                    <i className="ri-mail-line text-blue-400"></i>
                  </div>
                  <div>
                    <p className="text-gray-400">Email Us</p>
                    <a href="mailto:info@atcagency.com" className="text-white hover:text-blue-400 transition-colors">
                      info@atcagency.in
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center mr-3">
                    <i className="ri-phone-line text-amber-400"></i>
                  </div>
                  <div>
                    <p className="text-gray-400">Call Us</p>
                    <a href="tel:+918789107816" className="text-white hover:text-amber-400 transition-colors">
                    +91 87891 07816
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Newsletter (Optional) */}
        {/* <motion.div 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-gray-900 to-black p-6 rounded-2xl border border-gray-800"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="text-xl font-bold text-white">Subscribe to our newsletter</h4>
              <p className="text-gray-400">Get the latest updates on our services and offers</p>
            </div>
            <div className="w-full md:w-auto">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-blue-500 text-white w-full md:w-64"
                />
                <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-5 rounded-r-lg transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </motion.div> */}

        {/* Bottom */}
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} ATC Agency. All rights reserved.</p>
            <a href='https://www.abhisheksoni.tech/'  >Developed by Abhisheksoni.tech</a>
            {/* <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Cookies</a></li>
              </ul>
            </div> */}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;