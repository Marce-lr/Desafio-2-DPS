import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function PiezasScreen(props) {
  const { navigation } = props;
  const [piezas, setPiezas] = useState([]);

  useEffect(() => {
    const cargarPiezas = async () => {
      const piezasData = await AsyncStorage.getItem("piezas");
      if (piezasData) {
        setPiezas(JSON.parse(piezasData));
      }
    };

    cargarPiezas();

    // Añadimos un listener para recargar las piezas cada vez que la pantalla se enfoque
    const unsubscribe = navigation.addListener("focus", () => {
      cargarPiezas();
    });

    return () => unsubscribe(); // Limpiamos el listener cuando el componente se desmonta
  }, [navigation]);

  const handleEliminar = async (index) => {
    const piezasData = await AsyncStorage.getItem("piezas");
    const piezas = JSON.parse(piezasData);

    // Eliminar la pieza seleccionada
    piezas.splice(index, 1);

    // Guardar nuevamente la lista sin la pieza eliminada
    await AsyncStorage.setItem("piezas", JSON.stringify(piezas));
    setPiezas(piezas);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Piezas</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("registroPieza")}
      >
        <Text style={styles.buttonText}>+ Agregar pieza</Text>
      </TouchableOpacity>

      {piezas.length === 0 ? (
        <Text style={styles.message}>
          No hay piezas registradas. Agrega una para comenzar.
        </Text>
      ) : (
        <FlatList
          data={piezas}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.card}>
              <Text style={styles.cardText}>{item.pieza}</Text>
              <Text style={styles.cardText}>{item.fechaCambio}</Text>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => handleEliminar(index)}
              >
                <Text style={styles.deleteButtonText}>Eliminar</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
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
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 25,
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
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    width: "100%",
    borderColor: "#ddd",
    borderWidth: 1,
    paddingHorizontal: 30,
  },
  cardText: {
    fontSize: 16,
    color: "#333",
  },
  deleteButton: {
    backgroundColor: "#D32F2F",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    marginTop: 10,
  },
  deleteButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});