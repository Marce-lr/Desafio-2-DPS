import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import RegistroPiezaScreen from "../screens/RegistroPiezaScreen"; // Pantalla de registro de piezas

const Stack = createStackNavigator();

export default function RegistroPiezaStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="registroPieza"
        component={RegistroPiezaScreen}
        options={{ title: "Registro de piezas" }} // Título de la pantalla
      />
    </Stack.Navigator>
  );
}
