import { Button } from "@chakra-ui/react"
import { useState } from "react"

const Page = () => {
  const [count] = useState(2)

  return <Button>{`カウント ${count}`}</Button>
}

export default Page
