import { HStack } from "@chakra-ui/react"
import { type FC } from "react"
import { useQuery } from "react-query"
import { ButtonColorMode } from "_/components/ButtonColorMode"

export const BoxWalkthroughHome: FC = () => {
  const { data } = useQuery<{}>("/", () => {
    return fetch("/api/").then((res) => {
      return res.json()
    })
  })

  return (
    <HStack position={"fixed"} bottom={0} right={0} p={4}>
      <ButtonColorMode />
    </HStack>
  )
}
