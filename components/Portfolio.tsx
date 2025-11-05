'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: 'AI-Powered Analytics',
      category: 'AI',
      description: 'Advanced machine learning platform for predictive business analytics',
      image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    {
      title: 'E-Commerce Platform',
      category: 'Web',
      description: 'Modern e-commerce solution with real-time inventory management',
      image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    },
    {
      title: 'Fitness Tracking App',
      category: 'Mobile',
      description: 'Cross-platform mobile app with AI-powered workout recommendations',
      image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    },
    {
      title: 'Smart Home Dashboard',
      category: 'AI',
      description: 'IoT control center with voice-activated AI assistant',
      image: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    },
    {
      title: 'Banking Portal',
      category: 'Web',
      description: 'Secure financial management platform with advanced security features',
      image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    },
    {
      title: 'Travel Companion',
      category: 'Mobile',
      description: 'All-in-one travel planning app with AI itinerary generation',
      image: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    },
  ];

  const filters = ['all', 'AI', 'Web', 'Mobile'];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="portfolio" className="min-h-screen py-20 px-6 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Our Portfolio</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-12">
            Explore our latest projects and see how we've helped clients achieve their goals
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeFilter === filter
                    ? 'glass-strong text-white'
                    : 'glass text-white/60 hover:text-white'
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass rounded-3xl overflow-hidden group cursor-pointer"
            >
              <div
                className="h-48 relative"
                style={{ background: project.image }}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
                <div className="absolute top-4 right-4 glass px-4 py-2 rounded-full text-sm">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-white/60 mb-4">{project.description}</p>
                <div className="flex items-center text-purple-400 group-hover:text-pink-400 transition-colors duration-300">
                  <span className="text-sm font-semibold">View Project</span>
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
