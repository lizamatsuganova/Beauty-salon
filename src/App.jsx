import { Link, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Appointments from './pages/Appointments'
import About from './pages/About'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="site-header">
        <Link to="/about" className="site-logo">
          BeautySalon
        </Link>

        <nav className="site-nav">
          <Link to="/login">Вход</Link>
          <Link to="/appointments">Записи</Link>
          <Link to="/about">О нас</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/about" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  )
}

export default App