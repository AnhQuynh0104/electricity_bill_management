import { loginApi } from "src/apis/user.api"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (payload: ReqLogin) => {
    const response = await loginApi(payload)
    return response
  }
)
