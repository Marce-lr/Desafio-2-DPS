import React, { useState } from "react";
import { View, FlatList, Button, Modal, Text } from "react-native";
import PieceItem from "../components/PieceItem";

export default function PiezasScreen() {
  const [piezas, setPiezas] = useState([
    {
      id: "1",
      tipo: "Bujía",
      marca: "Bosch",
      serie: "5015523",
      precio: "$25",
      fecha: "2023-09-20",
    },
  ]);

  const [piezaSeleccionada, setPiezaSeleccionada] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const mostrarDetalles = (pieza) => {
    setPiezaSeleccionada(pieza);
    setModalVisible(true);
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={piezas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PieceItem pieza={item} onPress={() => mostrarDetalles(item)} />
        )}
      />

      {/* Modal de detalles */}
      <Modal visible={modalVisible} animationType="slide">
        <View style={{ padding: 20 }}>
          <Text>Tipo: {piezaSeleccionada?.tipo}</Text>
          <Text>Marca: {piezaSeleccionada?.marca}</Text>
          <Text>Serie: {piezaSeleccionada?.serie}</Text>
          <Text>Precio: {piezaSeleccionada?.precio}</Text>
          <Text>Fecha: {piezaSeleccionada?.fecha}</Text>
          <Button title="Cerrar" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
}
