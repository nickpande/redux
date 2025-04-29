import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../counter/Counter'

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})