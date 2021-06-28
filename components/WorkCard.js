import React, {useState} from 'react'
import {Box, Heading, Text} from "@chakra-ui/react";
import {motion} from 'framer-motion'

export default function WorkCard({item: {image, text, link}}) {
    const [isHovering, setHovering] = useState(false);


    return (
        <a href={link} rel="noreferrer" target={"_blank"}>
            <Box onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}
                 height={300}
                 borderRadius={20}
                 border="1px"
                 borderColor="#ccc"
                 backgroundSize={"cover"}
                 backgroundPosition={"center"}
                 backgroundImage={image}
            >
                <motion.div transition={{duration: 0.2}} initial={{
                    borderRadius: 20,
                    display: "grid",
                    placeItems: "center",
                    opacity: 0,
                    height: "100%",
                    backgroundColor: "#2c1053"
                }}
                            animate={{opacity: isHovering ? 1 : 0, scale: isHovering ? 1 : 0}}>
                    <Box w={"60%"}>
                        <Heading color={"white"} textAlign={"center"} size={"md"}>
                            {text}
                        </Heading>
                        <Text _hover={{backgroundColor: "purple", transition: "200ms"}} transition="200ms" mt={3}
                              w={"fit-content"} mx={"auto"} fontWeight={"bold"} py={2} px={5} color={"white"}
                              border={"2px"}
                              borderRadius={50} borderColor={"purple"}>
                            <a href={link} rel="noreferrer" target={"_blank"}>
                                Visit Website
                            </a>
                        </Text>
                    </Box>
                </motion.div>
            </Box>
        </a>
    )
}