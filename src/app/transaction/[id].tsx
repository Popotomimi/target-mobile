import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function Transaction() {
  const params = useLocalSearchParams<{ id: string }>();

  return (
    <View>
      <Text>ID: {params.id}</Text>
    </View>
  );
}
