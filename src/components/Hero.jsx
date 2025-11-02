import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload, FaCode, FaRocket } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import Scene3D from './Scene3D';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* 3D Background Scene */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<div className="w-full h-full bg-black" />}>
          <Scene3D />
        </Suspense>
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60 backdrop-blur-[1px] z-[1]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Greeting */}
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-lg border border-white/10 text-white font-medium text-sm shadow-xl">
              👋 Welcome to my 3D AI Portfolio
            </span>
          </motion.div>

          {/* Name with 3D effect */}
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl font-bold mb-6 relative"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-[0_0_30px_rgba(59,130,246,0.8)]">
              Shivam Kumar
            </span>
          </motion.h1>

          {/* Tagline with glow effect */}
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-4xl font-semibold bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent mb-6 drop-shadow-[0_0_20px_rgba(236,72,153,0.6)]"
          >
            AI & Web Developer | Software Engineer | Innovator
          </motion.h2>

          {/* Description with glassmorphism */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto mb-8 leading-relaxed backdrop-blur-md bg-black/40 p-6 rounded-2xl border border-purple-500/20 shadow-[0_0_30px_rgba(139,92,246,0.2)]"
          >
            Final-year B.Tech CSE student at Vel Tech Rangarajan Dr. Sagunthala R&D Institute, 
            passionate about building innovative technology solutions. Combining expertise in 
            AI/ML, Web Development, and Software Engineering to create impactful applications 
            that solve real-world problems.
          </motion.p>

          {/* CTA Buttons with 3D hover effects */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <motion.a
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold shadow-[0_0_30px_rgba(59,130,246,0.5)] flex items-center gap-2 hover:shadow-[0_0_50px_rgba(59,130,246,0.7)] transition-all backdrop-blur-lg border border-white/20"
            >
              <FaDownload /> Download Resume
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-black/60 backdrop-blur-lg text-white rounded-full font-semibold shadow-[0_0_30px_rgba(139,92,246,0.4)] flex items-center gap-2 border border-purple-500/30 hover:bg-black/80 hover:shadow-[0_0_50px_rgba(139,92,246,0.6)] transition-all"
            >
              <FaCode /> View Projects
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-black/60 backdrop-blur-lg text-white rounded-full font-semibold shadow-[0_0_30px_rgba(236,72,153,0.4)] flex items-center gap-2 border border-pink-500/30 hover:bg-black/80 hover:shadow-[0_0_50px_rgba(236,72,153,0.6)] transition-all"
            >
              <FaRocket /> Contact Me
            </motion.button>
          </motion.div>

          {/* Social Links with 3D effect */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-6"
          >
            <motion.a
              whileHover={{ scale: 1.2, y: -10 }}
              whileTap={{ scale: 0.9 }}
              href="https://linkedin.com/in/shivam-kumar-228aa7255"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 bg-blue-600/30 backdrop-blur-lg text-blue-300 rounded-full hover:bg-blue-600/50 transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)] border border-blue-400/30"
            >
              <FaLinkedin size={28} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2, y: -10 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/shivamkr1563"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 bg-gray-700/30 backdrop-blur-lg text-gray-200 rounded-full hover:bg-gray-700/50 transition-all shadow-[0_0_20px_rgba(156,163,175,0.4)] border border-gray-500/30"
            >
              <FaGithub size={28} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2, y: -10 }}
              whileTap={{ scale: 0.9 }}
              href="https://leetcode.com/u/shivamkr1562/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 bg-orange-600/30 backdrop-blur-lg text-orange-300 rounded-full hover:bg-orange-600/50 transition-all shadow-[0_0_20px_rgba(249,115,22,0.4)] border border-orange-400/30"
            >
              <SiLeetcode size={28} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2, y: -10 }}
              whileTap={{ scale: 0.9 }}
              href="mailto:shivamkr1562@gmail.com"
              className="p-5 bg-purple-600/30 backdrop-blur-lg text-purple-300 rounded-full hover:bg-purple-600/50 transition-all shadow-[0_0_20px_rgba(139,92,246,0.4)] border border-purple-400/30"
            >
              <FaEnvelope size={28} />
            </motion.a>
          </motion.div>

          {/* Scroll Indicator with glow */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              <div className="w-1 h-3 bg-white rounded-full mt-2 shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
