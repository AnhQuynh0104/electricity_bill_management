import React, { lazy, Suspense } from "react"
import { RouteObject, useRoutes } from "react-router-dom"
import { PATH } from "src/constants/paths"

const Login = lazy(() => import("src/pages/Login/Login"))
const Home = lazy(() => import("src/pages/Home/Home"))
const CustomerList = lazy(() => import("src/pages/CustomerList/CustomerList"))
const Register = lazy(() => import("src/pages/Register/register"))
const RegisterForm = lazy(() => import("src/pages/Form/form"))
const UpdateElectric = lazy(() => import("src/pages/UpdateElectric/UpdateElectric"))
const UpdateElectricItem = lazy(() => import("src/pages/UpdateElectricItem/UpdateElectricItem"))
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
    path: PATH.REGISTER,
    element: <Register />
  },
  {
    path: PATH.REGISTERFORM,
    element: <RegisterForm/ >
  },
  {
    path: PATH.UPDATEELECTRIC,
    element: <UpdateElectric/ >
  },
  {
    path: PATH.UPDATEELECTRICITEM,
    element: <UpdateElectricItem/ >
  }

]
export default function Routes() {
  const element = useRoutes(routeList)

  return element
}
