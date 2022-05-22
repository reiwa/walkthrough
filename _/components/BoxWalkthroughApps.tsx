import {
  Box,
  Button,
  Hide,
  HStack,
  IconButton,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react"
import { useRouter } from "next/router"
import { type FC } from "react"
import { BiCode, BiHome } from "react-icons/bi"
import { useQuery } from "react-query"
import { BoxMarkdown } from "_/components/BoxMarkdown"
import { ButtonColorMode } from "_/components/ButtonColorMode"
import { PageQuery } from "_/types/pageQuery"

export const BoxWalkthroughApps: FC = () => {
  const router = useRouter()

  const { data } = useQuery<PageQuery>(router.pathname, () => {
    return fetch(`/api/${router.pathname}`).then((res) => {
      return res.json()
    })
  })

  const backgroundColor = useColorModeValue("white", "gray.900")

  const onOpenFileCode = () => {
    open(data?.filePathCode, "_blank")
  }

  // const onOpenFileMd = () => {
  //   const href = `${process.env.FILE_PATH}/src/md/${router.asPath}.md`
  //   open(href, "_blank")
  // }

  const onNextPage = () => {
    router.push(data?.nextPagePath ?? "/")
  }

  const onPrevPage = () => {
    router.push(data?.prevPagePath ?? "/")
  }

  const onHomePage = () => {
    router.push("/")
  }

  if (router.route === "/") {
    return (
      <HStack position={"fixed"} bottom={0} right={0} p={4}>
        <ButtonColorMode />
      </HStack>
    )
  }

  return (
    <Hide below={"md"}>
      <Box
        position={"fixed"}
        bottom={0}
        right={0}
        maxW={"28rem"}
        h={"100%"}
        w={"100%"}
        shadow={"lg"}
        overflow={"hidden"}
        bg={backgroundColor}
        zIndex={99}
      >
        <Stack h={"100%"} spacing={0}>
          <HStack justifyContent={"space-between"} py={4} px={4} shadow={"sm"}>
            <HStack>
              <IconButton
                aria-label={"ホームに戻る"}
                size={"sm"}
                icon={<BiHome />}
                onClick={onHomePage}
              />
              <Button
                size={"sm"}
                disabled={data?.hasPrevPage !== true}
                onClick={onPrevPage}
              >
                {"戻る"}
              </Button>
              <Button
                size={"sm"}
                disabled={data?.hasNextPage !== true}
                onClick={onNextPage}
              >
                {"次へ"}
              </Button>
            </HStack>
            <HStack>
              <Button
                size={"sm"}
                leftIcon={<BiCode />}
                onClick={onOpenFileCode}
              >
                {"コード"}
              </Button>
              <ButtonColorMode />
            </HStack>
          </HStack>
          <Box overflow={"auto"} pt={4} px={4} pb={4}>
            <BoxMarkdown>{data?.mdText}</BoxMarkdown>
          </Box>
        </Stack>
      </Box>
    </Hide>
  )
}
