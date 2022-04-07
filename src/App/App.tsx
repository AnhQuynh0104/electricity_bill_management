import React, { Suspense } from "react"
import { BrowserRouter } from "react-router-dom"
import Loading from "src/components/Loading/Loading"
import Routes from "src/routes/routes"

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes />
      </Suspense>
    </BrowserRouter>
  )
}

export default App
