import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, Pressable } from "react-native";

export default function List(props) {
  return (
    <View>
      <Text>{props.text}</Text>
    </View>
  );
}
