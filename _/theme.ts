import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
  config: {
    initialColorMode: "dark",
  },
  fonts: {
    body: "'M PLUS 1 Code', sans-serif",
    heading: "'M PLUS 1 Code', sans-serif",
    mono: "'M PLUS 1 Code', sans-serif",
  },
})
