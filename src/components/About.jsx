import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaHeart, FaLightbulb } from 'react-icons/fa';

const About = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const highlights = [
    {
      icon: <FaUser />,
      title: "Who I Am",
      description: "A passionate Computer Science student with strong fundamentals in software development and problem-solving."
    },
    {
      icon: <FaHeart />,
      title: "What I Love",
      description: "Building innovative solutions at the intersection of AI, web technologies, and IoT that make a difference."
    },
    {
      icon: <FaLightbulb />,
      title: "My Goal",
      description: "To create impactful technology that helps people and organizations solve real-world challenges."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]">
              About <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(59,130,246,0.8)]">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 mx-auto rounded-full shadow-[0_0_15px_rgba(59,130,246,0.6)]" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image/Avatar */}
            <motion.div variants={itemVariants} className="flex justify-center">
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 rounded-full blur-3xl opacity-50"
                />
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-600 p-1 shadow-[0_0_50px_rgba(59,130,246,0.6)]">
                  <div className="w-full h-full rounded-full bg-gray-900/80 backdrop-blur-lg flex items-center justify-center text-8xl border border-blue-400/20">
                    👨‍💻
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-3xl font-bold text-white drop-shadow-[0_0_15px_rgba(139,92,246,0.4)]">
                Final-Year CSE Student & Tech Enthusiast
              </h3>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm Shivam Kumar, currently pursuing my B.Tech in Computer Science and Engineering 
                at Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology, Chennai. 
                My journey in technology has been driven by an insatiable curiosity and a desire to 
                innovate.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                With a strong foundation in AI/ML, Web Development, and IoT systems, I strive to bridge 
                the gap between cutting-edge technology and practical applications. From developing 
                emotion recognition systems to creating smart agriculture solutions, I'm committed to 
                building technology that matters.
              </p>

              <div className="grid gap-4 mt-8">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="flex gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-lg border border-purple-400/20 shadow-[0_0_20px_rgba(139,92,246,0.2)] hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xl shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                      {highlight.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1 drop-shadow-[0_0_10px_rgba(139,92,246,0.3)]">
                        {highlight.title}
                      </h4>
                      <p className="text-gray-300 text-sm">
                        {highlight.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
