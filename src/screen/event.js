import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function Event() {
  const [data, setData] = React.useState(1);

  return (
    <View>
      <StatusBar />

      <Text>{data}</Text>

      <TouchableOpacity onPress={() => setData(data++)}>
        <Text>Inc</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setData(data--)}>
        <Text>Decc</Text>
      </TouchableOpacity>
    </View>
  );
}
