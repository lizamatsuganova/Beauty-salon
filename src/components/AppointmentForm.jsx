function AppointmentForm() {
  return (
    <form className="appointment-form">
      <div className="form-group">
        <span className="form-legend">Услуга</span>
        <label>
          Название
          <input type="text" name="serviceName" />
        </label>
        <label>
          Длительность
          <input type="number" min="0" name="duration" />
        </label>
        <label>
          Стоимость
          <input type="text" min="0" step="0.01" name="price" placeholder="хх.хх byn"/>
        </label>
      </div>

      <div className="form-group">
        <span className="form-legend">Клиент</span>
        <label>
          Имя
          <input type="text" name="clientName" placeholder="Фамилия Имя" />
        </label>
        <label>
          Телефон
          <input type="tel" name="clientPhone" placeholder="+375(29)123-45-67" />
        </label>
      </div>

      <div className="form-group">
        <span className="form-legend">Мастер</span>
        <label>
          Имя
          <select name="masterName">
            <option value="">Выберите мастера</option>
            <option value="Смирнова А.В.">Столбова Александра</option>
            <option value="Кузнецова Д.С.">Барсукова Анна</option>
            <option value="Смирнов И.Д.">Чибрикова Яна</option>
          </select>
        </label>
      </div>

      <button type="button" className="add-btn">
        Добавить запись
      </button>
    </form>
  )
}

export default AppointmentForm