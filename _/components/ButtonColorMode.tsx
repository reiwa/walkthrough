import { IconButton, useColorMode } from "@chakra-ui/react"
import { type FC } from "react"
import { BiMoon, BiSun } from "react-icons/bi"

export const ButtonColorMode: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <IconButton
      aria-label={colorMode === "light" ? "暗くする" : "明るくする"}
      size={"sm"}
      icon={colorMode === "light" ? <BiSun /> : <BiMoon />}
      onClick={toggleColorMode}
    />
  )
}
