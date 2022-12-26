import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function Form() {
  return (
    <View style={style.container}>
      <StatusBar />

      <Text style={style.header}>Sign In</Text>

      <Text style={style.textStyle}>Email</Text>
      <TextInput style={style.input} />

      <Text style={style.textStyle}>Password</Text>
      <TextInput style={style.input} />

      <TouchableOpacity style={style.button}>
        <Text style={style.button}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    color: "#000000",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 50,
  },
  button: {
    textAlign: "center",
    color: "#ffffff",
    height: 45,
    width: "100%",
    backgroundColor: "black",
    borderRadius: 10,
    justifyContent: "center",
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    padding: 10,
    borderColor: "black",
    color: "black",
  },
  textStyle: {
    color: "#e74c3c",
    fontSize: 16,
    fontWeigth: "bold",
    marginBottom: 5,
  },
});
