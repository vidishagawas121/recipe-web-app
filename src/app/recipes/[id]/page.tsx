'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { recipes } from '@/data/recipes';
import { IoMdTime } from 'react-icons/io';
import { FaUtensils, FaUserFriends, FaPrint } from 'react-icons/fa';
import { MdOutlineFoodBank } from 'react-icons/md';
import { FiHeart } from 'react-icons/fi';
import { useFavorites } from '@/context/FavoritesContext';

export default function RecipePage({ params }: { params: { id: string } }) {
  const [servingSize, setServingSize] = useState(4);
  const [showHeartAnimation, setShowHeartAnimation] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [crossedIngredients, setCrossedIngredients] = useState<number[]>([]);
  const { toggleFavorite, isFavorite } = useFavorites();

  const recipe = recipes.find(r => r.id === params.id);

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Recipe not found</p>
      </div>
    );
  }

  const adjustIngredientAmount = (ingredient: string) => {
    const match = ingredient.match(/^([\d.]+)\s*(.+)$/);
    if (match) {
      const [_, amount, rest] = match;
      const adjustedAmount = (parseFloat(amount) * servingSize) / recipe.servings;
      return `${adjustedAmount.toFixed(1)} ${rest}`;
    }
    return ingredient;
  };

  const handleNextStep = () => {
    if (activeStep < recipe!.instructions.length - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  const toggleIngredient = (index: number) => {
    setCrossedIngredients(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const handleFavoriteClick = () => {
    toggleFavorite(recipe.id);
    if (!isFavorite(recipe.id)) {
      setShowHeartAnimation(true);
      setTimeout(() => setShowHeartAnimation(false), 1000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center">
        <Image
          src={recipe.image}
          alt={recipe.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        {/* Heart Animation */}
        <AnimatePresence>
          {showHeartAnimation && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [1, 1.2, 1], opacity: [1, 1, 0] }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute z-20 pointer-events-none"
            >
              <FiHeart className="w-32 h-32 text-red-500 fill-current" />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl"
            >
              <Link
                href="/categories/step-by-step"
                className="inline-block px-4 py-2 rounded-full bg-primary-500 text-white text-sm font-medium mb-4 hover:bg-primary-600 transition-colors"
              >
                📝 Step-by-Step Recipe
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{recipe.title}</h1>
              <p className="text-xl text-gray-200 mb-6">{recipe.description}</p>
              <div className="flex flex-wrap gap-6 text-white">
                <div className="flex items-center gap-2">
                  <IoMdTime size={20} />
                  <span>Prep: {recipe.prepTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaUtensils size={20} />
                  <span>Cook: {recipe.cookTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MdOutlineFoodBank size={20} />
                  <span>Difficulty: {recipe.difficulty}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Recipe Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <button
              onClick={handleFavoriteClick}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                isFavorite(recipe.id)
                  ? 'bg-red-50 text-red-500 dark:bg-red-900/20'
                  : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              <motion.div
                transition={{ duration: 0.3 }}
              >
                <FiHeart
                  size={20}
                  className={`${isFavorite(recipe.id) ? 'fill-current' : ''} transition-colors`}
                />
              </motion.div>
              <span>Favorite</span>
            </button>
            <button
              onClick={() => window.print()}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <FaPrint size={16} />
              Print Recipe
            </button>
          </div>

          {/* Servings Adjuster */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-8 shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FaUserFriends size={24} color="var(--primary-500)" />
                <span className="text-lg font-medium">Adjust Servings</span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setServingSize(Math.max(1, servingSize - 1))}
                  className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600"
                >
                  -
                </button>
                <span className="text-lg font-medium w-8 text-center">{servingSize}</span>
                <button
                  onClick={() => setServingSize(servingSize + 1)}
                  className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Ingredients */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-6">
              🥗 Ingredients
            </h2>
            <ul className="space-y-3">
              {recipe.ingredients.map((ingredient, index) => (
                <li
                  key={index}
                  className={`flex items-center gap-3 text-lg cursor-pointer transition-all duration-300 ${
                    crossedIngredients.includes(index)
                      ? 'text-gray-400 dark:text-gray-500'
                      : 'text-gray-900 dark:text-white'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={crossedIngredients.includes(index)}
                    onChange={() => toggleIngredient(index)}
                    className="w-5 h-5 rounded-md border-gray-300 text-primary-500 focus:ring-primary-500 cursor-pointer"
                  />
                  <span 
                    onClick={() => toggleIngredient(index)}
                    className={`${
                      crossedIngredients.includes(index) ? 'line-through' : ''
                    }`}
                  >
                    {adjustIngredientAmount(ingredient)}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Instructions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">
                👩‍🍳 Instructions
              </h2>
              <div className="flex items-center gap-4">
                <button
                  onClick={handlePrevStep}
                  disabled={activeStep === 0}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeStep === 0
                      ? 'bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed'
                      : 'bg-primary-500 text-white hover:bg-primary-600'
                  }`}
                >
                  ← Previous
                </button>
                <span className="text-sm text-gray-500">
                  Step {activeStep + 1} of {recipe.instructions.length}
                </span>
                <button
                  onClick={handleNextStep}
                  disabled={activeStep === recipe.instructions.length - 1}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeStep === recipe.instructions.length - 1
                      ? 'bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed'
                      : 'bg-primary-500 text-white hover:bg-primary-600'
                  }`}
                >
                  Next →
                </button>
              </div>
            </div>
            <div className="space-y-6">
              {recipe.instructions.map((step, index) => (
                <motion.div
                  key={index}
                  className={`p-6 rounded-xl transition-all ${
                    activeStep === index
                      ? 'bg-primary-50 dark:bg-primary-900/20 ring-2 ring-primary-500'
                      : 'bg-gray-50 dark:bg-gray-700/50'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-500 text-white flex items-center justify-center font-medium">
                      {index + 1}
                    </div>
                    <div className="flex-grow">
                      <p className="text-lg">
                        {index === 0 && '🏁 '}
                        {index === recipe.instructions.length - 1 && '🎉 '}
                        {step}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tags */}
          <div className="mt-8 flex flex-wrap gap-2">
            {recipe.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-sm font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 