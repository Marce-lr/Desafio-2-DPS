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
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 1,
          borderTopColor: "#ddd",
          height: 60,
        },
        tabBarActiveTintColor: "#4CAF50",
        tabBarInactiveTintColor: "#777",
      }}
    >
      <Tab.Screen
        name="piezas"
        component={PiezasStack}
        options={{
          title: "Histórico de Piezas",
          headerShown: true,
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