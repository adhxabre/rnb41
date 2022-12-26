import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Content from "./src/components/content";
import Header from "./src/components/header";

export default function App() {
  return (
    <View style={{ marginTop: "auto", marginBottom: "auto" }}>
      <StatusBar />
      <Header />
      <Content />
    </View>
  );
}
