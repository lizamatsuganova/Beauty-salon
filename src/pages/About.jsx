import { Link } from 'react-router-dom'

function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <span className="about-icon">💗</span>

        <h1>О салоне красоты BeautySalon</h1>

        <p>
          Красота начинается с заботы о себе!
        </p>
      </section>

      <section className="about-card">
        <h2>Наш салон</h2>

        <p>
          BeautySalon — салон красоты, где каждый клиент
          получает внимание, заботу и качественное обслуживание.
        </p>

        <p>
          Мы стремимся создать комфортную атмосферу,
          чтобы каждый посетитель мог отдохнуть и получить
          удовольствие от процедур.
        </p>
      </section>

      <section className="about-card">
        <h2>Наши услуги</h2>

        <ul>
          <li>💅 Маникюр и педикюр</li>
          <li>💇 Стрижки и укладки</li>
          <li>💄 Макияж</li>
          <li>✨ Уход за волосами</li>
          <li>🌸 Косметические процедуры</li>
        </ul>
      </section>

      <section className="about-card">
        <h2>Наши преимущества</h2>

        <ul>
          <li>Индивидуальный подход к каждому клиенту</li>
          <li>Опытные мастера</li>
          <li>Качественное обслуживание</li>
          <li>Комфортная атмосфера</li>
        </ul>
      </section>

      <p className="about-footer">
        BeautySalon — красота в каждой детали ❤️
      </p>

      <Link className="demo-link" to="/login">
        Перейти ко входу
      </Link>
    </div>
  )
}

export default About