import { Pressable, Text, View } from "react-native";
import { useNavigation } from "expo-router";

export default function App() {
  return (
    <View className="flex-row py-4 gap-7 px-3 flex-grow-0">
      <Pressable className="bg-yellow-500  transition-colors active:bg-yellow-600 h- p-5 rounded-lg">
        <Text className="font-semibold text-xl">CRIAR PARTIDA</Text>
      </Pressable>
      <Pressable className="bg-yellow-500  transition-colors active:bg-yellow-600 h- p-5 rounded-lg">
        <Text className="font-semibold text-xl">CRIAR PARTIDA</Text>
      </Pressable>
    </View>
  );
}
