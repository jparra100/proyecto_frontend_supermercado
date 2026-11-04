import EncabezadoPagina from '../components/EncabezadoPagina'
import Foto from '../components/Foto'
import fotos from '../data/fotos'
import tiendas from '../data/tiendas'

function NuestrasTiendas() {
  return (
    <>
      <EncabezadoPagina
        titulo="Nuestras tiendas"
        descripcion={`Tenemos ${tiendas.length} sucursales en Santiago. Revisa la dirección y el horario de la más cercana.`}
      />

      <div className="mb-16">
        <Foto
          foto={fotos.irarrazaval}
          descripcion="Avenida Irarrázaval en Ñuñoa, la calle de nuestra tienda Centro"
          className="aspect-[4/3] md:aspect-[21/9]"
          prioridad
        />
      </div>

      <section aria-labelledby="titulo-sucursales">
        <h2 id="titulo-sucursales" className="mb-6 text-2xl font-bold">
          Sucursales y horarios
        </h2>
        <ul className="space-y-2">
          {tiendas.map((tienda) => (
            <li
              key={tienda.id}
              className="grid gap-2 rounded-lg bg-superficie p-6 md:grid-cols-[1.2fr_1fr_1fr_auto] md:items-center md:gap-6"
            >
              <div>
                <h3 className="text-lg font-medium">{tienda.nombre}</h3>
                <p className="text-suave">{tienda.comuna}</p>
              </div>
              <p>{tienda.direccion}</p>
              <p className="text-suave">{tienda.horario}</p>
              <a
                href={`tel:${tienda.telefono.replaceAll(' ', '')}`}
                className="tabular-nums underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tinta"
              >
                {tienda.telefono}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default NuestrasTiendas
