import React, { Suspense } from "react"
import { BrowserRouter } from "react-router-dom"
import Loading from "src/components/Loading/Loading"
import LoginRoutes from "./LoginRoutes"
import HomeRoutes from "./HomeRoutes"

export default function Routes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <HomeRoutes />
        <LoginRoutes />
      </Suspense>
    </BrowserRouter>
  )
}
