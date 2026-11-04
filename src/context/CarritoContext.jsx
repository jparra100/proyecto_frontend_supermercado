import { createContext, useContext, useState } from 'react'
import { useInventario } from './InventarioContext'

const CarritoContext = createContext(null)

export function CarritoProvider({ children }) {
  const { obtenerProducto, cambiarStock } = useInventario()
  // Cada artículo del carrito guarda solo su id y cuántas unidades lleva: { id, cantidad }
  const [items, setItems] = useState([])

  function cantidadEnCarrito(id) {
    const item = items.find((elemento) => elemento.id === id)
    return item ? item.cantidad : 0
  }

  // Suma una unidad al carrito y la resta del inventario (si todavía queda stock)
  function agregarAlCarrito(id) {
    const producto = obtenerProducto(id)
    if (!producto || producto.cantidad < 1) {
      return
    }

    cambiarStock(id, -1)
    setItems((listaActual) =>
      listaActual.some((item) => item.id === id)
        ? listaActual.map((item) => (item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item))
        : [...listaActual, { id, cantidad: 1 }],
    )
  }

  // Quita una unidad del carrito y la devuelve al inventario. Si queda en 0, sale del carrito.
  function disminuirCantidad(id) {
    const item = items.find((elemento) => elemento.id === id)
    if (!item) {
      return
    }

    cambiarStock(id, 1)
    setItems((listaActual) =>
      item.cantidad === 1
        ? listaActual.filter((elemento) => elemento.id !== id)
        : listaActual.map((elemento) =>
            elemento.id === id ? { ...elemento, cantidad: elemento.cantidad - 1 } : elemento,
          ),
    )
  }

  const totalUnidades = items.reduce((total, item) => total + item.cantidad, 0)

  return (
    <CarritoContext.Provider
      value={{ items, totalUnidades, cantidadEnCarrito, agregarAlCarrito, disminuirCantidad }}
    >
      {children}
    </CarritoContext.Provider>
  )
}

// Hook para usar el carrito desde cualquier componente
export function useCarrito() {
  const contexto = useContext(CarritoContext)
  if (!contexto) {
    throw new Error('useCarrito debe usarse dentro de <CarritoProvider>')
  }
  return contexto
}
