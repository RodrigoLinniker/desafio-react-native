import React, { createContext, useContext, ReactNode } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Article } from "../services/newService";
import {
  getFavorites,
  saveFavorite,
  removeFavorite,
} from "../utils/storageFavorites";

interface FavoritesContextType {
  favorites: Article[];
  toggleFavorite: (article: Article) => void;
  isFavorite: (article: Article) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType>(
  {} as FavoritesContextType
);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const queryClient = useQueryClient();

  const { data: favorites = [] } = useQuery<Article[], Error>({
    queryKey: ["favorites"],
    queryFn: getFavorites,
  });

  const addFavoriteMutation = useMutation<void, Error, Article>({
    mutationFn: saveFavorite,
    onMutate: async (article) => {
      queryClient.setQueryData<Article[]>(["favorites"], (old = []) => [
        ...old,
        article,
      ]);
    },
  });

  const removeFavoriteMutation = useMutation<void, Error, string>({
    mutationFn: removeFavorite,
    onMutate: async (url) => {
      queryClient.setQueryData<Article[]>(["favorites"], (old = []) =>
        old.filter((f) => f.url !== url)
      );
    },
  });

  const toggleFavorite = (article: Article) => {
    if (favorites.some((f) => f.url === article.url)) {
      removeFavoriteMutation.mutate(article.url);
    } else {
      addFavoriteMutation.mutate(article);
    }
  };

  const isFavorite = (article: Article) =>
    favorites.some((f) => f.url === article.url);

  return (
    <FavoritesContext.Provider
      value={{ favorites, toggleFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}
