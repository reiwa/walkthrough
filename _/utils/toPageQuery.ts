import { readFile } from "fs/promises"
import { cwd } from "process"
import { PageQuery } from "_/types/pageQuery"
import { tryToReadFile } from "_/utils/tryToReadFile"

export const toPageQuery = async (routes: string[]) => {
  try {
    const path = routes.join("/")

    const mdText = await readFile(`_/md/${path}.md`, "utf-8")

    const [appName, pageCountText] = routes

    const pageCount = parseInt(pageCountText)

    const nextPageCountText = (pageCount + 1).toString().padStart(2, "0")

    const nextPageFilePath = `_/md/${appName}/${nextPageCountText}.md`

    const nextPageMdText = await tryToReadFile(nextPageFilePath)

    const hasPrevPage = 0 < pageCount

    const hasNextPage = nextPageMdText !== null

    const prevPageCountText = hasPrevPage
      ? (pageCount - 1).toString().padStart(2, "0")
      : null

    const nextPagePath =
      nextPageMdText !== null ? `/${appName}/${nextPageCountText}` : null

    const prevPagePath = hasPrevPage ? `/${appName}/${prevPageCountText}` : null

    const editorPath = `vscode://file/${cwd()}`

    const filePathCode = `${editorPath}/pages/${path}.tsx`

    return {
      mdText,
      hasPrevPage,
      hasNextPage,
      prevPagePath,
      nextPagePath,
      filePathCode,
    } as PageQuery
  } catch (error) {
    if (error instanceof Error) {
      return error
    }
    return new Error()
  }
}
