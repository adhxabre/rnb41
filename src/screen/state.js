import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, Touchable, TouchableOpacity } from "react-native";

export default function State() {
  const [counter, setCounter] = React.useState(0);

  function Add() {
    setCounter(counter + 1);
  }

  function Less() {
    if (counter <= 0) {
      return;
    }
    setCounter(counter - 1);
  }

  return (
    <View>
      <Text>{counter}</Text>

      <TouchableOpacity onPress={Add}>
        <Text>Add</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={Less}>
        <Text>Less</Text>
      </TouchableOpacity>
    </View>
  );
}
