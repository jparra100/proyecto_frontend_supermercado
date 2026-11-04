import { useState } from 'react'
import { Link } from 'react-router-dom'
import TablaProductos from '../components/TablaProductos'
import { useInventario } from '../context/InventarioContext'
import tiposProducto from '../data/tiposProducto'

function Inventario() {
  const { productos } = useInventario()
  const [categoria, setCategoria] = useState('Todas')

  // La lista filtrada se calcula en cada render: "productos" nunca se modifica
  const productosFiltrados =
    categoria === 'Todas'
      ? productos
      : productos.filter((producto) => producto.tipo === categoria)

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
        <>
          <div className="mb-4 flex flex-wrap items-end justify-between gap-4">
            <div>
              <label htmlFor="filtro-categoria" className="block text-sm font-medium">
                Filtrar por categoría
              </label>
              <select
                id="filtro-categoria"
                value={categoria}
                onChange={(evento) => setCategoria(evento.target.value)}
                className="mt-2 h-11 w-full rounded-md border border-control bg-superficie px-3 text-base outline-none focus:ring-2 focus:ring-tinta sm:w-64"
              >
                <option value="Todas">Todas</option>
                {tiposProducto.map((tipo) => (
                  <option key={tipo} value={tipo}>
                    {tipo}
                  </option>
                ))}
              </select>
            </div>
            {/* role="status" hace que los lectores de pantalla anuncien el cambio */}
            <p role="status" className="text-sm text-suave">
              Mostrando{' '}
              <span className="font-medium text-tinta tabular-nums">{productosFiltrados.length}</span>{' '}
              de <span className="tabular-nums">{productos.length}</span> artículos
            </p>
          </div>

          {productosFiltrados.length > 0 ? (
            <TablaProductos productos={productosFiltrados} />
          ) : (
            <div className="rounded-lg bg-superficie p-8">
              <h2 className="text-lg font-bold">No hay artículos en esta categoría</h2>
              <p className="mt-2 text-suave">
                Todavía no se registra ningún artículo de tipo {categoria}. Elige otra categoría o
                agrega uno nuevo.
              </p>
            </div>
          )}
        </>
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
