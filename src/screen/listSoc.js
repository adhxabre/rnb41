import React from "react";
import { Box, FlatList, Pressable, Text } from "native-base";

export default function ListSoc({ navigation }) {
    const socialMedia = ["Instagram", "Twitter", "Github", "Facebook", "LINE"];

    const HandlePress = (value) => {
        navigation.navigate("Detail Social", { value });
    };

    return (
        <Box
            safeArea
            bg="primary.400"
            flex={1}
            alignItems="center"
            justifyContent="center"
            p={10}
        >
            <FlatList
                data={socialMedia}
                renderItem={({ item }) => (
                    <Pressable onPress={() => HandlePress(item)}>
                        <Text
                            fontFamily="body"
                            fontWeight={400}
                            fontSize={50}
                            margin={5}
                        >
                            {item}
                        </Text>
                    </Pressable>
                )}
                keyExtractor={(item) => item}
            />   
        </Box>
    )
}