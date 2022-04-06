import React, { lazy } from "react"
import { Route, Switch } from "react-router-dom"
import { PATH } from "src/constants/paths"

const Login = lazy(() => import("src/pages/Login/Login"))

export default function LoginRoutes() {
  return (
    <Switch>
      <Route path={PATH.LOGIN} component={() => <Login />} />
    </Switch>
  )
}
