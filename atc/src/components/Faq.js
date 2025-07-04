import React from 'react';
import { motion } from 'framer-motion';

// Define animation variants
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const FAQSection = () => {
  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer a range of Post-Production services including short and long-form video editing, thumbnail design, social media management, and strategic marketing consulting."
    },
    {
      question: "How quickly can you deliver content?",
      answer: "Our turnaround times vary by project scope Short-form content typically takes 1-2 business days, while more complex projects or long form projects may take 2-3 business days. We'll always work with you to meet your deadlines."
    },
    {
      question: "Do you offer custom packages?",
      answer: "Absolutely! We understand every brand has unique needs. We'll work with you to create a customized package that aligns with your goals and budget."
    },
    {
      question: "How do I get started?",
      answer: "Simply fill out the contact form above or call us directly. We'll schedule a free consultation to discuss your needs and how we can help your brand grow."
    }
  ];

  return (
    <motion.section
      className="py-12 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainer}
    >
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 text-gray-800 border border-gray-200 rounded-full px-8 py-4 mx-auto mb-12 max-w-fit shadow-md relative">
          <h2 className="text-3xl font-bold text-center tracking-wider flex items-center gap-2">
            FAQ
            <span className="w-5 h-5 ml-2 bg-purple-500 rounded-full inline-block shadow-inner"></span>
          </h2>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 rounded-full blur-md -z-10"></div>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              variants={fadeIn}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-bold mb-3 border-l-4 border-purple-500 pl-3">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FAQSection;
