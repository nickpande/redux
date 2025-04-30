import { configureStore } from '@reduxjs/toolkit'
import  UserReducer  from '../counter/UserReducer'

export default configureStore({
  reducer: {
    UserReducer: UserReducer,
  },
})