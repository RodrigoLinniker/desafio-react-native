import { useFavorites } from "../../../context/FavoritesContext";

export default function useFavoritesController() {
  const { favorites } = useFavorites();

  return {
    favorites,
  };
}
