import { createSlice } from "@reduxjs/toolkit"
import { loginThunk } from "./Login.thunks"

interface loginInterface {
  loading: boolean
  error: string | undefined
}

const initialState: loginInterface = {
  loading: false,
  error: ""
}

export const loginSlice = createSlice({
  name: "login",
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loginThunk.pending, state => {
        state.loading = true
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.loading = false
        state.error = ""
        localStorage.setItem("token", action.payload.data.access_token)
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  }
})

export default loginSlice.reducer
