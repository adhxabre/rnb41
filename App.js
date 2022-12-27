import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import DetailPost from "./src/screen/DetailPost";
import Posts from "./src/screen/Posts";

const Stack = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Posts" component={Posts} />
        <Stack.Screen name="DetailPost" component={DetailPost} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}