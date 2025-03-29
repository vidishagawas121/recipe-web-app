import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Header from '@/components/Header';
import { FavoritesProvider } from '@/context/FavoritesContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Recipe Blog',
  description: 'Discover delicious recipes and cooking inspiration',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <FavoritesProvider>
          <ThemeProvider>
            <Header />
            <main>{children}</main>
          </ThemeProvider>
        </FavoritesProvider>
      </body>
    </html>
  );
}
