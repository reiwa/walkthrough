import { useRouter } from "next/router"
import { type FC } from "react"
import { BoxWalkthroughApps } from "_/components/BoxWalkthroughApps"
import { BoxWalkthroughHome } from "_/components/BoxWalkthroughHome"

export const BoxWalkthrough: FC = () => {
  const router = useRouter()

  if (router.route === "/") {
    return <BoxWalkthroughHome />
  }

  return <BoxWalkthroughApps />
}
