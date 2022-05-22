import {
  Code,
  Heading,
  Link as ChakraLink,
  Stack,
  Text,
} from "@chakra-ui/react"
import Link from "next/link"
import React, { FC, ReactNode } from "react"
import ReactMarkdown from "react-markdown"
import SyntaxHighlighter from "react-syntax-highlighter"
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs"

type Props = {
  children: ReactNode
}

export const BoxMarkdown: FC<Props> = (props) => {
  if (typeof props.children !== "string") {
    return null
  }

  return (
    <ReactMarkdown
      components={{
        h1(props) {
          return (
            <Heading
              as={"h1"}
              variant={"h1"}
              fontSize={28}
              mt={props.node.position?.start.line === 1 ? 0 : 12}
              mb={2}
              fontWeight={"bold"}
            >
              {props.children}
            </Heading>
          )
        },
        h2(props) {
          return (
            <Heading
              as={"h2"}
              variant={"h2"}
              fontSize={18}
              mt={props.node.position?.start.line === 1 ? 0 : 12}
              mb={2}
              fontWeight={"bold"}
              // borderBottomWidth={2}
              // pb={2}
            >
              {props.children}
            </Heading>
          )
        },
        h3() {
          return null
        },
        h4() {
          return null
        },
        h5() {
          return null
        },
        h6() {
          return null
        },
        p(props) {
          return (
            <Text
              as={"p"}
              mt={props.node.position?.start.line === 1 ? 0 : 2}
              fontSize={14}
              lineHeight={2}
              opacity={0.9}
            >
              {props.children}
            </Text>
          )
        },
        code(props) {
          if (props.inline) {
            return (
              <Code
                fontSize={14}
                px={2}
                mx={1}
                lineHeight={1.5}
                bg={"rgb(40, 44, 52)"}
                color={"rgb(171, 178, 191)"}
                {...props}
              >
                {props.children}
              </Code>
            )
          }
          const match = /language-(\w+)/.exec(props.className || "")
          if (props.inline || !match) {
            return null
          }
          const text = String(props.children).replace(/\n$/, "")
          return (
            <SyntaxHighlighter
              style={atomOneDark}
              language={match[1]}
              PreTag={"div"}
            >
              {text}
            </SyntaxHighlighter>
          )
        },
        pre(props) {
          return (
            <Code
              as={"pre"}
              mt={4}
              mb={0}
              rounded={"md"}
              px={2}
              py={1}
              w={"100%"}
              overflow={"auto"}
              wordBreak={"break-all"}
              whiteSpace={"pre-wrap"}
              bg={"rgb(40, 44, 52)"}
              boxShadow={"0 4px 6px -1px #000e1e26"}
            >
              {props.children}
            </Code>
          )
        },
        a(props) {
          const [text] = props.children
          if (typeof props.href === "undefined" || typeof text !== "string") {
            return (
              <Text as={"span"} color={"blue.500"}>
                {props.children}
              </Text>
            )
          }
          if (props.href.includes("http")) {
            return (
              <ChakraLink
                href={props.href}
                target={"_blank"}
                color={"blue.500"}
                rel={"noreferrer"}
              >
                {text}
              </ChakraLink>
            )
          }
          return (
            <Link href={props.href}>
              <ChakraLink cursor={"pointer"}>{text}</ChakraLink>
            </Link>
          )
        },
        li(props) {
          return (
            <Text as={"li"} fontSize={"14"}>
              {props.children}
            </Text>
          )
        },
        ul(props) {
          return (
            <Stack as={"ul"} pl={5} mt={2}>
              {props.children}
            </Stack>
          )
        },
      }}
    >
      {props.children}
    </ReactMarkdown>
  )
}
