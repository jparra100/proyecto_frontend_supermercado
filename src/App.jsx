import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import QuienesSomos from './pages/QuienesSomos'
import NuestrasTiendas from './pages/NuestrasTiendas'
import Inventario from './pages/Inventario'
import DetalleProducto from './pages/DetalleProducto'
import AgregarProducto from './pages/AgregarProducto'
import Carrito from './pages/Carrito'
import NoEncontrada from './pages/NoEncontrada'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="quienes-somos" element={<QuienesSomos />} />
        <Route path="nuestras-tiendas" element={<NuestrasTiendas />} />
        <Route path="inventario" element={<Inventario />} />
        <Route path="inventario/:id" element={<DetalleProducto />} />
        <Route path="agregar" element={<AgregarProducto />} />
        <Route path="carrito" element={<Carrito />} />
        <Route path="*" element={<NoEncontrada />} />
      </Route>
    </Routes>
  )
}

export default App
