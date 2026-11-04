import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { CarritoProvider } from './context/CarritoContext'
import { InventarioProvider } from './context/InventarioContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* HashRouter guarda la ruta después del "#", así GitHub Pages no da error 404 al recargar */}
    <HashRouter>
      {/* InventarioProvider comparte la lista de productos con todas las páginas */}
      <InventarioProvider>
        {/* CarritoProvider va dentro del inventario porque necesita descontar stock */}
        <CarritoProvider>
          <App />
        </CarritoProvider>
      </InventarioProvider>
    </HashRouter>
  </StrictMode>,
)
