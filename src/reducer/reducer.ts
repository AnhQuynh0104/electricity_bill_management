import { combineReducers } from "redux"
import appReducer from "src/App/App.reducer"
import loginReducer from "src/pages/Login/Login.reducer"

const rootReducer = combineReducers({
  app: appReducer,
  login: loginReducer
})

export default rootReducer
