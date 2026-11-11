import { Link } from 'react-router-dom'

function Login() {
  function handleSubmit(event) {
    event.preventDefault()
    alert('Авторизация пока не подключена')
  }

  return (
    <section className="login-page">
      <div className="login-card">
        <div className="login-icon">💗</div>

        <h1>Салон красоты BeautySalon</h1>

        <p className="login-subtitle">
          Войдите в систему для продолжения
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="login">
            Логин
          </label>

          <input
            id="login"
            type="text"
            placeholder="Введите логин"
            required
          />

          <label htmlFor="password">
            Пароль
          </label>

          <input
            id="password"
            type="password"
            placeholder="Введите пароль"
            required
          />

          <button type="submit" className="login-button">
            Войти
          </button>
        </form>

        <p className="login-note">
          Нет аккаунта? Обратитесь к администратору.
        </p>

        <Link className="demo-link" to="/appointments">
          Перейти к записям (демо)
        </Link>
      </div>
    </section>
  )
}

export default Login