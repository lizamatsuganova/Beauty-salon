import { createAsyncThunk } from '@reduxjs/toolkit'

const initialAppointments = [
  {
    id: 1,
    serviceName: 'Маникюр',
    duration: '60',
    price: '45',
    clientName: 'Малухина Диана',
    clientPhone: '+375(33)345-60-12',
    masterName: 'Барсукова Анна',
  },
  {
    id: 2,
    serviceName: 'Стрижка',
    duration: '90',
    price: '60',
    clientName: 'Мосеева Оксана',
    clientPhone: '+375(29)123-45-67',
    masterName: 'Чибрикова Яна',
  },
]

export const showAppointments = createAsyncThunk(
  'appointments/showAppointments',
  async () => initialAppointments,
)

export const createAppointment = createAsyncThunk(
  'appointments/createAppointment',
  async (appointmentData) => appointmentData,
)

export const deleteAppointment = createAsyncThunk(
  'appointments/deleteAppointment',
  async (appointmentId) => appointmentId,
)