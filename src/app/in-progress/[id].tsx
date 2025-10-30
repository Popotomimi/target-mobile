import { View } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { PageHeader } from "@/components/PageHeader";
import { Progress } from "@/components/Progress";
import { List } from "@/components/List";
import { Transaction, TransactionProps } from "@/components/Transaction";

import { TransactionTypes } from "@/utils/TransactionTypes";
import { Button } from "@/components/Button";

const details = {
  current: "R$ 500,00",
  target: "R$ 1000,00",
  percentage: 50,
};

const transactions: TransactionProps[] = [
  {
    id: "1",
    value: "R$ 300,00",
    date: "29/10/2025",
    description: "CDI de 110% no banco XPTO",
    type: TransactionTypes.Input,
  },
  {
    id: "2",
    value: "R$ 500,00",
    date: "29/10/2025",
    type: TransactionTypes.Output,
  },
];

export default function InProgress() {
  const params = useLocalSearchParams<{ id: string }>();

  return (
    <View style={{ flex: 1, padding: 24, gap: 32 }}>
      <PageHeader
        title="Apartamento"
        rightButton={{
          icon: "edit",
          onPress: () => {},
        }}
      />

      <Progress data={details} />

      <List
        title="Transações"
        data={transactions}
        renderItem={({ item }) => (
          <Transaction data={item} onRemove={() => {}} />
        )}
        emptyMessage="Nenhuma transação. Toque em nova transação para guardar seu primeiro dinheiro aqui."
      />

      <Button
        title="Nova transação"
        onPress={() => router.navigate(`/transaction/${params.id}`)}
      />
    </View>
  );
}
