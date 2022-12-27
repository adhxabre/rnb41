import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";

import { useTheme } from "native-base";

import { Form, Hello, Incdec } from "./src/screen"

const Stack = createStackNavigator()

export default function Container() {
    const theme = useTheme()

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOption={{
                    headerMode: "screen",
                    headerTintColor: "white",
                    headerStyle: { backgroundColor: theme.colors.primary["300"] }
                }}
            >
                <Stack.Screen
                    name="Home"
                    component={Hello}
                    options={{
                        title: "Hello screen"
                    }}
                />
                <Stack.Screen
                    name="Incdec"
                    component={Incdec}
                    options={{
                        title: "Increment Decrement"
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}