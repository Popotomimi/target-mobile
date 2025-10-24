import { Button, Text, View } from "react-native";
import { router, useLocalSearchParams } from "expo-router";

export default function InProgress() {
  const params = useLocalSearchParams<{ id: string }>();

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text>InProgress ID: {params.id}</Text>

      <Button title="Voltar" onPress={() => router.back()} />
    </View>
  );
}
