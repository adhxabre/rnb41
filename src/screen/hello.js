import { StatusBar } from "expo-status-bar";
import { Box, Center, Text } from "native-base";
import { TouchableOpacity } from "react-native";

export default function Hello({ navigation }) {
    return (
        <Box bg="primary.400" flex={1} alignItems="center" justifyContent="center">
            <StatusBar />
            <Text fontFamily="body" fontWeight={500} fontSize={50}>Hello world!</Text>

            <TouchableOpacity
                onPress={() => navigation.navigate("Incdec")}
                style={{
                    backgroundColor: "#487eb0",
                    height: 40,
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 10,
                    margin: 20,
                }}
            >
                <Text>Screen Increment and Decrement</Text>
            </TouchableOpacity>
        </Box>
    )
}