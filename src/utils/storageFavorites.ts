import AsyncStorage from "@react-native-async-storage/async-storage";
import { Article } from "../services/newService";

const FAVORITES_KEY = "@app_favorites";

export async function getFavorites(): Promise<Article[]> {
  const json = await AsyncStorage.getItem(FAVORITES_KEY);
  return json ? (JSON.parse(json) as Article[]) : [];
}

export async function saveFavorite(article: Article) {
  const favorites = await getFavorites();
  const exists = favorites.some((fav) => fav.url === article.url);
  if (!exists) {
    const updated = [...favorites, article];
    await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
  }
}

export async function removeFavorite(url: string) {
  const favorites = await getFavorites();
  const updated = favorites.filter((fav) => fav.url !== url);
  await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
}
