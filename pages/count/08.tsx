import { Button } from "@chakra-ui/react"
import { FC, useState } from "react"

const Page = () => {
  return <ButtonCount count={4} />
}

type Props = {
  count: number
}

const ButtonCount: FC<Props> = (props) => {
  const [count, setCount] = useState(props.count)

  const onIncrement = () => {
    setCount(8 < count ? 0 : count + 1)
  }

  return <Button onClick={onIncrement}>{`カウント ${count}`}</Button>
}

export default Page
