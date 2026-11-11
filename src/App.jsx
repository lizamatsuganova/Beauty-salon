import { useState } from 'react'
import AppointmentForm from './components/AppointmentForm'
import AppointmentTable from './components/AppointmentTable'
import './App.css'

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

function App() {
  const [appointments, setAppointments] = useState(initialAppointments)
  const [nextId, setNextId] = useState(initialAppointments.length + 1)

  function handleAddAppointment(formData) {
    const newAppointment = {
      id: nextId,
      ...formData,
    }

    setAppointments((prev) => [...prev, newAppointment])
    setNextId((prev) => prev + 1)
  }

  function handleDeleteAppointment(id) {
    setAppointments((prev) =>
      prev.filter((appointment) => appointment.id !== id)
    )
  }

  return (
    <section id="salon">
      <h1>Салон красоты</h1>

      <AppointmentForm onAddAppointment={handleAddAppointment} />

      <h2>Записи</h2>

      <AppointmentTable
        appointments={appointments}
        onDeleteAppointment={handleDeleteAppointment}
      />
    </section>
  )
}

export default App