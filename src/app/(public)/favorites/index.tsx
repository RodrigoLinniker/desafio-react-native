import { View, FlatList, Text, TouchableOpacity } from "react-native";
import { NewsItem } from "../../../components/NewItems";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useRouter } from "expo-router";
import useFavoritesController from "./useFavoritesController";

export default function Favorites() {
  const { favorites } = useFavoritesController();
  const router = useRouter();

  return (
    <View className="flex-1 bg-stroke">
      <View className="flex-row items-center p-4">
        <TouchableOpacity onPress={() => router.back()} className="p-2 w-auto">
          <FontAwesome name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {favorites.length > 0 ? (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.url}
          renderItem={({ item }) => <NewsItem item={item} />}
          contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <View className="flex-1 justify-center items-center px-4">
          <Text className="text-white text-lg text-center">
            Nenhum favorito salvo
          </Text>
        </View>
      )}
    </View>
  );
}
