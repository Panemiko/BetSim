import { Slot } from "expo-router";
import { StatusBar } from "react-native";
import { TamaguiProvider, Text, XStack, YStack } from "tamagui";
import { useFonts } from "expo-font";
import tamaguiConfig from "../../tamagui.config";

export default function AppLayout() {
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme="dark">
      <YStack backgroundColor={"$background"} fullscreen>
        <XStack
          justifyContent="center"
          paddingVertical="$8"
          alignItems="center"
        >
          <Text fontSize={"$10"} color="$yellow10">
            BET
          </Text>
          <Text fontSize={"$10"} color="$yellow11" fontWeight={"bold"}>
            SIM
          </Text>
        </XStack>
        <Slot />
        <StatusBar barStyle={"light-content"} />
      </YStack>
    </TamaguiProvider>
  );
}
