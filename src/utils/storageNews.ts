import AsyncStorage from "@react-native-async-storage/async-storage";
import { Article } from "../services/newService";

const NEWS_KEY = "@app_news";

export async function saveNewsToStorage(articles: Article[]) {
  await AsyncStorage.setItem(NEWS_KEY, JSON.stringify(articles));
}

export async function getNewsFromStorage(): Promise<Article[]> {
  const json = await AsyncStorage.getItem(NEWS_KEY);
  return json ? (JSON.parse(json) as Article[]) : [];
}
