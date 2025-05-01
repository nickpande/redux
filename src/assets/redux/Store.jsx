import { configureStore } from '@reduxjs/toolkit'
import  UserReducer  from '../counter/UserReducer'
import PorductReducer from '../counter/ProductReducer'

export default configureStore({
  reducer: {
    UserReducer: UserReducer,
    PorductReducer: PorductReducer,
  },
})