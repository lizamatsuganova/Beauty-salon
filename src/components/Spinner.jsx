function Spinner({ label = 'Загрузка' }) {
  return (
    <span className="spinner" role="status" aria-label={label}>
      <span className="sr-only">{label}</span>
    </span>
  )
}

export default Spinner