import React from "react";
import PiezasStack from "../navigation/PiezasStack";
import RegistroPiezaStack from "../navigation/RegistroPiezaStack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="piezas"
        component={PiezasStack}
        options={{
          title: "Histórico de Piezas",
        }}
      />
      <Tab.Screen
        name="registroPieza"
        component={RegistroPiezaStack}
        options={{
          title: "Registro de Pieza",
        }}
      />
    </Tab.Navigator>
  );
}
