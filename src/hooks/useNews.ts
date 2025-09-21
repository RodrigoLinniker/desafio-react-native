import { useInfiniteQuery } from "@tanstack/react-query";
import { newService } from "../services/newService";
import { saveNewsToStorage, getNewsFromStorage } from "../utils/storageNews";

const PAGE_SIZE = 10;

export function useNews(keyword?: string, category?: string) {
  return useInfiniteQuery({
    queryKey: ["news", keyword || "", category || ""],
    queryFn: async ({ pageParam = 1 }) => {
      try {
        const data = await newService(pageParam, keyword, category);

        if (pageParam === 1) {
          await saveNewsToStorage(data.articles);
        }

        return data;
      } catch (err) {
        const cached = await getNewsFromStorage();
        return {
          articles: cached,
          totalArticles: cached.length,
        };
      }
    },
    getNextPageParam: (lastPage, allPages) => {
      const maxPages = Math.ceil(lastPage.totalArticles / PAGE_SIZE);
      return allPages.length < maxPages ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
  });
}
