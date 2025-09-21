import { useLocalSearchParams } from "expo-router";
import { Article } from "../../../services/newService";
import { Linking } from "react-native";

export default function useDetailController() {
  const { news } = useLocalSearchParams<{ news: string }>();
  const article: Article = news ? JSON.parse(news) : null;

  const openOriginal = () => {
    if (article?.url) {
      Linking.openURL(article.url);
    }
  };

  return {
    article,
    openOriginal,
  };
}
