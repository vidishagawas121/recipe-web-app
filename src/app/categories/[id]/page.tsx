'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
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

export default function CategoryPage({ params }: { params: { id: string } }) {
  const categoryRecipes = recipes.filter(recipe => recipe.category === params.id);
  
  if (categoryRecipes.length === 0) {
    notFound();
  }

  const categoryName = params.id.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={`/images/${params.id}.jpg`}
            alt={categoryName}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent" />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-white mb-4"
          >
            {categoryName} Recipes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-200 max-w-2xl mx-auto"
          >
            Discover our collection of delicious {categoryName.toLowerCase()} recipes
          </motion.p>
        </div>
      </div>

      {/* Recipes Grid */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categoryRecipes.map((recipe) => (
            <Link
              key={recipe.id}
              href={`/recipes/${recipe.id}`}
              className="block group"
            >
              <motion.div
                variants={item}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-glass overflow-hidden hover:shadow-glass-lg transition-all duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={recipe.image}
                    alt={recipe.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{recipe.title}</h3>
                    <p className="text-gray-200 line-clamp-2">{recipe.description}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {recipe.prepTime} prep · {recipe.cookTime} cook
                      </span>
                    </div>
                    <span className="px-3 py-1 text-sm font-medium text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 rounded-full">
                      {recipe.difficulty}
                    </span>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Ingredients</h4>
                      <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                        {recipe.ingredients.slice(0, 4).map((ingredient, index) => (
                          <li key={index} className="text-sm">{ingredient}</li>
                        ))}
                        {recipe.ingredients.length > 4 && (
                          <li className="text-sm text-primary-600 dark:text-primary-400">
                            +{recipe.ingredients.length - 4} more ingredients
                          </li>
                        )}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {recipe.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
} 