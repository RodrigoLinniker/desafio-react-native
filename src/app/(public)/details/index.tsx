import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { formatDate } from "../../../utils/formatDate";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useRouter } from "expo-router";
import useDetailController from "./useDetailController";

export default function Details() {
  const { article, openOriginal } = useDetailController();
  const router = useRouter();

  return (
    <View className="flex-1 justify-center items-center bg-stroke">
      {!article ? (
        <Text className="text-white text-lg">Notícia não encontrada</Text>
      ) : (
        <ScrollView className="p-4">
          <TouchableOpacity
            onPress={() => router.back()}
            onPressIn={(e) => e.stopPropagation()}
            className="px-4 w-auto self-start"
          >
            <FontAwesome name="arrow-left" size={24} color="white" />
          </TouchableOpacity>
          {article.image && (
            <Image
              source={{ uri: article.image }}
              className="w-full h-64 rounded-lg mt-4 mb-4"
            />
          )}
          <Text className="text-2xl text-white font-bold mb-2">
            {article.title}
          </Text>
          <Text className="text-gray-400 mb-2">{article.source?.name}</Text>
          <Text className="text-gray-500 text-sm mb-4">
            {formatDate(article.publishedAt)}
          </Text>
          <Text className="text-white">
            {article.content || article.description}
          </Text>

          {article.url && (
            <TouchableOpacity
              onPress={openOriginal}
              className="mt-4 p-3 rounded-lg bg-blue-600"
            >
              <Text className="text-white text-center font-bold">
                Ver notícia completa
              </Text>
            </TouchableOpacity>
          )}
        </ScrollView>
      )}
    </View>
  );
}
