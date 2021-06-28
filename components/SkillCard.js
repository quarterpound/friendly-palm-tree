import React from 'react';
import {Box, Center, Img, Stack, Text} from "@chakra-ui/react";

export default function SkillCard({skill: {icon, skillName, text, sep1, sep2, sep1list, sep2list}}) {
    return (
        <Box padding={5}>
            <Box mx={"auto"}>
                <Img mx={"auto"} w={20} src={icon} />
                <Text textAlign={"center"} my={3} fontWeight={"bold"} fontSize={23}>{skillName}</Text>
                <Box w={"60%"} mx={"auto"}>
                    <Text textAlign={"center"}>{text}</Text>
                </Box>
                <Text my={3} fontSize={18} textAlign={"center"} fontWeight={"bold"} color={"purple"}>{sep1}:</Text>
                <Text fontWeight={300} textAlign={'center'} fontSize={18}>{sep1list.join(", ")}</Text>
                <Text my={3} fontSize={18} textAlign={"center"} fontWeight={"bold"} color={"purple"}>{sep2}:</Text>
                <Center>
                    <Stack fontWeight={300} textAlign={'center'} fontSize={18}>
                        {
                            (() => {
                                return sep2list.map((k, i) => <Text key={i}>{k}</Text>)
                            })()
                        }
                    </Stack>
                </Center>
            </Box>
        </Box>
    )
}