import { createSlice } from "@reduxjs/toolkit"
import { loginThunk } from "src/pages/Login/Login.thunks"

interface appInterface {
  isAuthenticated: boolean
}

const initialState: appInterface = {
  isAuthenticated: false
}

export const appSlice = createSlice({
  name: "login",
  initialState: initialState,
  reducers: {
    logout: state => {
      state.isAuthenticated = false
      localStorage.removeItem("token")
    }
  },
  extraReducers: builder => {
    builder.addCase(loginThunk.fulfilled, state => {
      state.isAuthenticated = true
    })
  }
})

export const { logout } = appSlice.actions

export default appSlice.reducer
