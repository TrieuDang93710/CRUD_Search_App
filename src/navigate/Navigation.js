import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ReadScreen from "../screen/ReadScreen";
import AddScreen from "../screen/AddScreen";
import UpdateScreen from "../screen/UpdateScreen";
import SearchScreen from "../screen/SearchScreen";
import ReadProvider from "../provider/ReadProvider";
import { QuantityContext } from "../context/ContextProvider";

const Stack = createNativeStackNavigator();
export default function Navigation({}) {
  const { editting } = useContext(QuantityContext);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Read">
        <Stack.Screen name="Read" component={ReadScreen} />
        <Stack.Screen
          name={editting ? "Update" : "Add"}
          component={AddScreen}
        />
        <Stack.Screen name="Update" component={UpdateScreen} />
        <Stack.Screen name="Search" component={ReadScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
