'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-6 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Ready to start your project? Let's discuss how we can help bring your vision to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white/80 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full glass px-6 py-4 rounded-2xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white/80 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full glass px-6 py-4 rounded-2xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white/80 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full glass px-6 py-4 rounded-2xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full glass-strong px-8 py-4 rounded-2xl text-white font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="glass-strong p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="glass p-3 rounded-xl">
                    <svg
                      className="w-6 h-6 text-purple-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white/60 text-sm mb-1">Email</div>
                    <div className="text-white">contact@nexusai.com</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="glass p-3 rounded-xl">
                    <svg
                      className="w-6 h-6 text-purple-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white/60 text-sm mb-1">Phone</div>
                    <div className="text-white">+1 (555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="glass p-3 rounded-xl">
                    <svg
                      className="w-6 h-6 text-purple-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white/60 text-sm mb-1">Location</div>
                    <div className="text-white">San Francisco, CA</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-strong p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-6 text-white">Follow Us</h3>
              <div className="flex space-x-4">
                {['twitter', 'linkedin', 'github', 'instagram'].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="glass w-12 h-12 rounded-xl flex items-center justify-center hover:bg-white/10 transition-all duration-300"
                  >
                    <span className="text-purple-400 capitalize">{social[0].toUpperCase()}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 text-center glass-strong py-8 px-6 rounded-3xl"
        >
          <p className="text-white/60">
            © 2024 NexusAI. All rights reserved. | Built with innovation and passion
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
