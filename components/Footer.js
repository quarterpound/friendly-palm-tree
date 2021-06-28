import React from 'react';
import {Box, HStack, Center, Grid, Stack, Img, Text} from "@chakra-ui/react";
import {FiMail} from "react-icons/fi";
import {FaLinkedinIn} from "react-icons/fa";


export default function Footer() {
    return (
        <Box backgroundColor={"purple"} py={20}>
            <Grid placeItems={"center"}>
                <Stack spacing={10}>
                    <Img w={55} mx={"auto"} src={"/logo_white.png"}/>
                    <Center>
                        <HStack>
                            <Box _hover={{
                                borderColor: "white",
                                backgroundColor: "white",
                                transition: "200ms",
                                color: "purple"
                            }} transition="200ms" border={"1px"} color={"white"} borderColor={"#ccc"}
                                 borderRadius={"50%"} p={3}>
                                <a href={"mailto:business@gasimzade.az"}><FiMail size={24}/></a>
                            </Box>
                            <Box _hover={{
                                borderColor: "white",
                                backgroundColor: "white",
                                transition: "200ms",
                                color: "purple"
                            }} transition="200ms" border={"1px"} color={"white"} borderColor={"#ccc"}
                                 borderRadius={"50%"} p={3}>
                                <a href={"https://www.linkedin.com/in/ali-gasimzade-9815a117a/"} target={"_blank"}><FaLinkedinIn size={24}/></a>
                            </Box>
                        </HStack>
                    </Center>
                    <Text color={"#ccc"}>Handcrafted by me © gasimzade.az</Text>
                </Stack>
            </Grid>
        </Box>
    )
}