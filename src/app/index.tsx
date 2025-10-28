import { HomeHeader } from "@/components/HomeHeader";
import { Target } from "@/components/Target";
import { View } from "react-native";

const summary = {
  total: "R$ 19.600,00",
  input: { label: "Entradas", value: "R$ 6,184.90" },
  output: { label: "Saídas", value: "R$ 13,415,10" },
};

const targets = [
  {
    name: "Apartamento",
    current: "R$ 9.000,00",
    percentage: "45%",
    target: "R$ 20.000,00",
  },
  {
    name: "Viagem",
    current: "R$ 10.000,00",
    percentage: "50%",
    target: "R$ 20.000,00",
  },
];

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <HomeHeader data={summary} />

      <Target data={targets[0]} />
    </View>
  );
}
