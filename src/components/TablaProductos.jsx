
function TablaProductos({ productos }) {
  return (
    <div className="overflow-x-auto rounded-lg bg-superficie">
      <table className="w-full text-left text-sm">
        <caption className="sr-only">Artículos del inventario</caption>
        <thead>
          <tr className="border-b border-borde text-suave">
            <th scope="col" className="w-1/2 px-4 py-3 md:px-6 font-normal">Nombre</th>
            <th scope="col" className="px-4 py-3 md:px-6 font-normal">Marca</th>
            <th scope="col" className="px-4 py-3 md:px-6 font-normal">Tipo</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id} className="h-11 border-b border-linea last:border-b-0">
              <td className="px-4 py-3 md:px-6 font-medium">{producto.nombre}</td>
              <td className="px-4 py-3 md:px-6">{producto.marca}</td>
              <td className="px-4 py-3 md:px-6 text-suave">{producto.tipo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TablaProductos
