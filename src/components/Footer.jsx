import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white border-t border-purple-500/20">
      {/* Back to Top Button */}
      <motion.button
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 p-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 rounded-full shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:shadow-[0_0_50px_rgba(168,85,247,0.8)] transition-all z-10"
      >
        <FaArrowUp size={20} />
      </motion.button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center space-y-6">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(59,130,246,0.6)] mb-2">Shivam Kumar</h3>
            <p className="text-gray-300">AI & Web Developer | Software Engineer | Innovator</p>
          </motion.div>

          {/* Divider */}
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 mx-auto rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]" />

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6 text-sm"
          >
            {['About', 'Skills', 'Projects', 'Leadership', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  const element = document.getElementById(item.toLowerCase());
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-gray-300 hover:text-white hover:drop-shadow-[0_0_10px_rgba(139,92,246,0.5)] transition-all"
              >
                {item}
              </button>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-6 border-t border-purple-400/20"
          >
            <p className="text-gray-400 flex items-center justify-center gap-2">
              © 2025 Shivam Kumar | All Rights Reserved | Made with <FaHeart className="text-red-500 animate-pulse" /> using React & Tailwind CSS
            </p>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xs text-gray-500"
          >
            <p>B.Tech CSE | Vel Tech Rangarajan Dr. Sagunthala R&D Institute</p>
            <p>Chennai, India</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
