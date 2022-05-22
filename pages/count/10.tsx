import { Button, Icon } from "@chakra-ui/react"
import { FC, useState } from "react"
import { BiLike } from "react-icons/bi"

const Page = () => {
  const [count, setCount] = useState(2)

  const onIncrement = () => {
    setCount(8 < count ? 0 : count + 1)
  }

  return <ButtonLike count={count} onClick={onIncrement} />
}

type Props = {
  count: number
  onClick(): void
}

const ButtonLike: FC<Props> = (props) => {
  return (
    <Button
      leftIcon={<Icon as={BiLike} />}
      colorScheme={"blue"}
      variant={"outline"}
      size={"sm"}
      onClick={props.onClick}
    >
      {`いいね ${props.count}`}
    </Button>
  )
}

export default Page
