'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useFavorites } from '@/context/FavoritesContext';
import { recipes } from '@/data/recipes';
import { FiHeart } from 'react-icons/fi';

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

export default function FavoritesPage() {
  const { favorites, toggleFavorite } = useFavorites();
  const favoriteRecipes = recipes.filter(recipe => favorites.includes(recipe.id));

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-accent-600/20" />
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              ❤️ My Favorite Recipes
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {favoriteRecipes.length === 0
                ? "You haven't saved any recipes yet. Start exploring!"
                : `You have ${favoriteRecipes.length} favorite ${
                    favoriteRecipes.length === 1 ? 'recipe' : 'recipes'
                  }`}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Favorites Grid */}
      <div className="container mx-auto px-4 py-12">
        {favoriteRecipes.length === 0 ? (
          <div className="text-center">
            <Link
              href="/categories"
              className="inline-block px-6 py-3 rounded-full bg-primary-500 text-white font-medium hover:bg-primary-600 transition-colors"
            >
              Browse Categories
            </Link>
          </div>
        ) : (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {favoriteRecipes.map((recipe) => (
              <motion.div key={recipe.id} variants={item}>
                <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-glass hover:shadow-glass-lg transition-all duration-300">
                  <Link href={`/recipes/${recipe.id}`}>
                    <div className="relative h-48">
                      <Image
                        src={recipe.image}
                        alt={recipe.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h2 className="text-xl font-bold text-white mb-2">{recipe.title}</h2>
                        <p className="text-gray-200 line-clamp-2">{recipe.description}</p>
                      </div>
                    </div>
                  </Link>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {recipe.prepTime} prep
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {recipe.cookTime} cook
                        </span>
                      </div>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          toggleFavorite(recipe.id);
                        }}
                        className="p-2 rounded-full bg-red-50 text-red-500 dark:bg-red-900/20"
                      >
                        <FiHeart className="w-5 h-5 fill-current" />
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {recipe.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-xs font-medium"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
} 