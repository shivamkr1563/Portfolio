import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { EMAIL_CONFIG } from '../config/emailConfig';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Using Web3Forms - Free email service
    const formDataToSend = {
      access_key: EMAIL_CONFIG.WEB3FORMS_ACCESS_KEY,
      name: formData.name,
      email: formData.email,
      message: formData.message,
      subject: `New Portfolio Message from ${formData.name}`,
      from_name: formData.name,
      replyto: formData.email,
    };
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formDataToSend)
      });
      
      const data = await response.json();
      
      if (data.success) {
        setIsSubmitting(false);
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        console.error('Web3Forms Error:', data);
        throw new Error(data.message || 'Failed to send');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitting(false);
      setSubmitStatus('error');
      
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "shivamkr1562@gmail.com",
      link: "mailto:shivamkr1562@gmail.com",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      value: "Shivam Kumar",
      link: "https://linkedin.com/in/shivam-kumar-228aa7255",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      value: "shivamkr1563",
      link: "https://github.com/shivamkr1563",
      gradient: "from-gray-600 to-gray-800"
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Location",
      value: "Chennai, India",
      link: null,
      gradient: "from-green-500 to-teal-500"
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
    <section id="contact" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-[0_0_20px_rgba(6,182,212,0.5)]">
              Get In <span className="bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(6,182,212,0.8)]">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 mx-auto rounded-full mb-4 shadow-[0_0_15px_rgba(6,182,212,0.6)]" />
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Have a question or want to work together? Feel free to reach out!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info Cards */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6 drop-shadow-[0_0_15px_rgba(139,92,246,0.4)]">
                Contact Information
              </h3>
              
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="group"
                >
                  {info.link ? (
                    <a
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-purple-400/20 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-all"
                    >
                      <div className={`p-4 rounded-lg bg-gradient-to-br ${info.gradient} text-white text-2xl shadow-[0_0_15px_rgba(139,92,246,0.4)]`}>
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 mb-1">
                          {info.label}
                        </p>
                        <p className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-purple-400/20">
                      <div className={`p-4 rounded-lg bg-gradient-to-br ${info.gradient} text-white text-2xl shadow-[0_0_15px_rgba(139,92,246,0.4)]`}>
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 mb-1">
                          {info.label}
                        </p>
                        <p className="text-lg font-semibold text-white">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Additional Message */}
              <motion.div
                variants={itemVariants}
                className="p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-purple-400/20"
              >
                <p className="text-gray-300 leading-relaxed">
                  💼 <span className="font-semibold text-white">Open to Opportunities:</span> I'm currently seeking 
                  internships and full-time positions in software development, AI/ML, and web development roles.
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-purple-400/20 shadow-[0_0_30px_rgba(139,92,246,0.2)]">
                <h3 className="text-2xl font-bold text-white mb-6 drop-shadow-[0_0_15px_rgba(139,92,246,0.4)]">
                  Send a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-purple-400/30 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent focus:shadow-[0_0_20px_rgba(139,92,246,0.3)] outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-purple-400/30 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent focus:shadow-[0_0_20px_rgba(139,92,246,0.3)] outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-purple-400/30 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent focus:shadow-[0_0_20px_rgba(139,92,246,0.3)] outline-none transition-all resize-none"
                      placeholder="Your message here..."
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:shadow-[0_0_50px_rgba(139,92,246,0.6)] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane /> Send Message
                      </>
                    )}
                  </motion.button>

                  {/* Submit Status */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-lg bg-green-500/20 backdrop-blur-sm border border-green-400/30 text-green-300 text-center"
                    >
                      ✓ Message sent successfully! I'll get back to you soon.
                    </motion.div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-lg bg-red-500/20 backdrop-blur-sm border border-red-400/30 text-red-300 text-center"
                    >
                      ✗ Failed to send message. Please try again or email me directly.
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
