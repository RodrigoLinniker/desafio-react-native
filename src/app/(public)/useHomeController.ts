import { useState, useEffect } from "react";
import { useNews } from "../../hooks/useNews";
import { Article } from "../../services/newService";

export default function useHomeController() {
  const [searchInput, setSearchInput] = useState("");
  const [keyword, setKeyword] = useState("");        
  const [category, setCategory] = useState<string>("");
  
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      setKeyword(searchInput);
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [searchInput]);

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
    searchInput,
    setSearchInput,
    category,
    setCategory,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    articles,
    categories,
  };
}

