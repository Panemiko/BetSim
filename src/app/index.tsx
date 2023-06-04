import { Button, XGroup, XStack, YGroup, YStack } from "tamagui";
import { Flag, QrCode, Gamepad } from "@tamagui/lucide-icons";

export default function App() {
  return (
    <YGroup paddingHorizontal="$4" paddingVertical="$8">
      <YGroup.Item>
        <Button
          theme="yellow"
          fontSize={"$8"}
          size={"$7"}
          fontWeight={"medium"}
        >
          LEADERBOARD
        </Button>
      </YGroup.Item>
      <YGroup.Item>
        <XGroup>
          <XGroup.Item>
            <Button
              theme="blue"
              width={"50%"}
              scaleIcon={2}
              aspectRatio={1}
              size="$9"
              icon={Gamepad}
            ></Button>
          </XGroup.Item>
          <XGroup.Item>
            <Button
              theme="purple"
              size="$9"
              scaleIcon={2}
              aspectRatio={1}
              width={"50%"}
              icon={QrCode}
            ></Button>
          </XGroup.Item>
        </XGroup>
      </YGroup.Item>
    </YGroup>
  );
}
