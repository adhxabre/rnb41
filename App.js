import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import State from "./src/screen/form";

export default function App() {
  return (
    <View>
      <StatusBar />
      <State />
    </View>
  );
}
