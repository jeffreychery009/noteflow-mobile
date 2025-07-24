import { SafeAreaView, View } from "react-native";

import { ThemedText } from "@/components/ThemedText";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 items-center justify-center bg-gray-100">
        <ThemedText type="title">Welcome Jeffrey</ThemedText>
      </View>
    </SafeAreaView>
  );
}
