import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import EmbedExpression from "./src/screen/embedExpression";

export default function App() {
  return (
    <View style={{ marginTop: "auto", marginBottom: "auto" }}>
      <StatusBar />
      <EmbedExpression />
    </View>
  );
}
