import { useState } from 'react'

const emptyForm = {
  serviceName: '',
  duration: '',
  price: '',
  clientName: '',
  clientPhone: '',
  masterName: '',
}

function AppointmentForm({ onAddAppointment }) {
  const [form, setForm] = useState(emptyForm)

  function handleChange(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (
      !form.serviceName ||
      !form.duration ||
      !form.price ||
      !form.clientName ||
      !form.clientPhone ||
      !form.masterName
    ) {
      alert('Заполните все поля формы')
      return
    }

    onAddAppointment(form)
    setForm(emptyForm)
  }

  return (
    <form className="appointment-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <span className="form-legend">Услуга</span>
        <label>
          Название
          <input
            type="text"
            name="serviceName"
            value={form.serviceName}
            onChange={handleChange}
          />
        </label>
        <label>
          Длительность
          <input
            type="number"
            min="0"
            name="duration"
            value={form.duration}
            onChange={handleChange}
          />
        </label>
        <label>
          Стоимость
          <input
            type="number"
            min="0"
            step="0.01"
            name="price"
            value={form.price}
            onChange={handleChange}
          />
        </label>
      </div>

      <div className="form-group">
        <span className="form-legend">Клиент</span>
        <label>
          Имя
          <input
            type="text"
            name="clientName"
            value={form.clientName}
            onChange={handleChange}
          />
        </label>
        <label>
          Телефон
          <input
            type="tel"
            name="clientPhone"
            value={form.clientPhone}
            onChange={handleChange}
          />
        </label>
      </div>

      <div className="form-group">
        <span className="form-legend">Мастер</span>
        <label>
          Имя
          <select
            name="masterName"
            value={form.masterName}
            onChange={handleChange}
          >
            <option value="">Выберите мастера</option>
            <option value="Барсукова Анна">Барсукова Анна</option>
            <option value="Чибрикова Яна">Чибрикова Яна</option>
            <option value="Столбова Александра">Столбова Александра</option>
          </select>
        </label>
      </div>

      <button type="submit" className="add-btn">
        Добавить запись
      </button>
    </form>
  )
}

export default AppointmentForm