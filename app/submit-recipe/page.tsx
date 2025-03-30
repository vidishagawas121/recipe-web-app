'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useTheme } from '@/components/ThemeProvider';
import Toast from '@/components/Toast';

export default function SubmitRecipe() {
  const { theme } = useTheme();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState<'success' | 'error'>('success');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    prepTime: '',
    cookTime: '',
    servings: 1,
    ingredients: [''],
    instructions: [''],
    videoUrl: '',
    image: null as File | null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        image: e.target.files![0]
      }));
    }
  };

  const addIngredient = () => {
    setFormData(prev => ({
      ...prev,
      ingredients: [...prev.ingredients, '']
    }));
  };

  const removeIngredient = (index: number) => {
    setFormData(prev => ({
      ...prev,
      ingredients: prev.ingredients.filter((_, i) => i !== index)
    }));
  };

  const updateIngredient = (index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      ingredients: prev.ingredients.map((ingredient, i) => 
        i === index ? value : ingredient
      )
    }));
  };

  const addInstruction = () => {
    setFormData(prev => ({
      ...prev,
      instructions: [...prev.instructions, '']
    }));
  };

  const removeInstruction = (index: number) => {
    setFormData(prev => ({
      ...prev,
      instructions: prev.instructions.filter((_, i) => i !== index)
    }));
  };

  const updateInstruction = (index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      instructions: prev.instructions.map((instruction, i) => 
        i === index ? value : instruction
      )
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formDataToSend = new FormData();
      
      // Handle ingredients and instructions
      formDataToSend.append('ingredients', JSON.stringify(formData.ingredients));
      formDataToSend.append('instructions', JSON.stringify(formData.instructions));
      
      // Handle image
      if (formData.image) {
        formDataToSend.append('image', formData.image);
      }
      
      // Handle other fields
      formDataToSend.append('title', formData.title);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('category', formData.category);
      formDataToSend.append('prepTime', formData.prepTime);
      formDataToSend.append('cookTime', formData.cookTime);
      formDataToSend.append('servings', formData.servings.toString());
      formDataToSend.append('videoUrl', formData.videoUrl);

      const response = await fetch('/api/recipes', {
        method: 'POST',
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error('Failed to submit recipe');
      }

      setToastMessage('Recipe submitted successfully!');
      setToastType('success');
      setShowToast(true);
      router.push('/');
    } catch (error) {
      console.error('Error submitting recipe:', error);
      setToastMessage('Failed to submit recipe. Please try again.');
      setToastType('error');
      setShowToast(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-pastel-50 dark:bg-gray-900 py-8"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-pastel-800 dark:text-pastel-200 mb-4">
            Submit Your Recipe
          </h1>
          <p className="text-pastel-600 dark:text-pastel-400">
            Share your culinary masterpiece with the world
          </p>
        </motion.div>

        <motion.form
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-pastel-200 dark:border-gray-700 p-6 space-y-6"
        >
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-pastel-700 dark:text-pastel-300 mb-1">
              Recipe Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 rounded-md border border-pastel-200 dark:border-gray-700 bg-white dark:bg-gray-700 text-pastel-800 dark:text-pastel-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-pastel-700 dark:text-pastel-300 mb-1">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
              rows={3}
              className="w-full px-4 py-2 rounded-md border border-pastel-200 dark:border-gray-700 bg-white dark:bg-gray-700 text-pastel-800 dark:text-pastel-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium text-pastel-700 dark:text-pastel-300 mb-1">
              Category
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 rounded-md border border-pastel-200 dark:border-gray-700 bg-white dark:bg-gray-700 text-pastel-800 dark:text-pastel-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="">Select a category</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Main Course">Main Course</option>
              <option value="Desserts">Desserts</option>
              <option value="Vegetarian">Vegetarian</option>
              <option value="Vegan">Vegan</option>
              <option value="Snacks">Snacks</option>
              <option value="Beverages">Beverages</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="prepTime" className="block text-sm font-medium text-pastel-700 dark:text-pastel-300 mb-1">
                Prep Time
              </label>
              <input
                type="text"
                id="prepTime"
                name="prepTime"
                value={formData.prepTime}
                onChange={handleInputChange}
                required
                placeholder="e.g., 30 mins"
                className="w-full px-4 py-2 rounded-md border border-pastel-200 dark:border-gray-700 bg-white dark:bg-gray-700 text-pastel-800 dark:text-pastel-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="cookTime" className="block text-sm font-medium text-pastel-700 dark:text-pastel-300 mb-1">
                Cook Time
              </label>
              <input
                type="text"
                id="cookTime"
                name="cookTime"
                value={formData.cookTime}
                onChange={handleInputChange}
                required
                placeholder="e.g., 1 hour"
                className="w-full px-4 py-2 rounded-md border border-pastel-200 dark:border-gray-700 bg-white dark:bg-gray-700 text-pastel-800 dark:text-pastel-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="servings" className="block text-sm font-medium text-pastel-700 dark:text-pastel-300 mb-1">
                Servings
              </label>
              <input
                type="number"
                id="servings"
                name="servings"
                value={formData.servings}
                onChange={handleInputChange}
                required
                min="1"
                className="w-full px-4 py-2 rounded-md border border-pastel-200 dark:border-gray-700 bg-white dark:bg-gray-700 text-pastel-800 dark:text-pastel-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label htmlFor="image" className="block text-sm font-medium text-pastel-700 dark:text-pastel-300 mb-1">
              Recipe Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleImageChange}
              accept="image/*"
              required
              className="w-full px-4 py-2 rounded-md border border-pastel-200 dark:border-gray-700 bg-white dark:bg-gray-700 text-pastel-800 dark:text-pastel-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-pastel-700 dark:text-pastel-300 mb-1">
              Ingredients
            </label>
            <div className="space-y-2">
              {formData.ingredients.map((ingredient, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={ingredient}
                    onChange={(e) => updateIngredient(index, e.target.value)}
                    required
                    placeholder={`Ingredient ${index + 1}`}
                    className="flex-1 px-4 py-2 rounded-md border border-pastel-200 dark:border-gray-700 bg-white dark:bg-gray-700 text-pastel-800 dark:text-pastel-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  <button
                    type="button"
                    onClick={() => removeIngredient(index)}
                    className="px-3 py-2 text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={addIngredient}
                className="w-full px-4 py-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 border border-primary-600 dark:border-primary-400 rounded-md"
              >
                Add Ingredient
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-pastel-700 dark:text-pastel-300 mb-1">
              Instructions
            </label>
            <div className="space-y-2">
              {formData.instructions.map((instruction, index) => (
                <div key={index} className="flex gap-2">
                  <textarea
                    value={instruction}
                    onChange={(e) => updateInstruction(index, e.target.value)}
                    required
                    placeholder={`Step ${index + 1}`}
                    rows={2}
                    className="flex-1 px-4 py-2 rounded-md border border-pastel-200 dark:border-gray-700 bg-white dark:bg-gray-700 text-pastel-800 dark:text-pastel-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  <button
                    type="button"
                    onClick={() => removeInstruction(index)}
                    className="px-3 py-2 text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={addInstruction}
                className="w-full px-4 py-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 border border-primary-600 dark:border-primary-400 rounded-md"
              >
                Add Step
              </button>
            </div>
          </div>

          <div>
            <label htmlFor="videoUrl" className="block text-sm font-medium text-pastel-700 dark:text-pastel-300 mb-1">
              Video URL (Optional)
            </label>
            <input
              type="url"
              id="videoUrl"
              name="videoUrl"
              value={formData.videoUrl}
              onChange={handleInputChange}
              placeholder="https://youtube.com/..."
              className="w-full px-4 py-2 rounded-md border border-pastel-200 dark:border-gray-700 bg-white dark:bg-gray-700 text-pastel-800 dark:text-pastel-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Submitting...' : 'Submit Recipe'}
            </button>
          </div>
        </motion.form>
      </div>

      {showToast && (
        <Toast
          message={toastMessage}
          type={toastType}
          onClose={() => setShowToast(false)}
        />
      )}
    </motion.div>
  );
} 