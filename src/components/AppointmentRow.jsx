function AppointmentRow({ appointment, rowNumber }) {
  return (
    <tr>
      <td>{rowNumber}</td>
      <td>{appointment.serviceName}</td>
      <td>{appointment.duration}</td>
      <td>{appointment.price}</td>
      <td>{appointment.clientName}</td>
      <td>{appointment.clientPhone}</td>
      <td>{appointment.masterName}</td>
      <td>
        <button type="button" className="delete-btn">
          Удалить
        </button>
      </td>
    </tr>
  )
}

export default AppointmentRow