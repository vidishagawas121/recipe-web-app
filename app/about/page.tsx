'use client';

import { motion } from 'framer-motion';
import { IconSet } from '@/components/IconSet';
import Image from 'next/image';
import Link from 'next/link';

const features = [
  {
    icon: <IconSet.Cookbook size={32} />,
    title: 'Curated Recipes',
    description: 'Carefully selected and tested recipes from experienced chefs and home cooks.',
  },
  {
    icon: <IconSet.Ingredients size={32} />,
    title: 'Detailed Instructions',
    description: 'Step-by-step guides with clear measurements and cooking tips.',
  },
  {
    icon: <IconSet.Timer size={32} />,
    title: 'Time-Saving Tips',
    description: 'Quick meal ideas and time-saving techniques for busy cooks.',
  },
  {
    icon: <IconSet.Favorite size={32} />,
    title: 'Save Favorites',
    description: 'Create your personal collection of favorite recipes.',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Culinary background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-accent-600/20 backdrop-blur-sm" />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            About Recipe Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Your trusted source for delicious recipes, cooking tips, and culinary inspiration.
          </motion.p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We believe that cooking should be accessible, enjoyable, and rewarding for everyone.
            Our mission is to provide high-quality recipes, cooking tips, and culinary inspiration
            that helps you create delicious meals in your own kitchen.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative overflow-hidden rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-md shadow-glass p-6"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Creator Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Meet the Creator
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            The passionate developer behind Recipe Blog
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-2xl mx-auto"
        >
          <motion.div
            variants={item}
            className="relative overflow-hidden rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-md shadow-glass p-8"
          >
            <div className="flex flex-col items-center">
              <div className="relative w-40 h-40 mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-accent-600/20 rounded-full blur-xl" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
                  <Image
                    src="/images/profile.jpg"
                    alt="Vidisha Gawas"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                Vidisha Gawas
              </h3>
              <p className="text-primary-600 dark:text-primary-400 mb-4">
                Full Stack Developer
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
                A passionate developer with expertise in creating beautiful and functional web applications.
                Currently focused on building innovative solutions and exploring new technologies.
              </p>
              
              <div className="flex space-x-6">
                <Link
                  href="https://www.linkedin.com/in/vidisha-gawas-79abb3313/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </Link>
                <Link
                  href="https://github.com/vidishagawas121"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </Link>
                <Link
                  href="https://www.instagram.com/writer_by_passion_123/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.012-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto text-center mt-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Have questions or suggestions? I'd love to hear from you!
          </p>          
        </motion.div>
      </div>
    </div>
  );
} 