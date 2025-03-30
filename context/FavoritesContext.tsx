'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type FavoritesContextType = {
  favorites: string[];
  addFavorite: (recipeId: string) => void;
  removeFavorite: (recipeId: string) => void;
  isFavorite: (recipeId: string) => boolean;
};

const FavoritesContext = createContext<FavoritesContextType>({
  favorites: [],
  addFavorite: () => {},
  removeFavorite: () => {},
  isFavorite: () => false,
});

export function useFavorites() {
  return useContext(FavoritesContext);
}

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    try {
      const savedFavorites = localStorage.getItem('favorites');
      if (savedFavorites) {
        setFavorites(JSON.parse(savedFavorites));
      }
      setIsInitialized(true);
    } catch (error) {
      console.error('Error loading favorites:', error);
      setIsInitialized(true);
    }
  }, []);

  useEffect(() => {
    if (isInitialized) {
      try {
        localStorage.setItem('favorites', JSON.stringify(favorites));
      } catch (error) {
        console.error('Error saving favorites:', error);
      }
    }
  }, [favorites, isInitialized]);

  const addFavorite = (recipeId: string) => {
    setFavorites((prev) => [...prev, recipeId]);
  };

  const removeFavorite = (recipeId: string) => {
    setFavorites((prev) => prev.filter((id) => id !== recipeId));
  };

  const isFavorite = (recipeId: string) => {
    return favorites.includes(recipeId);
  };

  if (!isInitialized) {
    return null;
  }

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
} 