import React, { lazy, Suspense } from "react"
import { RouteObject, useRoutes } from "react-router-dom"
import { PATH } from "src/constants/paths"

const Login = lazy(() => import("src/pages/Login/Login"))
const Home = lazy(() => import("src/pages/Home/Home"))
const CustomerList = lazy(() => import("src/pages/CustomerList/CustomerList"))

const routeList: RouteObject[] = [
  {
    path: PATH.LOGIN,
    element: <Login />
  },
  {
    path: PATH.HOME,
    element: <Home />
  },
  {
    path: PATH.CUSTOMERLIST,
    element: <CustomerList />
  }
]
export default function Routes() {
  const element = useRoutes(routeList)

  return element
}
