// src/pages/Contact.js
import React, { useState, useLayoutEffect } from 'react';
import CTASection from '../components/home/CTASection';
import { motion } from 'framer-motion';

const Contact = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  // Fade in animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // Stagger children animation
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="bg-white text-black">
      {/* Contact Hero Section */}
      <motion.section
        className="bg-white text-black py-24 relative overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-grid-pattern"></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Have a project in mind? Get in touch with our team to discuss how we can help your brand grow.
          </motion.p>
        </div>
      </motion.section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className=" container mx-auto px-6">
          <motion.div
            className="flex flex-col lg:flex-row"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div
              className="justify-start lg:w-1/2 mb-12 lg:mb-0 lg:pr-16"
              variants={fadeIn}
            >
              <div className="bg-gradient-to-r from-white via-gray-100 to-white text-black border border-gray-700 rounded-full px-8 py-2 mx-auto mb-16 max-w-fit shadow-md relative">
                <h2 className="text-3xl font-bold text-center tracking-wider flex items-center gap-2">
                  Get In Touch
                  <span className="w-5 h-5 ml-2 bg-blue-500 rounded-full inline-block shadow-inner"></span>
                </h2>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 rounded-full blur-md -z-10"></div>
              </div>
              <p className="text-gray-800 mb-10 text-lg">
                Fill out the form and one of our experts will get back to you within 24 hours to discuss your needs and how we can help.
              </p>

              <motion.div
                className="mb-10 bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-xl font-bold mb-5 border-l-4 border-black pl-3">Our Office</h3>
                <div className="flex items-start mb-4 hover:translate-x-1 transition-transform duration-300">
                  <div className="text-black mr-4 text-xl">📍</div>
                  <p className="text-gray-800">123 Creative Drive, Digital City, 10001</p>
                </div>
                <div className="flex items-start mb-4 hover:translate-x-1 transition-transform duration-300">
                  <div className="text-black mr-4 text-xl">📞</div>
                  <p className="text-gray-800">+1 (555) 123-4567</p>
                </div>
                <div className="flex items-start hover:translate-x-1 transition-transform duration-300">
                  <div className="text-black mr-4 text-xl">✉️</div>
                  <p className="text-gray-800">hello@atcagency.com</p>
                </div>
              </motion.div>

              <motion.div
                className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-xl font-bold mb-5 border-l-4 border-black pl-3">Office Hours</h3>
                <p className="text-gray-800 mb-2">Monday - Friday: 9am - 6pm</p>
                <p className="text-gray-800">Saturday - Sunday: Closed</p>
              </motion.div>
            </motion.div>

            <motion.div
              className="lg:w-1/2 bg-gray-50 p-10 rounded-lg shadow-md border border-gray-100"
              variants={fadeIn}
            >
              <form onSubmit={handleSubmit}>
                <motion.div
                  className="mb-6"
                  whileInView={{ x: [50, 0], opacity: [0, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <label htmlFor="name" className="block text-gray-800 font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                    required
                  />
                </motion.div>

                <motion.div
                  className="mb-6"
                  whileInView={{ x: [50, 0], opacity: [0, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <label htmlFor="email" className="block text-gray-800 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                    required
                  />
                </motion.div>

                <motion.div
                  className="mb-6"
                  whileInView={{ x: [50, 0], opacity: [0, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <label htmlFor="phone" className="block text-gray-800 font-medium mb-2">Phone (optional)</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                  />
                </motion.div>

                <motion.div
                  className="mb-6"
                  whileInView={{ x: [50, 0], opacity: [0, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <label htmlFor="subject" className="block text-gray-800 font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                    required
                  />
                </motion.div>

                <motion.div
                  className="mb-8"
                  whileInView={{ x: [50, 0], opacity: [0, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <label htmlFor="message" className="block text-gray-800 font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                    required
                  ></textarea>
                </motion.div>

                <motion.button
                  type="submit"
                  className="bg-black text-white px-8 py-4 rounded-md font-medium hover:bg-gray-900 transition duration-300 w-full shadow-sm"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <motion.section
        className="py-20 bg-gray-100"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-6 text-center">
          <div className="bg-gradient-to-r from-white via-gray-100 to-white text-black border border-gray-700 rounded-full px-8 py-2 mx-auto mb-16 max-w-fit shadow-md relative">
            <h2 className="text-3xl font-bold text-center tracking-wider flex items-center gap-2">
              Find Us
              <span className="w-5 h-5 ml-2 bg-amber-500 rounded-full inline-block shadow-inner"></span>
            </h2>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 rounded-full blur-md -z-10"></div>
          </div>

          <motion.div
            className="bg-white h-96 rounded-lg flex items-center justify-center shadow-lg overflow-hidden"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <iframe
              title="Marwadi University Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9014.293174111872!2d70.79542567877449!3d22.369473301539596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c972761ce515%3A0x3651e3fe1e9df4f8!2sMarwadi%20University!5e0!3m2!1sen!2sin!4v1745086918630!5m2!1sen!2sin"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        className="py-24 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-white via-gray-100 to-white text-black border border-gray-700 rounded-full px-8 py-2 mx-auto mb-16 max-w-fit shadow-md relative">
            <h2 className="text-3xl font-bold text-center tracking-wider flex items-center gap-2">
              FAQ
              <span className="w-5 h-5 ml-2 bg-purple-500 rounded-full inline-block shadow-inner"></span>
            </h2>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 rounded-full blur-md -z-10"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            <motion.div
              className="mb-10 p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              variants={fadeIn}
              whileHover={{ scale: 1.02, backgroundColor: '#f3f3f3' }}
            >
              <h3 className="text-xl font-bold mb-3 border-l-4 border-black pl-3">What services do you offer?</h3>
              <p className="text-gray-800">
                We offer a range of digital marketing services including short and long-form video editing, thumbnail design, social media management, and strategic marketing consulting.
              </p>
            </motion.div>

            <motion.div
              className="mb-10 p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              variants={fadeIn}
              whileHover={{ scale: 1.02, backgroundColor: '#f3f3f3' }}
            >
              <h3 className="text-xl font-bold mb-3 border-l-4 border-black pl-3">How quickly can you deliver content?</h3>
              <p className="text-gray-800">
                Our turnaround times vary by project scope. Short-form content typically takes 2-3 business days, while more complex projects may take 1-2 weeks. We always work with you to meet your deadlines.
              </p>
            </motion.div>

            <motion.div
              className="mb-10 p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              variants={fadeIn}
              whileHover={{ scale: 1.02, backgroundColor: '#f3f3f3' }}
            >
              <h3 className="text-xl font-bold mb-3 border-l-4 border-black pl-3">Do you offer custom packages?</h3>
              <p className="text-gray-800">
                Absolutely! We understand every brand has unique needs. We'll work with you to create a customized package that aligns with your goals and budget.
              </p>
            </motion.div>

            <motion.div
              className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              variants={fadeIn}
              whileHover={{ scale: 1.02, backgroundColor: '#f3f3f3' }}
            >
              <h3 className="text-xl font-bold mb-3 border-l-4 border-black pl-3">How do I get started?</h3>
              <p className="text-gray-800">
                Simply fill out the contact form above or call us directly. We'll schedule a free consultation to discuss your needs and how we can help your brand grow.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <CTASection />
    </div>
  );
};

export default Contact;