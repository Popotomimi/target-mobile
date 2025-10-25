import { LinearGradient } from "expo-linear-gradient";

import { styles } from "./styles";

import { colors } from "@/theme";
import { Text, View } from "react-native";
import { Separator } from "../Separator";

export type HomeHeaderProps = {
  total: string;
};

type Props = {
  data: HomeHeaderProps;
};

export function HomeHeader({ data }: Props) {
  return (
    <LinearGradient
      colors={[colors.blue[500], colors.blue[800]]}
      style={styles.container}>
      <View>
        <Text style={styles.label}>Total que você possui</Text>
        <Text style={styles.total}>{data.total}</Text>
      </View>

      <Separator color={colors.blue[400]} />
    </LinearGradient>
  );
}
