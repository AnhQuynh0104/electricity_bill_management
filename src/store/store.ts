import { configureStore } from "@reduxjs/toolkit"
import rootReducer from "src/reducer/reducer"

export const store = configureStore({
  reducer: rootReducer
})
