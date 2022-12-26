import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { View, Text } from "react-native";

export default function EmbedExpression() {
  const [state, setState] = React.useState("test");

  React.useEffect(() => {
    return setState("Joko");
  }, [state]);

  function getMajor() {
    return "Fullstack";
  }

  const companyName = "Dumbways.ID";

  return (
    <View>
      <Text>{state}</Text>
      <Text>
        Welcome to {companyName} class {getMajor()}
      </Text>
    </View>
  );
}
