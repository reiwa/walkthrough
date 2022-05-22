import { Button } from "@chakra-ui/react"
import { useState } from "react"

const Page = () => {
  const [count] = useState(0)

  const onAlert = () => {
    alert("クリック")
  }

  return <Button onClick={onAlert}>{`カウント ${count}`}</Button>
}

export default Page
