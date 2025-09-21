import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Article } from "../services/newService";
import {
  getFavorites,
  removeFavorite,
  saveFavorite,
} from "../utils/storageFavorites";

export function useFavorites() {
  const queryClient = useQueryClient();

  const { data: favorites = [], refetch } = useQuery<Article[], Error>({
    queryKey: ["favorites"],
    queryFn: getFavorites,
  });

  const addFavoriteMutation = useMutation<void, Error, Article>({
    mutationFn: (article) => saveFavorite(article),
    onMutate: async (article) => {
      queryClient.setQueryData<Article[]>(["favorites"], (old = []) => [
        ...old,
        article,
      ]);
    },
  });

  const removeFavoriteMutation = useMutation<void, Error, string>({
    mutationFn: (url) => removeFavorite(url),
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

  return { favorites, toggleFavorite, isFavorite, refetch };
}
