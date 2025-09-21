import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { Loading } from "../../components/Loading";
import { cn } from "../../utils/cn";
import useHomeController from "./useHomeController";
import { NewsItem } from "../../components/NewItems";

export default function Home() {
  const {
    keyword,
    setKeyword,
    category,
    setCategory,
    isLoading,
    articles,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    categories,
  } = useHomeController();

  return (
    <View className="flex-1 bg-stroke">
      <View className="p-4 gap-2">
        <TextInput
          placeholder="Buscar notícias..."
          placeholderTextColor="#fff"
          value={keyword}
          onChangeText={setKeyword}
          className="border border-gray-300 rounded-md px-3 py-2 mb-2 text-white"
        />

        <View className="flex-row mb-4">
          {categories.map((item) => (
            <TouchableOpacity
              key={item}
              disabled={isLoading}
              className={cn(
                "px-2 py-1 mr-2 rounded-full max-h-8 bg-gray-200",
                category === item && "bg-blue-500"
              )}
              onPress={() => setCategory(item)}
            >
              <Text
                className={cn(
                  "font-medium text-black",
                  category === item && "text-white"
                )}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {isLoading && <Loading />}

        <FlatList
          data={articles}
          keyExtractor={(item) => item.url || item.publishedAt}
          renderItem={({ item }) => <NewsItem item={item} />}
          onEndReached={() => hasNextPage && fetchNextPage()}
          onEndReachedThreshold={0.5}
          ListFooterComponent={
            isFetchingNextPage ? <ActivityIndicator className="mt-4" /> : null
          }
          removeClippedSubviews
          maxToRenderPerBatch={10}
          initialNumToRender={10}
        />
      </View>
    </View>
  );
}
