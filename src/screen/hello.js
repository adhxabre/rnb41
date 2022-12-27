import { StatusBar } from "expo-status-bar";
import { Box, Text } from "native-base";

export default function Hello() {
    return (
        <Box bg="primary.400" flex={1} alignItems="center" justifyContent="center">
            <StatusBar />
            <Text fontFamily="body" fontWeight={500} fontSize={50}>Hello world!</Text>
        </Box>
    )
}