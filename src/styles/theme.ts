import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    config: {
        initialColorMode: "light",
        useSystemColorMode: false,
    },
    colors: {
        default: {
            green: "#181B23",
            darkMode: "#1A202C"
        }
    }
})