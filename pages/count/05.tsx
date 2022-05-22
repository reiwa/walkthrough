import { Button } from "@chakra-ui/react"
import { useState } from "react"

const Page = () => {
  const [count, setCount] = useState(0)

  const onIncrement = () => {
    setCount(count + 1)
  }

  return <Button onClick={onIncrement}>{`カウント ${count}`}</Button>
}

export default Page
