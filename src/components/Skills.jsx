import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaPython, FaJava, FaDatabase, 
  FaGitAlt, FaFigma, FaBrain, FaChartLine, FaCode
} from 'react-icons/fa';
import { 
  SiJavascript, SiCplusplus, SiTailwindcss, SiExpress, 
  SiFastapi, SiScikitlearn, SiOpencv, SiTensorflow,
  SiFirebase, SiRender
} from 'react-icons/si';
import Skills3D from './Skills3D';

const Skills = () => {
  const skillCategories = [
    {
      category: "Languages",
      icon: <FaCode />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "C++", icon: <SiCplusplus />, level: 85 },
        { name: "Java", icon: <FaJava />, level: 80 },
        { name: "JavaScript", icon: <SiJavascript />, level: 90 },
        { name: "Python", icon: <FaPython />, level: 85 },
        { name: "C", icon: <FaCode />, level: 75 },
      ]
    },
    {
      category: "Web Development",
      icon: <FaReact />,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "React.js", icon: <FaReact />, level: 90 },
        { name: "Node.js", icon: <FaNodeJs />, level: 85 },
        { name: "Express.js", icon: <SiExpress />, level: 80 },
        { name: "FastAPI", icon: <SiFastapi />, level: 75 },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 90 },
      ]
    },
    {
      category: "AI/ML",
      icon: <FaBrain />,
      color: "from-green-500 to-teal-500",
      skills: [
        { name: "Scikit-learn", icon: <SiScikitlearn />, level: 80 },
        { name: "OpenCV", icon: <SiOpencv />, level: 85 },
        { name: "YOLOv8", icon: <SiTensorflow />, level: 75 },
        { name: "Transformers", icon: <FaBrain />, level: 70 },
        { name: "Prompt Engineering", icon: <FaBrain />, level: 80 },
      ]
    },
    {
      category: "Data Analysis",
      icon: <FaChartLine />,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Pandas", icon: <FaDatabase />, level: 85 },
        { name: "NumPy", icon: <FaChartLine />, level: 85 },
        { name: "Matplotlib", icon: <FaChartLine />, level: 80 },
      ]
    },
    {
      category: "Tools & Platforms",
      icon: <FaGitAlt />,
      color: "from-indigo-500 to-purple-500",
      skills: [
        { name: "VS Code", icon: <FaCode />, level: 95 },
        { name: "Git & GitHub", icon: <FaGitAlt />, level: 90 },
        { name: "Firebase", icon: <SiFirebase />, level: 75 },
        { name: "Render", icon: <SiRender />, level: 80 },
        { name: "Figma", icon: <FaFigma />, level: 70 },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-30">
        <Suspense fallback={<div className="w-full h-full bg-black" />}>
          <Skills3D />
        </Suspense>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-[0_0_30px_rgba(236,72,153,0.5)]">
              My <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 mx-auto rounded-full mb-4 shadow-[0_0_20px_rgba(236,72,153,0.6)]" />
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, intelligent applications
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="group"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`text-3xl p-3 rounded-xl bg-gradient-to-br ${category.color} text-white shadow-[0_0_30px_rgba(139,92,246,0.5)]`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {category.category}
                  </h3>
                </div>

                {/* Skills Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="relative p-6 rounded-xl bg-white/5 backdrop-blur-lg shadow-[0_0_30px_rgba(59,130,246,0.2)] border border-white/10 hover:shadow-[0_0_50px_rgba(139,92,246,0.4)] transition-all group"
                    >
                      {/* Skill Icon & Name */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`text-2xl p-2 rounded-lg bg-gradient-to-br ${category.color} text-white shadow-lg`}>
                          {skill.icon}
                        </div>
                        <span className="font-semibold text-white text-lg group-hover:text-blue-300 transition-colors">
                          {skill.name}
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="relative">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-gray-400">
                            Proficiency
                          </span>
                          <span className="text-sm font-semibold text-white">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full h-2 bg-white/10 backdrop-blur-sm rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full shadow-[0_0_10px_rgba(139,92,246,0.5)]`}
                          />
                        </div>
                      </div>

                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 rounded-xl transition-all duration-300 pointer-events-none" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center p-8 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-lg border border-white/10 shadow-[0_0_40px_rgba(139,92,246,0.3)]"
          >
            <p className="text-lg text-gray-200">
              💡 <span className="font-semibold text-white">Always Learning:</span> Continuously expanding my skill set 
              to stay ahead in the ever-evolving tech landscape.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
