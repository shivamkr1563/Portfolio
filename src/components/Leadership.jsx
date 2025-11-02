import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaUsers, FaLightbulb, FaAward } from 'react-icons/fa';

const Leadership = () => {
  const achievements = [
    {
      title: "Event Organizer - HUSTLERS-24",
      date: "February 2024",
      description: "Led an innovation event to encourage student creativity and entrepreneurial thinking. Coordinated multiple teams, managed logistics, and created an environment for innovative idea presentations.",
      icon: <FaLightbulb />,
      gradient: "from-yellow-500 to-orange-500",
      highlights: ["100+ participants", "20+ innovative projects", "3-day event"]
    },
    {
      title: "Event Organizer - Probrlr Skill Showcase",
      date: "March 2024",
      description: "Promoted coding and project showcase events to demonstrate technical skills and problem-solving abilities. Facilitated networking opportunities and skill development workshops.",
      icon: <FaUsers />,
      gradient: "from-blue-500 to-purple-500",
      highlights: ["Coding competitions", "Project exhibitions", "Skill workshops"]
    },
    {
      title: "Event Organizer - Prototype Contest",
      date: "August 2024",
      description: "Organized and judged prototype innovation competition focusing on practical, real-world solutions. Evaluated creative prototypes and provided constructive feedback to participants.",
      icon: <FaTrophy />,
      gradient: "from-green-500 to-teal-500",
      highlights: ["50+ prototypes", "Expert judging panel", "Innovation awards"]
    }
  ];

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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="leadership" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-[0_0_20px_rgba(14,165,233,0.5)]">
              Leadership & <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(59,130,246,0.8)]">Achievements</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 mx-auto rounded-full mb-4 shadow-[0_0_15px_rgba(59,130,246,0.6)]" />
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Driving innovation and fostering collaborative environments through event organization and leadership
            </p>
          </motion.div>

          {/* Achievements Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 via-blue-500 to-indigo-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]" />

            <div className="space-y-12">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex flex-col md:flex-row gap-8 items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="flex-1 group"
                  >
                    <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-lg shadow-[0_0_30px_rgba(139,92,246,0.2)] border border-purple-400/20 hover:shadow-[0_0_50px_rgba(139,92,246,0.4)] transition-all overflow-hidden">
                      {/* Background Gradient */}
                      <div className={`absolute top-0 ${index % 2 === 0 ? 'right-0' : 'left-0'} w-32 h-32 bg-gradient-to-br ${achievement.gradient} opacity-20 rounded-full blur-3xl group-hover:w-48 group-hover:h-48 transition-all duration-500`} />
                      
                      <div className="relative">
                        {/* Icon & Date */}
                        <div className="flex items-start justify-between mb-4">
                          <div className={`p-4 rounded-xl bg-gradient-to-br ${achievement.gradient} text-white text-3xl shadow-[0_0_20px_rgba(139,92,246,0.4)]`}>
                            {achievement.icon}
                          </div>
                          <span className="px-4 py-2 rounded-full bg-purple-500/20 text-gray-200 text-sm font-semibold backdrop-blur-sm border border-purple-400/30">
                            {achievement.date}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                          {achievement.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-300 mb-4 leading-relaxed">
                          {achievement.description}
                        </p>

                        {/* Highlights */}
                        <div className="flex flex-wrap gap-3">
                          {achievement.highlights.map((highlight, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm border border-purple-400/20"
                            >
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${achievement.gradient} shadow-[0_0_8px_rgba(139,92,246,0.5)]`} />
                              <span className="text-sm text-gray-200">
                                {highlight}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Timeline Dot */}
                  <div className="hidden md:block relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className={`w-6 h-6 rounded-full bg-gradient-to-br ${achievement.gradient} shadow-[0_0_20px_rgba(139,92,246,0.6)] border-4 border-gray-900`}
                    />
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { number: "3+", label: "Events Organized", icon: <FaUsers /> },
              { number: "200+", label: "Participants Reached", icon: <FaAward /> },
              { number: "50+", label: "Projects Showcased", icon: <FaLightbulb /> },
              { number: "100%", label: "Success Rate", icon: <FaTrophy /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-purple-400/20 text-center shadow-[0_0_20px_rgba(139,92,246,0.2)] hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all"
              >
                <div className="text-3xl mb-2 text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">{stat.icon}</div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(139,92,246,0.5)] mb-2">{stat.number}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Leadership;
