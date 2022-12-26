import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import Event from "./src/screen/event";

export default function App() {
  return (
    <View style={{ marginTop: "auto", marginBottom: "auto" }}>
      <StatusBar />
      <Event />
    </View>
  );
}
