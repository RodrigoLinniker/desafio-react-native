import React from "react";
import { Text, Image, TouchableOpacity, View } from "react-native";
import { Article } from "../services/newService";
import { formatDate } from "../utils/formatDate";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFavorites } from "../hooks/useFavorites";
import { useRouter } from "expo-router";

interface Props {
  item: Article;
}

export function NewsItem({ item }: Props) {
  const router = useRouter();
  const { toggleFavorite, isFavorite } = useFavorites();

  return (
    <View className="mb-4">
      <TouchableOpacity
        onPress={() => toggleFavorite(item)}
        className="absolute w-10 h-10 items-center justify-center right-0 top-0 z-10"
        onPressIn={(e) => e.stopPropagation()}
      >
        <FontAwesome
          name={isFavorite(item) ? "star" : "star-o"}
          size={24}
          color={isFavorite(item) ? "yellow" : "white"}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          router.push({
            pathname: "/details",
            params: { news: JSON.stringify(item) },
          })
        }
      >
        {item.image && (
          <Image
            source={{ uri: item.image }}
            className="w-full h-44 rounded-lg mb-2"
          />
        )}
        <View className="flex-row justify-between items-center">
          <View>
            <Text className="text-lg text-white font-bold">{item.title}</Text>
            <Text className="text-gray-500">{item.source?.name}</Text>
            <Text className="text-xs text-gray-400">
              {formatDate(item.publishedAt)}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
