import { createContext, useContext, useState } from 'react'
import productosIniciales from '../data/productosIniciales'


const InventarioContext = createContext(null)

export function InventarioProvider({ children }) {
  const [productos, setProductos] = useState(productosIniciales)


  function agregarProducto({ nombre, marca, tipo }) {
    const nuevoProducto = { id: Date.now(), nombre, marca, tipo }
    setProductos((listaActual) => [...listaActual, nuevoProducto])
  }

  function existeProducto(nombre, marca) {
    return productos.some(
      (producto) =>
        producto.nombre.toLowerCase() === nombre.toLowerCase() &&
        producto.marca.toLowerCase() === marca.toLowerCase(),
    )
  }

  return (
    <InventarioContext.Provider value={{ productos, agregarProducto, existeProducto }}>
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
