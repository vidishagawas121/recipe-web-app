import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Category } from '@/data/recipes';

interface CategoriesNavProps {
  categories: Category[];
}

export default function CategoriesNav({ categories }: CategoriesNavProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Filter categories based on search term
  const filteredCategories = categories.filter(category => {
    const matchesSearch = 
      category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.subcategories.some(sub => 
        sub.toLowerCase().includes(searchTerm.toLowerCase())
      );
    
    return matchesSearch;
  });

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Search and Filter Section */}
      <div className="mb-8 space-y-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search categories or recipes..."
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-700"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="absolute right-3 top-2.5 text-gray-400">🔍</span>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCategories.map((category) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="group"
          >
            <Link href={`/categories/${category.id}`}>
              <div className="relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-48">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl">{category.icon}</span>
                      <h3 className="text-xl font-bold text-white">{category.name}</h3>
                    </div>
                    <p className="text-sm text-gray-200 mt-1">{category.description}</p>
                  </div>
                </div>
                
                {/* Subcategories */}
                <div className="p-4">
                  <div className="flex flex-wrap gap-2">
                    {category.subcategories.slice(0, 3).map((sub) => (
                      <span
                        key={sub}
                        className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                      >
                        {sub}
                      </span>
                    ))}
                    {category.subcategories.length > 3 && (
                      <span className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                        +{category.subcategories.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* No Results Message */}
      {filteredCategories.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">
            No categories found matching your search.
          </p>
        </div>
      )}
    </div>
  );
} 