import { useState } from "react";
import { useNews } from "../../hooks/useNews";
import { Article } from "../../services/newService";

export default function useHomeController() {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState<string>("");

  const categoriesMap: Record<string, string> = {
    Geral: "general",
    Tecnologia: "technology",
    Negócios: "business",
    Esportes: "sports",
    Saúde: "health",
  };
  const categories = Object.keys(categoriesMap);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useNews(keyword, category ? categoriesMap[category] : "");

  const articles: Article[] =
    data?.pages.flatMap((page) => page.articles) || [];

  return {
    keyword,
    category,
    setKeyword,
    setCategory,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    articles,
    categories,
  };
}
