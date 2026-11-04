import { createContext, useContext, useState } from 'react'
import productosIniciales from '../data/productosIniciales'


const InventarioContext = createContext(null)

export function InventarioProvider({ children }) {
  const [productos, setProductos] = useState(productosIniciales)


  function agregarProducto({ nombre, marca, tipo, cantidad }) {
    const nuevoProducto = { id: Date.now(), nombre, marca, tipo, cantidad }
    setProductos((listaActual) => [...listaActual, nuevoProducto])
  }

  // Busca un producto por su id (devuelve undefined si no existe)
  function obtenerProducto(id) {
    return productos.find((producto) => producto.id === id)
  }

  // Suma o resta unidades al stock de un producto. Si "diferencia" es negativa, resta.
  function cambiarStock(id, diferencia) {
    setProductos((listaActual) =>
      listaActual.map((producto) =>
        producto.id === id ? { ...producto, cantidad: producto.cantidad + diferencia } : producto,
      ),
    )
  }

  function existeProducto(nombre, marca) {
    return productos.some(
      (producto) =>
        producto.nombre.toLowerCase() === nombre.toLowerCase() &&
        producto.marca.toLowerCase() === marca.toLowerCase(),
    )
  }

  return (
    <InventarioContext.Provider
      value={{ productos, agregarProducto, existeProducto, obtenerProducto, cambiarStock }}
    >
      {children}
    </InventarioContext.Provider>
  )
}

// Hook para usar el inventario desde cualquier componente
export function useInventario() {
  const contexto = useContext(InventarioContext)
  if (!contexto) {
    throw new Error('useInventario debe usarse dentro de <InventarioProvider>')
  }
  return contexto
}
