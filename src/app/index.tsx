import { Pressable, Text, View } from "react-native";

export default function App() {
  return (
    <View className="p-5">
      <View>
        <View>
          <Pressable className="bg-yellow-500 transition-colors active:bg-yellow-600 h- rounded-lg text-center">
            <Text className="font-semibold text-xl text-center">RANKING DA SEMANA</Text>
          </Pressable>
        </View>
        <View className="flex-row py-4 justify-between px-3 flex-grow-0">
          <Pressable className="bg-yellow-500 transition-colors active:bg-yellow-600 h- p-5 rounded-lg">
            <Text className="font-semibold text-xl">CRIAR PARTIDA</Text>
          </Pressable>
          <Pressable className="bg-yellow-500 transition-colors active:bg-yellow-600 p-5 rounded-lg">
            <Text className="font-semibold text-xl">ENTRAR</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
