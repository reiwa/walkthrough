import { Button, HStack, Stack } from "@chakra-ui/react"
import type { NextPage } from "next"
import Head from "next/head"
import { useRouter } from "next/router"

const Home: NextPage = () => {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>{"Walkthrough"}</title>
      </Head>
      <Stack p={4}>
        <HStack>
          <Button
            onClick={() => {
              router.push("/count/00")
            }}
          >
            {"カウント"}
          </Button>
        </HStack>
      </Stack>
    </>
  )
}

export default Home
