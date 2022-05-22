import { ColorModeScript } from "@chakra-ui/react"
import NextDocument, { Head, Html, Main, NextScript } from "next/document"
import { theme } from "_/theme"

export default class Document extends NextDocument {
  render() {
    const fontURL =
      "https://fonts.googleapis.com/css2?family=M+PLUS+1+Code:wght@500;700&display=swap"

    return (
      <Html lang={"ja"}>
        <Head>
          <link rel={"preconnect"} href="https://fonts.googleapis.com" />
          <link
            rel={"preconnect"}
            href={"https://fonts.gstatic.com"}
            crossOrigin={""}
          />
          <link href={fontURL} rel={"stylesheet"} />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
