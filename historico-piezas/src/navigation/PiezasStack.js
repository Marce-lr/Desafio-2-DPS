import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PiezasScreen from "../screens/PiezasScreen";

const Stack = createStackNavigator();

export default function PiezasStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="piezas"
        component={PiezasScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
