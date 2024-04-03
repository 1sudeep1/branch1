import { configureStore} from '@reduxjs/toolkit'
import userReducer from './reducerSlices/userSlice'
import logger from 'redux-logger'
export const store = configureStore({
  reducer: userReducer,
  middleware: () => [logger],
})