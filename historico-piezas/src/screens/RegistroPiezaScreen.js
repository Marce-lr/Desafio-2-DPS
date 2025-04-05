import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from "react-native";
import { Calendar } from "react-native-calendars";
import Icon from "react-native-vector-icons/FontAwesome";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function RegistroPiezaScreen(props) {
  const [pieza, setPieza] = useState("");
  const [marca, setMarca] = useState("");
  const [numeroSerie, setNumeroSerie] = useState("");
  const [fechaCambio, setFechaCambio] = useState(new Date().toDateString());
  const [showCalendar, setShowCalendar] = useState(false);

  const handleGuardar = async () => {
    const newPieza = { pieza, marca, numeroSerie, fechaCambio };

    // Obtener las piezas almacenadas previamente
    const piezasData = await AsyncStorage.getItem("piezas");
    const piezas = piezasData ? JSON.parse(piezasData) : [];

    // Agregar la nueva pieza a la lista
    piezas.push(newPieza);

    // Guardar nuevamente la lista en AsyncStorage
    await AsyncStorage.setItem("piezas", JSON.stringify(piezas));

    console.log("Pieza guardada:", newPieza);

    // Limpiar los campos
    setPieza("");
    setMarca("");
    setNumeroSerie("");
    setFechaCambio(new Date().toDateString());

    // Volver a la pantalla anterior y actualizar automáticamente
    props.navigation.navigate("piezas"); // Asegúrate de que la pantalla se recargue
  };

  const handleCancelar = () => {
    props.navigation.goBack();
  };

  const onDayPress = (day) => {
    setFechaCambio(day.dateString);
    setShowCalendar(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro de piezas</Text>

      <Text>Pieza</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese nombre de la pieza"
        value={pieza}
        onChangeText={setPieza}
      />

      <Text>Marca</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese marca"
        value={marca}
        onChangeText={setMarca}
      />

      <Text>Número de serie</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese número de serie"
        value={numeroSerie}
        onChangeText={setNumeroSerie}
      />

      <Text>Fecha de cambio</Text>
      <View style={styles.dateContainer}>
        <TextInput
          style={[styles.input, styles.dateInput]}
          placeholder="Seleccione la fecha"
          value={fechaCambio}
          editable={false}
        />
        <TouchableOpacity
          onPress={() => setShowCalendar(true)}
          style={styles.iconContainer}
        >
          <Icon name="calendar" size={20} color="black" />
        </TouchableOpacity>
      </View>

      {/* MODAL DEL CALENDARIO */}
      <Modal visible={showCalendar} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Seleccione una fecha</Text>

            <Calendar
              onDayPress={onDayPress}
              markedDates={{
                [fechaCambio]: { selected: true, selectedColor: "blue" },
              }}
            />

            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setShowCalendar(false)}
            >
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonGuardar} onPress={handleGuardar}>
          <Text style={styles.buttonText}>Guardar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonCancelar}
          onPress={handleCancelar}
        >
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#f4f4f9",
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  dateInput: {
    flex: 1,
    paddingRight: 35,
  },
  iconContainer: {
    position: "absolute",
    right: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: "#D32F2F",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  closeButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  },
  buttonGuardar: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonCancelar: {
    backgroundColor: "#D32F2F",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "600",
    textAlign: "center",
  },
});