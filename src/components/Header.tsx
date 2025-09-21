import { Text, View, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export function Header() {
  const router = useRouter();

  return (
    <View className="h-14 bg-stroke w-full flex flex-row items-center justify-between px-4 border-b border-gray-100/10">
      <Text className="text-brand font-bold text-lg">DESAFIO REACT NEWS</Text>

      <TouchableOpacity onPress={() => router.push("/favorites")}>
        <Text className="text-white font-bold text-lg">
          Favoritos
          <FontAwesome name={"star"} size={16} color={"yellow"} />
        </Text>
      </TouchableOpacity>
    </View>
  );
}
