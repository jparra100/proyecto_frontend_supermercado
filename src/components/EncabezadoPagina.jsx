
function EncabezadoPagina({ titulo, descripcion }) {
  return (
    <header className="mb-10 max-w-2xl">
      <h1 className="text-3xl font-bold tracking-tight md:text-5xl">{titulo}</h1>
      {descripcion && <p className="mt-4 text-lg">{descripcion}</p>}
    </header>
  )
}

export default EncabezadoPagina
