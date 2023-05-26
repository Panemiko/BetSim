import { Slot } from "expo-router";
import { StatusBar, Text, View } from "react-native";

export default function AppLayout() {
  return (
    <View className="bg-zinc-900 h-screen py-12">
      <Text className="text-4xl text-center text-zinc-500 font-bold tracking-widest">BetSim</Text>
      <Slot />
      <StatusBar barStyle={"light-content"} />
    </View>
  );
}
