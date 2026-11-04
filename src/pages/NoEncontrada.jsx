import { Link } from 'react-router-dom'
import EncabezadoPagina from '../components/EncabezadoPagina'

function NoEncontrada() {
  return (
    <>
      <EncabezadoPagina
        titulo="Página no encontrada"
        descripcion="La dirección que escribiste no existe en el sitio."
      />
      <Link
        to="/"
        className="inline-block rounded-md bg-accion px-5 py-2.5 font-medium text-white hover:bg-tinta/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tinta"
      >
        Volver al inicio
      </Link>
    </>
  )
}

export default NoEncontrada
