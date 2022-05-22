import type { NextApiHandler } from "next"

export const apiHandlerHome: NextApiHandler = async (req, resp) => {
  return resp.json({})
}
