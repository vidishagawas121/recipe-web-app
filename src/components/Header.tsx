'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemePicker } from './ThemePicker';

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Categories', href: '/categories' },
    { name: 'Favorites', href: '/favorites' },
    { name: 'About', href: '/about' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
            Recipe Blog
          </Link>

          <nav className="flex items-center space-x-8">
            <Link
              href="/categories"
              className={`text-sm font-medium transition-colors ${
                isActive('/categories')
                  ? 'text-primary-600 dark:text-primary-400'
                  : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
              }`}
            >
              Categories
            </Link>
            <Link
              href="/favorites"
              className={`text-sm font-medium transition-colors ${
                isActive('/favorites')
                  ? 'text-primary-600 dark:text-primary-400'
                  : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
              }`}
            >
              Favorites
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium transition-colors ${
                isActive('/about')
                  ? 'text-primary-600 dark:text-primary-400'
                  : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
              }`}
            >
              About
            </Link>
            <ThemePicker />
          </nav>
        </div>
      </div>
    </header>
  );
} 