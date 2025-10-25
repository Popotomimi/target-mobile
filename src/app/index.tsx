import { HomeHeader } from "@/components/HomeHeader";
import { View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <HomeHeader data={{ total: "R$ 19.600,00" }} />
    </View>
  );
}
