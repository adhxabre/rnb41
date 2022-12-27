import { FontAwesome } from "@expo/vector-icons";

import { Button, Box, FormControl, Heading, HStack, Icon, IconButton, Input, Link, Text, VStack } from "native-base";

export default function Form() {
    return (
        <Box safeArea bg="white" flex={1} p={10} w="100%" mx="auto" justifyContent="center">
            <Heading size="lg" color="muted.600">
                Welcome
            </Heading>
            <Heading size="xs" color="muted.400">
                Sign in to continue!
            </Heading>

            <VStack space={2} mt={5}>
                <FormControl>
                    <FormControl.Label _text={{ color: "muted.700", fontSize: "sm", fontWeight: 600 }}>
                        Email/ID
                    </FormControl.Label>
                    <Input color="muted.900" />
                </FormControl>
                <FormControl>
                    <FormControl.Label _text={{ color: "muted.700", fontSize: "sm", fontWeight: 600 }}>
                        Password
                    </FormControl.Label>
                    <Input type="password" color="muted.900" />
                    <Link
                        _text={{ fontSize: "xs", fontWeight: 700, color: "primary.700" }}
                        alignSelf="flex-end"
                        mt={1}
                    >
                        Forget password?
                    </Link>
                </FormControl>
                <VStack space={2}>
                    <Button colorScheme="muted" _text={{ color: "white" }}>
                        Login
                    </Button>
                    <HStack justifyContent="center" alignItems="center">
                        <IconButton
                            variant="unstyled"
                            icon={<Icon as={FontAwesome} name="facebook-square" color="muted.600" size={6} />}
                        />
                        <IconButton
                            variant="unstyled"
                            icon={<Icon as={FontAwesome} name="google" color="muted.600" size={6} />}
                        />
                        <IconButton
                            variant="unstyled"
                            icon={<Icon as={FontAwesome} name="github" color="muted.600" size={6} />}
                        />
                        <IconButton
                            variant="unstyled"
                            icon={<Icon as={FontAwesome} name="gitlab" color="muted.600" size={6} />}
                        />
                        <IconButton
                            variant="unstyled"
                            icon={<Icon as={FontAwesome} name="twitter" color="muted.600" size={6} />}
                        />
                    </HStack>
                </VStack>
                <HStack justifyContent="center">
                    <Text fontSize="sm" color="muted.700" fontWeight={400}>
                        I'm a new user.{" "}
                    </Text>
                    <Link
                        _text={{ color: "muted.400", bold: true, fontSize: "sm" }}
                        href="/"
                    >
                        Sign Up!
                    </Link>
                </HStack>
            </VStack>
        </Box>
    )
} 