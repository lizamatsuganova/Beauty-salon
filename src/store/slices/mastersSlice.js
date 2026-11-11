import { createSlice } from '@reduxjs/toolkit'
import { showMasters } from '../actions/mastersActions'

const mastersSlice = createSlice({
  name: 'masters',
  initialState: {
    masters: [],
    loading: false,
    loaded: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(showMasters.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(showMasters.fulfilled, (state, action) => {
        state.masters = action.payload
        state.loading = false
        state.loaded = true
      })
      .addCase(showMasters.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message ?? 'Неизвестная ошибка'
      })
  },
})

export default mastersSlice.reducer