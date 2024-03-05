import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import ContextProvider from "./src/context/ContextProvider";
import Navigation from "./src/navigate/Navigation";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ContextProvider>
      <Navigation />
    </ContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
