import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, Pressable } from "react-native";

export default function Event() {
  const [data, setData] = React.useState(1);

  return (
    <View>
      <StatusBar />

      <Text>{data}</Text>

      <Pressable onPress={() => alert("Halo")}>
        <Text>Inc</Text>
      </Pressable>

      <Pressable onPress={() => setData(data--)}>
        <Text>Decc</Text>
      </Pressable>
    </View>
  );
}
