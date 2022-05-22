import { Button, HStack } from "@chakra-ui/react"
import { FC, useState } from "react"

const Page = () => {
  return (
    <HStack>
      <ButtonCount />
      <ButtonCount />
    </HStack>
  )
}

const ButtonCount: FC = () => {
  const [count, setCount] = useState(0)

  const onIncrement = () => {
    setCount(8 < count ? 0 : count + 1)
  }

  return <Button onClick={onIncrement}>{`カウント ${count}`}</Button>
}

export default Page
