'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="min-h-screen py-20 px-6 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">About NexusAI</span>
            </h2>
            <p className="text-lg text-white/70 mb-6 leading-relaxed">
              We are a forward-thinking digital agency specializing in AI-powered solutions,
              innovative applications, and exceptional web experiences. Our team of experts
              combines technical excellence with creative vision to deliver products that
              exceed expectations.
            </p>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              With a focus on cutting-edge technologies and user-centered design, we help
              businesses of all sizes transform their digital presence and achieve their goals
              in an ever-evolving technological landscape.
            </p>

            <div className="space-y-4">
              {[
                { label: 'Innovation First', value: 'We embrace emerging technologies' },
                { label: 'Client Focused', value: 'Your success is our priority' },
                { label: 'Quality Driven', value: 'Excellence in every detail' },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mt-2" />
                  <div>
                    <div className="font-semibold text-white">{item.label}</div>
                    <div className="text-white/60">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="glass-strong p-12 rounded-3xl">
              <div className="space-y-8">
                {[
                  { skill: 'AI & Machine Learning', percentage: 95 },
                  { skill: 'Web Development', percentage: 98 },
                  { skill: 'Mobile Apps', percentage: 92 },
                  { skill: 'UI/UX Design', percentage: 96 },
                ].map((item, index) => (
                  <motion.div
                    key={item.skill}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-medium">{item.skill}</span>
                      <span className="text-purple-400">{item.percentage}%</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${item.percentage}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.7 + index * 0.1 }}
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="mt-12 pt-8 border-t border-white/10"
              >
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold gradient-text mb-1">5+</div>
                    <div className="text-sm text-white/60">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold gradient-text mb-1">30+</div>
                    <div className="text-sm text-white/60">Team Members</div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="absolute -z-10 -top-10 -right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />
            <div className="absolute -z-10 -bottom-10 -left-10 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
