import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import Props from "./src/screen/props";

export default function App() {
  return (
    <View style={{ marginTop: "auto", marginBottom: "auto" }}>
      <StatusBar />
      <Props />
    </View>
  );
}
