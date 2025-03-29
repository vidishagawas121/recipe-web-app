'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './ThemeProvider';

interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

interface RecipeRatingProps {
  recipeId: string;
  initialRating?: number;
  initialReviews?: Review[];
}

export default function RecipeRating({ recipeId, initialRating = 0, initialReviews = [] }: RecipeRatingProps) {
  const { theme } = useTheme();
  const [rating, setRating] = useState(initialRating);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newReview, setNewReview] = useState({
    rating: 0,
    comment: '',
  });

  const handleRatingClick = async (newRating: number) => {
    setRating(newRating);
    // Here you would typically make an API call to save the rating
    localStorage.setItem(`recipe_rating_${recipeId}`, newRating.toString());
  };

  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newReview.rating === 0) return;

    const review: Review = {
      id: Date.now().toString(),
      userId: 'user123', // Replace with actual user ID
      userName: 'John Doe', // Replace with actual user name
      rating: newReview.rating,
      comment: newReview.comment,
      date: new Date().toISOString(),
    };

    setReviews(prev => [review, ...prev]);
    setShowReviewForm(false);
    setNewReview({ rating: 0, comment: '' });

    // Here you would typically make an API call to save the review
    const savedReviews = JSON.parse(localStorage.getItem(`recipe_reviews_${recipeId}`) || '[]');
    localStorage.setItem(`recipe_reviews_${recipeId}`, JSON.stringify([review, ...savedReviews]));
  };

  return (
    <div className="space-y-6">
      {/* Rating Stars */}
      <div className="flex items-center gap-2">
        <div className="flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <motion.button
              key={star}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onMouseEnter={() => setHoveredRating(star)}
              onMouseLeave={() => setHoveredRating(0)}
              onClick={() => handleRatingClick(star)}
              className="focus:outline-none"
            >
              <svg
                className={`w-8 h-8 ${
                  star <= (hoveredRating || rating)
                    ? 'text-yellow-400'
                    : 'text-pastel-300 dark:text-pastel-600'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </motion.button>
          ))}
        </div>
        <span className="text-pastel-700 dark:text-pastel-300">
          {rating} / 5
        </span>
      </div>

      {/* Review Form */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setShowReviewForm(true)}
        className="px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-primary-600 dark:text-primary-400 rounded-md hover:bg-white/90 dark:hover:bg-gray-800/90 transition-colors border border-white/20 dark:border-gray-700/20 shadow-lg"
      >
        Write a Review
      </motion.button>

      <AnimatePresence>
        {showReviewForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.form
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onSubmit={handleReviewSubmit}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-6 rounded-xl shadow-xl border border-white/20 dark:border-gray-700/20 w-full max-w-lg space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-pastel-700 dark:text-pastel-300 mb-2">
                  Your Rating
                </label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <motion.button
                      key={star}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setNewReview(prev => ({ ...prev, rating: star }))}
                      className="focus:outline-none"
                    >
                      <svg
                        className={`w-6 h-6 ${
                          star <= newReview.rating
                            ? 'text-yellow-400'
                            : 'text-pastel-300 dark:text-pastel-600'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </motion.button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="comment" className="block text-sm font-medium text-pastel-700 dark:text-pastel-300 mb-2">
                  Your Review
                </label>
                <textarea
                  id="comment"
                  value={newReview.comment}
                  onChange={(e) => setNewReview(prev => ({ ...prev, comment: e.target.value }))}
                  required
                  rows={3}
                  className="w-full px-4 py-2 rounded-md bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 text-pastel-800 dark:text-pastel-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Share your experience with this recipe..."
                />
              </div>

              <div className="flex justify-end gap-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={() => setShowReviewForm(false)}
                  className="px-4 py-2 text-pastel-700 dark:text-pastel-300 hover:text-pastel-900 dark:hover:text-pastel-100"
                >
                  Cancel
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={newReview.rating === 0}
                  className="px-4 py-2 bg-primary-600/90 backdrop-blur-sm text-white rounded-md hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Submit Review
                </motion.button>
              </div>
            </motion.form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Reviews List */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-pastel-800 dark:text-pastel-200">
          Reviews ({reviews.length})
        </h3>
        {reviews.map((review, index) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/20 dark:border-gray-700/20"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="font-medium text-pastel-800 dark:text-pastel-200">
                  {review.userName}
                </span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className={`w-4 h-4 ${
                        star <= review.rating
                          ? 'text-yellow-400'
                          : 'text-pastel-300 dark:text-pastel-600'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <span className="text-sm text-pastel-500 dark:text-pastel-400">
                {new Date(review.date).toLocaleDateString()}
              </span>
            </div>
            <p className="text-pastel-700 dark:text-pastel-300">
              {review.comment}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 