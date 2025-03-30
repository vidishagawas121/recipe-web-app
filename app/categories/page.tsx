'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { categories } from '@/data/categories';
import { recipes } from '@/data/recipes';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function CategoriesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Filter categories based on search and selected category
  const filteredCategories = categories.filter(category => {
    const matchesSearch = 
      category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.subcategories.some(sub => sub.toLowerCase().includes(searchTerm.toLowerCase()));
    
    // If 'all' is selected or the category matches selected category, include it
    const matchesCategory = selectedCategory === 'all' || category.id === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Get recipes for a specific category
  const getCategoryRecipes = (categoryId: string) => {
    return recipes.filter(recipe => recipe.category === categoryId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/categories/hero.jpg"
          alt="Recipe Categories"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold text-white mb-4">Recipe Categories</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Explore our diverse collection of recipes, from quick meals to gourmet dishes
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-6 mb-8">
          <div className="w-full max-w-2xl">
            <input
              type="text"
              placeholder="🔍 Search categories and recipes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 rounded-full border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-700 text-lg"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all transform hover:scale-105 ${
                selectedCategory === 'all'
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              🌟 All Categories
            </button>
            <button
              onClick={() => setSelectedCategory('step-by-step')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all transform hover:scale-105 ${
                selectedCategory === 'step-by-step'
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              📝 Step-by-Step
            </button>
            <button
              onClick={() => setSelectedCategory('quick-and-easy')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all transform hover:scale-105 ${
                selectedCategory === 'quick-and-easy'
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              ⚡ Quick & Easy
            </button>
            <button
              onClick={() => setSelectedCategory('dietary')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all transform hover:scale-105 ${
                selectedCategory === 'dietary'
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              🥗 Healthy & Diet
            </button>
            <button
              onClick={() => setSelectedCategory('seasonal')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all transform hover:scale-105 ${
                selectedCategory === 'seasonal'
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              🎉 Seasonal
            </button>
            <button
              onClick={() => setSelectedCategory('international')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all transform hover:scale-105 ${
                selectedCategory === 'international'
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              🌎 International
            </button>
            <button
              onClick={() => setSelectedCategory('restaurant-style')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all transform hover:scale-105 ${
                selectedCategory === 'restaurant-style'
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              🍽️ Restaurant
            </button>
            <button
              onClick={() => setSelectedCategory('budget-friendly')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all transform hover:scale-105 ${
                selectedCategory === 'budget-friendly'
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              💰 Budget
            </button>
          </div>
        </div>

        {/* Categories Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredCategories.map((category) => (
            <motion.div key={category.id} variants={item}>
              <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-glass hover:shadow-glass-lg transition-all duration-300">
                <Link href={`/categories/${category.id}`}>
                  <div className="relative h-48">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h2 className="text-2xl font-bold text-white mb-2">{category.name}</h2>
                      <p className="text-gray-200 mb-4">{category.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {category.subcategories.map((sub) => (
                          <span
                            key={sub}
                            className="inline-block px-2 py-1 text-xs font-medium bg-primary-500/80 text-white rounded-full"
                          >
                            {sub}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>

                {/* Preview of Recipes in Category */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Featured Recipes
                  </h3>
                  <div className="space-y-4">
                    {getCategoryRecipes(category.id)
                      .slice(0, 3)
                      .map((recipe) => (
                        <Link
                          key={recipe.id}
                          href={`/recipes/${recipe.id}`}
                          className="flex items-center gap-4 group"
                        >
                          <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                            <Image
                              src={recipe.image}
                              alt={recipe.title}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 dark:text-white group-hover:text-primary-500 transition-colors">
                              {recipe.title}
                            </h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {recipe.prepTime} prep · {recipe.cookTime} cook
                            </p>
                          </div>
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">
              {searchTerm
                ? "No categories found matching your search."
                : "No recipes found in this category."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
} 