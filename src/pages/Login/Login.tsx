import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loginThunk } from "./Login.thunks"
import { useHistory } from "react-router-dom"
import { PATH } from "src/constants/paths"

function Login() {
  const { loading, error } = useSelector((state: AppState) => state.login)
  const { isAuthenticated } = useSelector((state: AppState) => state.app)

  const dispatch = useDispatch()
  const history = useHistory()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  useEffect(() => {
    if (isAuthenticated) history.push(PATH.HOME)
  }, [isAuthenticated, history])

  const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!loading) {
      const payload = { username, password }
      dispatch(loginThunk(payload))
    }
  }

  return (
    <div className="container">
      <form onSubmit={submit}>
        <h1>Login</h1>
        <p>Please enter your login and password!</p>
        <input type="text" placeholder="Username" onChange={handleUsername} />
        <input
          type="password"
          placeholder="Password"
          onChange={handlePassword}
        />
        {error && <div>{error}</div>}
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
