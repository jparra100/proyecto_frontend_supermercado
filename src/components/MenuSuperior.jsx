import { NavLink } from 'react-router-dom'

const enlaces = [
  { ruta: '/inventario', texto: 'Inventario' },
  { ruta: '/agregar', texto: 'Agregar producto' },
]

function MenuSuperior() {
  return (
    <nav aria-label="Menú del inventario">
      <ul className="flex gap-1">
        {enlaces.map((enlace) => (
          <li key={enlace.ruta}>
            <NavLink
              to={enlace.ruta}
              className={({ isActive }) =>
                `block rounded-md px-3 py-2 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-tinta ${
                  isActive ? 'bg-elevado font-medium text-tinta' : 'text-suave hover:text-tinta'
                }`
              }
            >
              {enlace.texto}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default MenuSuperior
