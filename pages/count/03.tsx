import { Button } from "@chakra-ui/react"
import { useState } from "react"

const Page = () => {
  const [count] = useState(0)

  return (
    <Button
      onClick={() => {
        alert("クリック")
      }}
    >
      {`カウント ${count}`}
    </Button>
  )
}

export default Page
