import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  View,
  Text,
} from "react-native";

export default function Map() {
  const cars = ["BWM", "Mercedes-Benz", "Bugatti", "Ferarri", "Icikiwir"]

  return (
    <View>
      <StatusBar />
      <Text>Map cuy!</Text>
      {
        cars.map((car, i) => (
          <Text key={i}>{car}</Text>
        ))
      }
    </View>
  );
}
