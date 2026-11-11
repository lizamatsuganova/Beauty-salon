import { createSlice } from '@reduxjs/toolkit'
import {
  createAppointment,
  deleteAppointment,
  showAppointments,
} from '../actions/appointmentsActions'

const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState: {
    appointments: [],
    loading: false,
    loaded: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(showAppointments.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(showAppointments.fulfilled, (state, action) => {
        state.appointments = action.payload
        state.loading = false
        state.loaded = true
      })
      .addCase(showAppointments.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message ?? 'Неизвестная ошибка'
      })
      .addCase(createAppointment.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(createAppointment.fulfilled, (state, action) => {
        const nextId =
          Math.max(0, ...state.appointments.map((appointment) => appointment.id)) + 1

        state.appointments.push({
          id: nextId,
          ...action.payload,
        })
        state.loading = false
      })
      .addCase(createAppointment.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message ?? 'Неизвестная ошибка'
      })
      .addCase(deleteAppointment.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(deleteAppointment.fulfilled, (state, action) => {
        state.appointments = state.appointments.filter(
          (appointment) => appointment.id !== action.payload,
        )
        state.loading = false
      })
      .addCase(deleteAppointment.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message ?? 'Неизвестная ошибка'
      })
  },
})

export default appointmentsSlice.reducer