import { configureStore } from '@reduxjs/toolkit'
import mastersReducer from './slices/mastersSlice'
import appointmentsReducer from './slices/appointmentsSlice'

const store = configureStore({
  reducer: {
    masters: mastersReducer,
    appointments: appointmentsReducer,
  },
})

export default store