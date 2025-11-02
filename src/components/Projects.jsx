import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaBrain, FaMicrochip, FaLeaf, FaMask } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Real-Time Face Emotion Recognition",
      description: "Advanced deep learning system that detects and classifies human emotions in real-time using convolutional neural networks. Trained on the FER-2013 dataset with high accuracy for emotion detection.",
      tech: ["Python", "OpenCV", "Keras", "CNN", "FER-2013"],
      icon: <FaBrain />,
      gradient: "from-blue-500 to-cyan-500",
      github: "https://github.com/shivamkr1563",
      demo: "#",
      features: ["Real-time detection", "7 emotion classes", "High accuracy CNN model"]
    },
    {
      title: "Smart Voting System",
      description: "Secure, biometric-based electronic voting system using fingerprint authentication. Eliminates voter fraud and ensures accurate vote counting with real-time display on LCD.",
      tech: ["Arduino", "C", "Fingerprint Sensor", "LCD Display"],
      icon: <FaMicrochip />,
      gradient: "from-purple-500 to-pink-500",
      github: "https://github.com/shivamkr1563",
      demo: "#",
      features: ["Biometric authentication", "Secure voting", "Real-time results"]
    },
    {
      title: "IoT-Based Smart Agriculture System",
      description: "Intelligent irrigation system that automatically waters crops based on real-time soil moisture levels. Optimizes water usage and improves crop yield through IoT sensors and automation.",
      tech: ["Arduino", "C++", "Python", "Soil Sensors", "IoT"],
      icon: <FaLeaf />,
      gradient: "from-green-500 to-teal-500",
      github: "https://github.com/shivamkr1563",
      demo: "#",
      features: ["Automated irrigation", "Moisture monitoring", "Water optimization"]
    },
    {
      title: "Face Mask Detection Door Lock System",
      description: "Automated security system that uses computer vision to detect face masks and control door locks. Promotes safety compliance with real-time mask detection and Arduino integration.",
      tech: ["Python", "OpenCV", "Arduino", "Deep Learning"],
      icon: <FaMask />,
      gradient: "from-orange-500 to-red-500",
      github: "https://github.com/shivamkr1563",
      demo: "#",
      features: ["Mask detection", "Automatic door lock", "Safety compliance"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]">
              Featured <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(236,72,153,0.8)]">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 mx-auto rounded-full mb-4 shadow-[0_0_15px_rgba(236,72,153,0.6)]" />
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Innovative solutions combining AI, IoT, and automation to solve real-world problems
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative h-full p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-purple-400/20 shadow-[0_0_30px_rgba(139,92,246,0.2)] hover:shadow-[0_0_50px_rgba(139,92,246,0.4)] transition-all overflow-hidden">
                  {/* Background Gradient Effect */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.gradient} opacity-20 rounded-full blur-3xl group-hover:w-48 group-hover:h-48 transition-all duration-500`} />
                  
                  {/* Icon */}
                  <div className={`inline-block p-4 rounded-xl bg-gradient-to-br ${project.gradient} text-white text-3xl mb-4 shadow-[0_0_20px_rgba(139,92,246,0.4)]`}>
                    {project.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4 space-y-2">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient} shadow-[0_0_8px_rgba(139,92,246,0.5)]`} />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-semibold rounded-full bg-purple-500/20 text-gray-200 border border-purple-400/30 backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r ${project.gradient} text-white font-semibold shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all`}
                    >
                      <FaGithub /> View Code
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.demo}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm text-white font-semibold border-2 border-purple-400/30 hover:border-purple-400/50 hover:bg-white/15 transition-all"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* More Projects CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/shivamkr1563"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:shadow-[0_0_50px_rgba(139,92,246,0.6)] transition-all"
            >
              <FaGithub /> View All Projects on GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
