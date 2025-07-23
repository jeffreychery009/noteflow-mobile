import { View } from "react-native";

import { ThemedText } from "@/components/ThemedText";

export default function HomeScreen() {
  return (
    <View className="flex-1 justify-center items-center">
      <ThemedText type="title">Welcome Jeffrey</ThemedText>
    </View>
  );
}
