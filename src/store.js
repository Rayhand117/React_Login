import { configureStore } from '@reduxjs/toolkit'
import authSlice from "./features/auth/authSlice";
import logger from 'redux-logger'
export default configureStore({
  reducer: {
    auth: authSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})