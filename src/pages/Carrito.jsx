import { Link } from 'react-router-dom'
import EncabezadoPagina from '../components/EncabezadoPagina'
import FilaCarrito from '../components/FilaCarrito'
import { useCarrito } from '../context/CarritoContext'
import { useInventario } from '../context/InventarioContext'

function Carrito() {
  const { items, totalUnidades, agregarAlCarrito, disminuirCantidad } = useCarrito()
  const { obtenerProducto } = useInventario()

  return (
    <>
      <EncabezadoPagina
        titulo="Carrito"
        descripcion="Revisa los artículos que agregaste y ajusta sus cantidades. El inventario se actualiza al instante."
      />

      {items.length > 0 ? (
        <section aria-labelledby="titulo-carrito">
          <h2 id="titulo-carrito" className="sr-only">
            Artículos en el carrito
          </h2>
          <div className="overflow-x-auto rounded-lg bg-superficie">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">Artículos del carrito</caption>
              <thead>
                <tr className="border-b border-borde text-suave">
                  <th scope="col" className="px-4 py-3 md:px-6 font-normal">Artículo</th>
                  <th scope="col" className="px-4 py-3 md:px-6 text-right font-normal">Cantidad</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <FilaCarrito
                    key={item.id}
                    producto={obtenerProducto(item.id)}
                    cantidad={item.cantidad}
                    onAumentar={() => agregarAlCarrito(item.id)}
                    onDisminuir={() => disminuirCantidad(item.id)}
                  />
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-suave">
            Total de unidades: <span className="font-medium text-tinta tabular-nums">{totalUnidades}</span>
          </p>
        </section>
      ) : (
        <div className="max-w-2xl rounded-lg bg-superficie p-8">
          <h2 className="text-lg font-bold">Tu carrito está vacío</h2>
          <p className="mt-2 text-suave">
            Entra al detalle de un artículo del inventario para agregarlo al carrito.
          </p>
          <Link
            to="/inventario"
            className="mt-6 inline-flex h-11 items-center rounded-md bg-accion px-5 font-medium text-white transition-colors hover:bg-tinta/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tinta"
          >
            Ver inventario
          </Link>
        </div>
      )}
    </>
  )
}

export default Carrito
