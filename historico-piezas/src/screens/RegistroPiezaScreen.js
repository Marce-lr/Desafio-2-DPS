import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";

export default function RegistroPiezaScreen(props) {
  const [pieza, setPieza] = useState("");
  const [marca, setMarca] = useState("");
  const [numeroSerie, setNumeroSerie] = useState("");
  const [fechaCambio, setFechaCambio] = useState(new Date().toDateString());
  const [showCalendar, setShowCalendar] = useState(false);

  const handleGuardar = () => {
    console.log("Pieza guardada:", { pieza, marca, numeroSerie, fechaCambio });
    props.navigation.goBack();
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
      <TextInput
        style={styles.input}
        placeholder="Seleccione la fecha"
        value={fechaCambio}
        editable={false}
        onFocus={() => setShowCalendar(true)}
      />

      {/* Mostrar el calendario solo si es necesario */}
      {showCalendar && (
        <Calendar
          onDayPress={onDayPress}
          markedDates={{
            [fechaCambio]: { selected: true, selectedColor: "blue" },
          }}
        />
      )}

      <View style={styles.buttonContainer}>
        <Button title="Guardar" onPress={handleGuardar} />
        <Button title="Cancelar" onPress={handleCancelar} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
