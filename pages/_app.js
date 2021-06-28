import React from 'react';

import "@fontsource/source-sans-pro";

import {ChakraProvider, extendTheme} from "@chakra-ui/react"

const theme = extendTheme({
    fonts: {
        heading: "Source Sans Pro",
        body: "Source Sans Pro"
    },
    colors: {
        purple: "#7510F7"
    }
})


function MyApp({Component, pageProps}) {
    return <ChakraProvider theme={theme}>
        <Component {...pageProps} />
    </ChakraProvider>
}

export default MyApp
