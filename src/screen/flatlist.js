import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  View,
  Text,
  FlatList as Fl
} from "react-native";

export default function FlatList() {
  return (
    <View>
      <StatusBar />
      <Text style={{fontSize: 40, marginTop: 40}}>FlatList cuy!</Text>
      
      <Fl
        data={[
          {name: "Joko"}, {name: "Budi"}, {name: "Tutik"},
        ]}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
}
