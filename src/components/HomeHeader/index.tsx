import { Flex, Image, Switch, useColorMode } from "@chakra-ui/react";
import React from "react";
import HomeHeader from "./style";
import { MoonIcon, SunIcon } from "@chakra-ui/icons"

import logo from "../../imgs/logo.svg"

console.log(logo)

const DarkModeSwitch: React.FunctionComponent = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const isDark: boolean = colorMode === "dark"

    return (

        <Flex display="flex" alignItems="center" gap="1">
            <SunIcon color="teal" />
            <Switch colorScheme="teal" size="lg"  onChange={toggleColorMode} />
            <MoonIcon color="teal" />
        </Flex>

    )

}

const Header: React.FunctionComponent = () => {
    const { colorMode } = useColorMode()
    const isDark: boolean = colorMode === "dark"

    return (
        <HomeHeader bg={ isDark ? "default.darkMode" : "ẅhite"}>
            <DarkModeSwitch />
            <Image src={logo} alt="logo" />
        </HomeHeader>
    )
}

export default Header