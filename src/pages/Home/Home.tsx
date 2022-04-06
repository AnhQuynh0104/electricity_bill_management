import React from "react"
import { useDispatch } from "react-redux"
import MainLayout from "src/layouts/MainLayout"
import { logout } from "../../App/App.reducer"

export default function Home() {
  const dispatch = useDispatch()

  const handleLogOut = () => dispatch(logout())

  return (
    <MainLayout>
      <h2>Home</h2>
      <button onClick={handleLogOut}>Logout</button>
    </MainLayout>
  )
}
