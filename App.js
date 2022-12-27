import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import Map from "./src/screen/map";

export default function App() {
  return (
    <View>
      <StatusBar />
      <Map />
    </View>
  );
}
