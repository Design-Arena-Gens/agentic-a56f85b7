'use client';

import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="gradient-text">Transform Ideas</span>
            <br />
            <span className="text-white">Into Reality</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We craft cutting-edge AI solutions, innovative applications, and stunning web experiences
            that push the boundaries of what's possible in digital innovation.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button className="glass-strong px-8 py-4 rounded-full text-white text-lg hover:scale-105 transition-all duration-300 group">
              Start Your Project
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </button>
            <button className="glass px-8 py-4 rounded-full text-white text-lg hover:scale-105 transition-all duration-300">
              View Our Work
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            { number: '150+', label: 'Projects Delivered' },
            { number: '50+', label: 'Happy Clients' },
            { number: '98%', label: 'Client Satisfaction' },
            { number: '24/7', label: 'Support Available' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="glass p-6 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white/40 text-sm flex flex-col items-center"
        >
          <span className="mb-2">Scroll to explore</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
