import { ChakraProvider } from "@chakra-ui/react"
import { type AppProps } from "next/app"
import { type FC } from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { BoxWalkthrough } from "_/components/BoxWalkthrough"
import { theme } from "_/theme"

const queryClient = new QueryClient()

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <BoxWalkthrough />
        <Component {...pageProps} />
      </ChakraProvider>
    </QueryClientProvider>
  )
}

export default App
