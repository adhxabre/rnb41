import React from "react";
import { StatusBar } from "expo-status-bar"
import { Box, Text } from "native-base";
import { TouchableOpacity } from "react-native";

export default function Incdec() {
    const [data, setData] = React.useState(0);

    function Add() {
        return setData(data + 1);
    };

    function Less() {
        if (data === 0) return;

        return setData(data - 1);
    };

    return (
        <Box
            bg="muted.800"
            flex={1}
            alignItems="center"
            justifyContent="center"
            w="100%"
            p={10}
        >
            <StatusBar />

            <Text textAlign="center" fontSize={20}>
                If you click add, it will increase. And so does less, it will decrease it.
            </Text>

            <Text
                fontSize={50}
                style={{ color: "#487eb0" }}
            >
                {data}
            </Text>

            <TouchableOpacity
                onPress={Add}
                style={{
                    backgroundColor: "#487eb0",
                    height: 40,
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 10,
                    margin: 10
                }}
            >
                <Text>
                    Add
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={Less}
                style={{
                    backgroundColor: "#487eb0",
                    height: 40,
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 10,
                    margin: 10
                }}
            >
                <Text>
                    Less
                </Text>
            </TouchableOpacity>
        </Box>
    );
};