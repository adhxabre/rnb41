import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, Pressable } from "react-native";

import List from "../components/list";

export default function Props() {
  const [data, setData] = React.useState(1);

  return (
    <View>
      <List className="sobrut" text="Majnun" />
      <List text="Tawaqal" />
      <List text="Soburun" />
    </View>
  );
}
