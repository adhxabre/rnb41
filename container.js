import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons"

import { useTheme } from "native-base";

import { Form, Hello, Incdec } from "./src/screen";

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function MyTab() {

    const theme = useTheme();

    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                headerMode: "screen",
                headerTintColor: "white",
                headerStyle: { backgroundColor: theme.colors.primary["300"] },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === "Home") {
                        iconName = focused ? "ios-home" : "ios-home-outline";
                    } else if (route.name === "Form") {
                        iconName = focused ? "ios-information-circle" : "ios-information-circle-outline"
                    }

                    return <Ionicons name={iconName} size={size} color={color} />
                },
                tabBarActiveTintColor: theme.colors.primary["800"],
                tabBarInactiveTintColor: "gray"
            })}
        >
            <Tab.Screen name="Home" component={Hello} />
            <Tab.Screen name="Form" component={Form} />
        </Tab.Navigator>
    )

}

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
                    component={MyTab}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Incdec"
                    component={Incdec}
                    options={{
                        title: "Increment Decrement",
                        headerMode: "screen",
                        headerTintColor: "white",
                        headerStyle: { backgroundColor: theme.colors.primary["300"] }
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}