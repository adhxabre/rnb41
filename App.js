import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import FlatList from "./src/screen/flatlist";

export default function App() {
  return (
    <View>
      <StatusBar />
      <FlatList />
    </View>
  );
}
