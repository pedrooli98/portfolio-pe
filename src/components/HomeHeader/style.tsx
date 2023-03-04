import React from "react";
import { chakra, useColorMode } from "@chakra-ui/react";


const HomeHeader = chakra("header", {
    baseStyle: {
        w: "100vw",
        pt:"50px",
        display: "flex",
        bg: "white",
        px: "200px",
        alignItems: "center",
        justifyContent: "space-between"
    }
})

export default HomeHeader