import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function PiezasScreen(props) {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Piezas</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("registroPieza")}
      >
        <Text style={styles.buttonText}>+ Agregar pieza</Text>
      </TouchableOpacity>

      <Text style={styles.message}>
        No hay piezas registradas. Agrega una para comenzar.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f0f4f8",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "600",
    textAlign: "center",
  },
  message: {
    fontSize: 16,
    color: "#666",
    marginTop: 20,
    textAlign: "center",
    paddingHorizontal: 40,
  },
});
