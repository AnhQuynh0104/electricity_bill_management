import React from "react"
import {
  Route,
  RouteProps,
  Redirect,
  RouteComponentProps
} from "react-router-dom"
import { useSelector } from "react-redux"
interface Props extends RouteProps {
  component: React.ComponentType<RouteComponentProps>
}

function AuthenticatedGuard(props: Props) {
  const { component: Component, ...rest } = props

  const { isAuthenticated } = useSelector((state: AppState) => state.app)

  return (
    <Route
      {...rest}
      render={props => {
        if (!isAuthenticated && !localStorage.getItem("token")) {
          return <Redirect to="/login" />
        }
        return <Component {...props} />
      }}
    />
  )
}

export default AuthenticatedGuard
