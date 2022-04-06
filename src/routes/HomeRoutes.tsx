import React, { lazy } from "react"
import { Switch } from "react-router-dom"
import AuthenticatedGuard from "src/guards/AuthenticatedGuard"
import { PATH } from "src/constants/paths"

const Home = lazy(() => import("src/pages/Home/Home"))

export default function HomeRoutes() {
  return (
    <Switch>
      <AuthenticatedGuard exact path={PATH.HOME} component={() => <Home />} />
    </Switch>
  )
}
