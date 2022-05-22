import { readFile } from "fs/promises"

export const tryToReadFile = async (path: string) => {
  try {
    return await readFile(path, "utf-8")
  } catch (error) {
    return null
  }
}
