import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import State from "./src/screen/state";

export default function App() {
  return (
    <View style={{ marginTop: "auto", marginBottom: "auto" }}>
      <StatusBar />
      <State />
    </View>
  );
}
