const estiloBoton =
  'h-11 w-11 rounded-md bg-elevado text-lg transition-colors hover:bg-control focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tinta disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-elevado'

// Una fila del carrito: datos del artículo y botones para cambiar la cantidad
function FilaCarrito({ producto, cantidad, onAumentar, onDisminuir }) {
  return (
    <tr className="border-b border-linea last:border-b-0">
      <td className="px-4 py-3 md:px-6">
        <p className="font-medium">{producto.nombre}</p>
        <p className="text-suave">
          {producto.marca} · Quedan <span className="tabular-nums">{producto.cantidad}</span> en inventario
        </p>
      </td>
      <td className="px-4 py-3 md:px-6">
        <div className="flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={onDisminuir}
            aria-label={`Quitar una unidad de ${producto.nombre}`}
            className={estiloBoton}
          >
            −
          </button>
          <span className="w-8 text-center font-medium tabular-nums">{cantidad}</span>
          <button
            type="button"
            onClick={onAumentar}
            disabled={producto.cantidad < 1}
            aria-label={`Agregar una unidad de ${producto.nombre}`}
            className={estiloBoton}
          >
            +
          </button>
        </div>
      </td>
    </tr>
  )
}

export default FilaCarrito
