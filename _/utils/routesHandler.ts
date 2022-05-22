import type { NextApiHandler } from "next"
import { toPageQuery } from "_/utils/toPageQuery"

export const routesHandler: NextApiHandler = async (req, resp) => {
  const routes = req.query.routes

  if (typeof routes === "string") {
    return resp.status(500).json({})
  }

  const pageQuery = await toPageQuery(routes)

  if (pageQuery instanceof Error) {
    return resp.status(500).json({})
  }

  return resp.json(pageQuery)
}
