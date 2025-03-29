'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { recipes } from '@/data/recipes';

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

const heroSlides = [
  {
    image: '/images/hero-1.gif',
    title: 'Welcome to Recipe Blog',
    description: 'Discover delicious recipes, cooking tips, and culinary inspiration.',
    position: 'center'
  },
  {
    image: '/images/hero-2.gif',
    title: 'Cook Like a Pro',
    description: 'Learn expert techniques and create restaurant-quality dishes at home.',
    position: 'bottom'
  },
  {
    image: '/images/hero-3.gif',
    title: 'Explore Global Cuisines',
    description: 'Travel the world through your kitchen with our diverse recipe collection.',
    position: 'top'
  }
];

const categories = [
  {
    id: 'breakfast',
    name: 'Breakfast',
    description: 'Start your day with delicious breakfast recipes',
    image: '/images/breakfast.jpg'
  },
  {
    id: 'main-course',
    name: 'Main Course',
    description: 'Satisfying main dishes for lunch or dinner',
    image: '/images/main-course.jpg'
  },
  {
    id: 'dessert',
    name: 'Dessert',
    description: 'Sweet treats and desserts for any occasion',
    image: '/images/dessert.jpg'
  },
  {
    id: 'vegetarian',
    name: 'Vegetarian',
    description: 'Meat-free recipes packed with flavor',
    image: '/images/vegetarian.jpg'
  }
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  // Filter categories and recipes based on search
  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    recipe.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Show search results only when there's a search term
  useEffect(() => {
    setShowSearchResults(searchTerm.length > 0);
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section with Slider */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              src={heroSlides[currentSlide].image}
              alt={heroSlides[currentSlide].title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 text-center px-4">
          <motion.h1
            key={`title-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-white mb-4"
          >
            {heroSlides[currentSlide].title}
          </motion.h1>
          <motion.p
            key={`desc-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-200 max-w-2xl mx-auto"
          >
            {heroSlides[currentSlide].description}
          </motion.p>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? 'bg-white w-6'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Categories Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {showSearchResults ? 'Search Results' : 'Popular Categories'}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            {showSearchResults ? 'Find your favorite recipes and categories' : 'Explore our most popular recipe collections'}
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative mb-12">
            <input
              type="text"
              placeholder="Search recipes and categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-700"
            />
            <span className="absolute right-3 top-2.5 text-gray-400">🔍</span>
          </div>
        </motion.div>

        {showSearchResults ? (
          <div className="space-y-12">
            {/* Categories Results */}
            {filteredCategories.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Categories</h3>
                <motion.div
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                  {filteredCategories.map((category) => (
                    <Link
                      key={category.id}
                      href={`/categories/${category.id}`}
                      className="block group"
                    >
                      <motion.div
                        variants={item}
                        className="relative overflow-hidden rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-md shadow-glass hover:shadow-glass-lg transition-all duration-300"
                      >
                        <div className="relative h-48">
                          <Image
                            src={category.image}
                            alt={category.name}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-6">
                            <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                            <p className="text-gray-200">{category.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  ))}
                </motion.div>
              </div>
            )}

            {/* Recipes Results */}
            {filteredRecipes.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Recipes</h3>
                <motion.div
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {filteredRecipes.map((recipe) => (
                    <Link
                      key={recipe.id}
                      href={`/recipes/${recipe.id}`}
                      className="block group"
                    >
                      <motion.div
                        variants={item}
                        className="relative overflow-hidden rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-md shadow-glass hover:shadow-glass-lg transition-all duration-300"
                      >
                        <div className="relative h-48">
                          <Image
                            src={recipe.image}
                            alt={recipe.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-6">
                            <span className="inline-block px-2 py-1 text-xs font-medium bg-primary-500/80 text-white rounded-full mb-2">
                              {recipe.category}
                            </span>
                            <h3 className="text-xl font-bold text-white mb-1">{recipe.title}</h3>
                            <p className="text-sm text-gray-200 line-clamp-2">{recipe.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  ))}
                </motion.div>
              </div>
            )}

            {/* No Results Message */}
            {filteredCategories.length === 0 && filteredRecipes.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 dark:text-gray-400">
                  No recipes or categories found matching your search.
                </p>
              </div>
            )}
          </div>
        ) : (
          // Default Categories Grid
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/categories/${category.id}`}
                className="block group"
              >
                <motion.div
                  variants={item}
                  className="relative overflow-hidden rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-md shadow-glass hover:shadow-glass-lg transition-all duration-300"
                >
                  <div className="relative h-64">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                      <p className="text-gray-200">{category.description}</p>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
