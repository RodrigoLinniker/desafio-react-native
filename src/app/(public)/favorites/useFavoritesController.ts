import { useFavorites } from "../../../hooks/useFavorites";

export default function useFavoritesController() {
  const { favorites } = useFavorites();

  return {
    favorites,
  };
}
