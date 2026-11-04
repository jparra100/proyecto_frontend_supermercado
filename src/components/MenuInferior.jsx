import { NavLink } from 'react-router-dom'


const enlaces = [
  { ruta: '/', texto: 'Inicio' },
  { ruta: '/quienes-somos', texto: 'Quiénes somos' },
  { ruta: '/nuestras-tiendas', texto: 'Nuestras tiendas' },
]

function MenuInferior() {
  return (
    <nav
      aria-label="Menú inferior"
      className="fixed inset-x-0 bottom-0 z-10 bg-superficie"
    >
      <ul className="mx-auto flex max-w-6xl justify-around gap-2 px-4 py-2 md:justify-center md:gap-4">
        {enlaces.map((enlace) => (
          <li key={enlace.ruta}>
            <NavLink
              to={enlace.ruta}
              end
              className={({ isActive }) =>
                `block rounded-md px-4 py-2 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-tinta ${
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

export default MenuInferior
