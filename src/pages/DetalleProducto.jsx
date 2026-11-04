import { Link, useParams } from 'react-router-dom'
import EncabezadoPagina from '../components/EncabezadoPagina'
import { useInventario } from '../context/InventarioContext'

const estiloVolver =
  'inline-flex h-11 items-center rounded-md bg-elevado px-5 font-medium transition-colors hover:bg-control focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tinta'

function DetalleProducto() {
  // El id llega como texto desde la URL, por eso se convierte a número
  const { id } = useParams()
  const { obtenerProducto } = useInventario()
  const producto = obtenerProducto(Number(id))

  if (!producto) {
    return (
      <>
        <EncabezadoPagina
          titulo="Artículo no encontrado"
          descripcion="No existe un artículo con esa dirección en el inventario."
        />
        <Link to="/inventario" className={estiloVolver}>
          Volver al inventario
        </Link>
      </>
    )
  }

  return (
    <>
      <EncabezadoPagina titulo={producto.nombre} descripcion={`${producto.marca} · ${producto.tipo}`} />

      <section
        aria-labelledby="titulo-detalle"
        className="max-w-2xl rounded-lg bg-superficie p-6 md:p-8"
      >
        <h2 id="titulo-detalle" className="text-lg font-bold">
          Detalle del artículo
        </h2>

        <dl className="mt-6 grid gap-6 sm:grid-cols-3">
          <div>
            <dt className="text-sm text-suave">Marca</dt>
            <dd className="mt-1 font-medium">{producto.marca}</dd>
          </div>
          <div>
            <dt className="text-sm text-suave">Tipo</dt>
            <dd className="mt-1 font-medium">{producto.tipo}</dd>
          </div>
          <div>
            <dt className="text-sm text-suave">Disponible</dt>
            <dd className="mt-1 font-medium tabular-nums">
              {producto.cantidad === 1 ? '1 unidad' : `${producto.cantidad} unidades`}
            </dd>
          </div>
        </dl>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link to="/inventario" className={estiloVolver}>
            Volver al inventario
          </Link>
        </div>
      </section>
    </>
  )
}

export default DetalleProducto
