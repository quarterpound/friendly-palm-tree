import Navbar from "../components/Navbar";
import { Box, Grid, Heading, Img, Text, Stack, Center } from "@chakra-ui/react";
import SkillCard from "../components/SkillCard";
import WorkCard from "../components/WorkCard";
import React from "react";
import Footer from "../components/Footer";
import HeadComponent from "../components/HeadComponent";


const skills = [
    {
        icon: "/creative-design.svg",
        skillName: "Designer",
        text: "I value simple content structure, clean design patterns, and thoughtful interactions",
        sep1: "Things I enjoy designing",
        sep1list: [
            "UX",
            "UI",
            "Web",
            "Mobile",
            "Apps",
            "Logos",
        ],
        sep2: "Tools",
        sep2list: [
            "Figma",
            "Adobe XD",
            "Adobe Photoshop",
            "Adobe Illustrator",
        ]
    },
    {
        icon: "/coding.svg",
        skillName: "Front-end Developer",
        text: "I like to code things from scratch, and enjoy bringing ideas to life in any platform.",

        sep1: "Languages I speak",
        sep1list: [
            "React",
            "React Native",
            "Flutter",
            "HTML & CSS",
        ],
        sep2: "Tools",
        sep2list: [
            "Visual Studio Code",
            "Chakra UI",
            "Electron",
            "Bulma",
            "Github",
        ]
    },
    {
        icon: "/data-storage.svg",
        skillName: "Software Engineer",
        sep1: "More languages I speak",
        sep1list: [
            "NodeJS",
            "Golang",
            "Python",
            "Java",
            "Dart",
            "Javascript",
            "C#",
        ],
        sep2: "Tools",
        sep2list: [
            "Linux",
            "Webstorm",
            "Goland",
            "IntelliJ",
            "MongoDB",
            "PostgreSQL"
        ]
    }
]

const portolfio = [
    {
        text: "Unicons has been operating in the construction sector for more than 10 years",
        image: "/unicons.jpg",
        link: "https://unicons.az",
    },
    {
        text: "This page is to honor my childhood dream",
        image: "/rasmina.jpg",
        link: "https://rasmina.com",
    }
]


export default function Home() {
    return (
        <>
            <HeadComponent />
            <Box mt={3} mx={"auto"}>
                <Box height={"100vh"}>
                    <Box w={"95%"} mx={"auto"}>
                        <Navbar />
                    </Box>
                    <Grid height={"90vh"} w={"95%"} placeItems={"center"}>
                        <Box>
                            <Heading textAlign={"center"}>Designer, Full-stack Developer & Consultant</Heading>
                            <Heading textAlign={"center"} mt={5} size={"md"} fontWeight={"thin"}>I design and code
                                beautifully simple things, and I love what I do</Heading>
                            <Img w={200} borderRadius={100} mx={"auto"} mt={8} src={"/profile.jpg"} />
                        </Box>
                    </Grid>
                </Box>
                <Box>
                    <Img mx={"auto"} w={"70%"} src={"/hero.svg"} />
                </Box>
                <Box id={"skills"} bgColor={"purple"} h={'80vh'}>
                    <Grid height={"90%"} placeItems={"center"}>
                        <Stack spacing={3} w={"95%"}>
                            <Heading color={"white"} align={'center'}>Hi, I am Ali. Nice to meet you</Heading>
                            <Center>
                                <Text fontSize={20} w={"60%"} textAlign={'center'} color={"white"}>
                                    In the 5 years since the start of my journey as a freelance web developer, I have gained comprehensive experience in creating scalable and efficient solutions for both business and consumer use. Over the course of this journey, I have done remote work for agencies, consulted for startups and collaborated with scores of talented individuals. I am intrinsically motivated, naturally optimistic, and constantly driven towards improving my skills
                                </Text>
                            </Center>
                        </Stack>
                    </Grid>
                </Box>
                <Grid w={["95%", "90%", "80%"]} mx={"auto"} mt={-20} border={"1px"} borderColor={"#ccc"}
                    gridTemplateColumns={["1fr", "1fr", "1fr 1fr 1fr"]}
                    backgroundColor={"white"} borderRadius={20}>
                    <Box borderRight={["none", "none", "1px"]} borderBottom={["1px", "1px", "none"]}
                        borderColor={["#ccc", "#ccc", "#ccc"]}>
                        <SkillCard skill={skills[0]} />
                    </Box>
                    <Box borderRight={["none", "none", "1px"]} borderBottom={["1px", "1px", "none"]}
                        borderColor={["#ccc", "#ccc", "#ccc"]}>
                        <SkillCard skill={skills[1]} />
                    </Box>
                    <Box>
                        <SkillCard skill={skills[2]} />
                    </Box>
                </Grid>
                <Box mt={9}>
                    <Box w={"95%"}>
                        <Heading textAlign={"center"}>My Recent Work</Heading>
                        <Text mt={3} textAlign={"center"} fontSize={18} fontWeight={"thin"}>Here are a few projects I have
                            worked on recently</Text>
                    </Box>
                    <Box w={["95%", "95%", "60%"]} mx={"auto"}>
                        <Grid mt={9} gridTemplateColumns={["1fr", "1fr", "1fr 1fr"]} gridGap={3}>
                            {
                                (() => {
                                    return portolfio.map((k, i) => <WorkCard item={k} key={i} />)
                                })()
                            }
                        </Grid>
                    </Box>
                </Box>
                <Grid mt={20} borderRadius={20} w={["95%", "90%", "80%"]} mx={"auto"} padding={5} backgroundColor={"#2c1053"}
                    gridTemplateColumns={["1fr", "1fr", "1fr 1fr 1fr"]} gridGap={5}>
                    <Box>
                        <Heading textAlign={"center"} color={"white"}>Start a project</Heading>
                    </Box>
                    <Box>
                        <Text textAlign={"center"} fontSize={20} fontWeight={"thin"} color={"white"}>Interested in working
                            together?<br />We should queue up a chat. I’ll buy the coffee.</Text>
                    </Box>
                    <Box>
                        <Text _hover={{ backgroundColor: "purple", transition: "200ms" }} transition="200ms" mt={3}
                            w={"fit-content"} mx={"auto"} fontWeight={"bold"} py={2} px={5} color={"white"}
                            border={"2px"}
                            borderRadius={50} borderColor={"purple"}>
                            <a href={"mailto:business@gasimzade.az"} rel="noreferrer" target={"_blank"}>
                                Contact
                            </a>
                        </Text>
                    </Box>

                </Grid>
                <Box mt={10}>
                    <Footer />
                </Box>
            </Box>
        </>
    )
}
