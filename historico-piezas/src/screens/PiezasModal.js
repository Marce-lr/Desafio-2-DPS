import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";

export default function ModalEjemplo() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.openButton}
      >
        <Text style={styles.buttonText}>Mostrar Modal</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>¡Hola desde el Modal!</Text>
            <Text style={styles.modalText}>
              Este es un ejemplo intermedio de un modal.
            </Text>

            <View style={styles.modalButtons}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.buttonText}>Cerrar</Text>
              </Pressable>

              <Pressable
                style={[styles.button, styles.buttonConfirm]}
                onPress={() => {
                  console.log("Confirmado!");
                  setModalVisible(false);
                }}
              >
                <Text style={styles.buttonText}>Confirmar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#eef1f5",
    },
    openButton: {
      backgroundColor: "#4CAF50",
      paddingVertical: 12,
      paddingHorizontal: 25,
      borderRadius: 8,
    },
    buttonText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "600",
    },
    modalOverlay: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0,0,0,0.5)",
    },
    modalView: {
      width: "80%",
      backgroundColor: "white",
      borderRadius: 10,
      padding: 20,
      alignItems: "center",
      elevation: 5,
    },
    modalTitle: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 10,
    },
    modalText: {
      fontSize: 16,
      textAlign: "center",
      marginBottom: 20,
    },
    modalButtons: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
      gap: 10,
    },
    button: {
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    buttonClose: {
      backgroundColor: "#D32F2F",
    },
    buttonConfirm: {
      backgroundColor: "#4CAF50",
    },
  });
  