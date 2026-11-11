import { createAsyncThunk } from '@reduxjs/toolkit'
import masters from '../../masters'

export const showMasters = createAsyncThunk(
  'masters/showMasters',
  async () => masters,
)