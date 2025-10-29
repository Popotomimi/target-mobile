import { HomeHeader } from "@/components/HomeHeader";
import { Target } from "@/components/Target";
import { StatusBar, View } from "react-native";
import { List } from "@/components/List";
import { Button } from "@/components/Button";
import { router } from "expo-router";

const summary = {
  total: "R$ 19.600,00",
  input: { label: "Entradas", value: "R$ 6,184.90" },
  output: { label: "Saídas", value: "R$ 13,415,10" },
};

const targets = [
  {
    id: "321",
    name: "Apartamento",
    current: "R$ 9.000,00",
    percentage: "45%",
    target: "R$ 20.000,00",
  },
  {
    id: "123",
    name: "Viagem",
    current: "R$ 10.000,00",
    percentage: "50%",
    target: "R$ 20.000,00",
  },
  {
    id: "1235",
    name: "Carro",
    current: "R$ 10.000,00",
    percentage: "50%",
    target: "R$ 20.000,00",
  },
];

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      <HomeHeader data={summary} />

      <List
        data={targets}
        renderItem={({ item }) => (
          <Target
            data={item}
            onPress={() => router.navigate(`/in-progress/${item.id}`)}
          />
        )}
        title="Metas"
        keyExtractor={(item) => item.id}
        emptyMessage="Nenhuma meta. Clique em nova meta para criar."
        containerStyle={{ paddingHorizontal: 24 }}
      />

      <View style={{ padding: 24, paddingBottom: 32 }}>
        <Button title="Nova meta" onPress={() => router.navigate("/target")} />
      </View>
    </View>
  );
}
