import { Flex, Img, Text, HStack, Spacer } from '@chakra-ui/react';

export default function Navbar() {
    return (
        <Flex>
            <Img w={50} src={'/logo_purple.png'} />
            <Spacer/>
            <HStack spacing={3}>
                <Text><a>Download CV</a></Text>
                <Text fontWeight={"bold"} py={2} px={5} color={"purple"} border={"2px"} borderRadius={50} borderColor={"purple"}>
                    <a href={"mailto:business@gasimzade.az"}>Contact</a>
                </Text>
            </HStack>
        </Flex>
    )
}