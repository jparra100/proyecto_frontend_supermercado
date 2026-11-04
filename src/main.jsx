import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { InventarioProvider } from './context/InventarioContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* BrowserRouter habilita la navegación con React Router en toda la app */}
    <BrowserRouter>
      {/* InventarioProvider comparte la lista de productos con todas las páginas */}
      <InventarioProvider>
        <App />
      </InventarioProvider>
    </BrowserRouter>
  </StrictMode>,
)
