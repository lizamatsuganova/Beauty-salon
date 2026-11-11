import AppointmentRow from './AppointmentRow'

function AppointmentTable({ appointments, onDeleteAppointment }) {
  return (
    <table className="appointments-table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Услуга</th>
          <th>Длительность</th>
          <th>Стоимость</th>
          <th>Клиент</th>
          <th>Телефон</th>
          <th>Мастер</th>
          <th>Действие</th>
        </tr>
      </thead>
      <tbody>
        {appointments.length === 0 ? (
          <tr>
            <td colSpan="8" style={{ textAlign: 'center' }}>
              Пока нет ни одной записи
            </td>
          </tr>
        ) : (
          appointments.map((appointment, index) => (
            <AppointmentRow
              key={appointment.id}
              appointment={appointment}
              rowNumber={index + 1}
              onDeleteAppointment={onDeleteAppointment}
            />
          ))
        )}
      </tbody>
    </table>
  )
}

export default AppointmentTable