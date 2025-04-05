import React from "react";
import PiezasStack from "../navigation/PiezasStack";
import RegistroPiezaStack from "../navigation/RegistroPiezaStack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, // Oculta los encabezados en las pantallas
        tabBarStyle: {
          backgroundColor: "#fff", // Fondo de la barra de pestañas
          borderTopWidth: 1,
          borderTopColor: "#ddd", // Separador sutil arriba
          height: 60, // Ajusta la altura
        },
        tabBarActiveTintColor: "#4CAF50", // Color del ícono cuando está activo
        tabBarInactiveTintColor: "#777", // Color cuando está inactivo
      }}
    >
      <Tab.Screen
        name="piezas"
        component={PiezasStack}
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Icon name="archive" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="registroPieza"
        component={RegistroPiezaStack}
        options={{
          title: "Registrar",
          tabBarIcon: ({ color, size }) => (
            <Icon name="plus-square" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
