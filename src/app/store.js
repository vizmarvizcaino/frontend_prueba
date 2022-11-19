import { configureStore } from "@reduxjs/toolkit";
import academicsReducer from '../features/academic/academicSlice'
import usersReducer from '../features/user/userSlice'

export const store = configureStore({
  reducer: {
    academics: academicsReducer,
    users: usersReducer,
  }
})

