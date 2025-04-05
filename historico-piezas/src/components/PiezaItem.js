import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function PieceItem({ pieza, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.item}>
      <Text>{pieza.tipo}</Text>
      <Text>{pieza.fecha}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#eee",
    borderRadius: 8,
  },
});
