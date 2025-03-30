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
    { name: 'Categories', href: '/categories' },
    { name: 'Favorites', href: '/favorites' },
    { name: 'About', href: '/about' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
            Recipe Blog
          </Link>

          <nav className="flex items-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors px-8 ${
                  isActive(item.href)
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="ml-8">
              <ThemePicker />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
} 