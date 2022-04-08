import React, { lazy, Suspense } from "react"
import { RouteObject, useRoutes } from "react-router-dom"
import { PATH } from "src/constants/paths"

const Login = lazy(() => import("src/pages/Login/Login"))
const Home = lazy(() => import("src/pages/Home/Home"))
const CustomerList = lazy(() => import("src/pages/CustomerList/CustomerList"))
const BillList = lazy(() => import("src/pages/BillList/BillList"))
const ElectricInfo = lazy(() => import("src/pages/Electric/ElectricInfo"))
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
  },
  {
    path: PATH.BILLLIST,
    element: <BillList />
  },
  {
    path: PATH.ELECTRICINFO,
    element: <ElectricInfo />
  }
]
export default function Routes() {
  const element = useRoutes(routeList)

  return element
}
