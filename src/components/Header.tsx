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

          <nav className="flex items-center space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <ThemePicker />
          </nav>
        </div>
      </div>
    </header>
  );
}