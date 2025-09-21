import api from "./api";

export interface Article {
  title: string;
  description?: string;
  content?: string;
  image?: string;
  publishedAt: string;
  source: { name: string };
  url: string;
}

export interface NewsResponse {
  articles: Article[];
  totalArticles: number;
}

export async function newService(
  page = 1,
  keyword?: string,
  category?: string
) {
  const params: any = { page };
  if (keyword) params.q = keyword.trim().replace(/\s+/g, "+");
  if (category) params.category = category;

  const { data } = await api.get("/top-headlines", { params });
  return data;
}
