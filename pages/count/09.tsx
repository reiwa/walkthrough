import { Button } from "@chakra-ui/react"
import { FC, useState } from "react"

const Page = () => {
  const [count, setCount] = useState(2)

  const onIncrement = () => {
    setCount(8 < count ? 0 : count + 1)
  }

  return <ButtonCount count={count} onClick={onIncrement} />
}

type Props = {
  count: number
  onClick(): void
}

const ButtonCount: FC<Props> = (props) => {
  return <Button onClick={props.onClick}>{`カウント ${props.count}`}</Button>
}

export default Page
