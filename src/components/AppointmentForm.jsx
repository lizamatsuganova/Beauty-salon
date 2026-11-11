import { useEffect, useRef, useState } from 'react'
import masters from '../masters'
import Spinner from './Spinner'

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
  const [isSubmitting, setIsSubmitting] = useState(false)
  const submitTimeout = useRef(null)

  useEffect(() => {
    return () => window.clearTimeout(submitTimeout.current)
  }, [])

  function handleChange(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (isSubmitting) return

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

    setIsSubmitting(true)

    submitTimeout.current = window.setTimeout(() => {
      onAddAppointment(form)
      setForm(emptyForm)
      setIsSubmitting(false)
    }, 500)
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
            disabled={isSubmitting}
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
            disabled={isSubmitting}
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
            disabled={isSubmitting}
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
            disabled={isSubmitting}
          />
        </label>
        <label>
          Телефон
          <input
            type="tel"
            name="clientPhone"
            value={form.clientPhone}
            onChange={handleChange}
            disabled={isSubmitting}
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
            disabled={isSubmitting}
          >
            <option value="">Выберите мастера</option>
            {masters.map((master) => (
              <option key={master} value={master}>
                {master}
              </option>
            ))}
          </select>
        </label>
      </div>

      <button
        type="submit"
        className="add-btn"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Spinner label="Добавляем запись" />
            Добавляем...
          </>
        ) : (
          'Добавить запись'
        )}
      </button>
    </form>
  )
}

export default AppointmentForm