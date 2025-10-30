import { View } from "react-native";
import { PageHeader } from "@/components/PageHeader";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { CurrencyInput } from "@/components/CurrencyInput";

export default function Target() {
  return (
    <View style={{ flex: 1, padding: 24 }}>
      <PageHeader
        title="Meta"
        subtitle="Economize para alcançar sua meta financeira."
      />
      <View style={{ marginTop: 32, padding: 24 }}>
        <Input
          label="Nome da meta"
          placeholder="Ex: Entrada para apartamento, Viagem para praia"
        />

        <CurrencyInput label="Valor Alvo (R$)" value={0} />

        <Button title="Salvar" />
      </View>
    </View>
  );
}
