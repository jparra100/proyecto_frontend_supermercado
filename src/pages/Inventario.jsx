import { Link } from 'react-router-dom'
import TablaProductos from '../components/TablaProductos'
import { useInventario } from '../context/InventarioContext'

function Inventario() {
  const { productos } = useInventario()

  return (
    <>
      <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">Inventario</h1>
          <p className="mt-3 text-lg text-suave">
            {productos.length === 1
              ? '1 artículo registrado en bodega.'
              : `${productos.length} artículos registrados en bodega.`}
          </p>
        </div>
        <Link
          to="/agregar"
          className="inline-flex h-11 items-center rounded-md bg-accion px-5 font-medium text-white transition-colors hover:bg-tinta/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tinta"
        >
          Agregar producto
        </Link>
      </header>

      {productos.length > 0 ? (
        <TablaProductos productos={productos} />
      ) : (
        <div className="rounded-lg bg-superficie p-8">
          <h2 className="text-lg font-bold">Todavía no hay artículos</h2>
          <p className="mt-2 text-suave">
            Usa el formulario para registrar el primer producto del inventario.
          </p>
        </div>
      )}
    </>
  )
}

export default Inventario
