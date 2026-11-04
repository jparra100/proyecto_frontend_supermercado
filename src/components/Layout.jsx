import { Link, Outlet } from 'react-router-dom'
import MenuInferior from './MenuInferior'
import MenuSuperior from './MenuSuperior'

function Layout() {
  return (
    <div className="flex min-h-dvh flex-col">
      <header className="bg-superficie">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-4 py-2 md:px-8">
          <Link to="/" className="py-2 text-base font-bold tracking-tight">
            Supermercado Los Aromos
          </Link>
          <MenuSuperior />
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 pt-10 md:px-8 md:pt-16">
        <Outlet />
      </main>

      {/* Pie de página. pb-24 deja espacio para el menú inferior fijo */}
      <footer className="mt-24 bg-superficie">
        <div className="mx-auto max-w-6xl px-4 pt-10 pb-24 md:px-8">
          <p className="text-lg font-bold">Supermercado Los Aromos</p>
          <p className="mt-1 text-sm text-suave">Sitio interno de gestión de inventario.</p>
        </div>
      </footer>

      <MenuInferior />
    </div>
  )
}

export default Layout
