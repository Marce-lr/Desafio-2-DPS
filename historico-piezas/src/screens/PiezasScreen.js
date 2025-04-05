import React from "react";
import { View, Text, Button } from "react-native";

export default function PiezasScreen(props) {
  const { navigation } = props;
  return (
    <View>
      <Text>Pieza</Text>

      <Button
        title="Agregar pieza"
        onPress={() => navigation.navigate("registroPieza")}
      />

      <Text>No hay piezas, Agregue una</Text>
    </View>
  );
}
