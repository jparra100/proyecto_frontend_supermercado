import EncabezadoPagina from '../components/EncabezadoPagina'
import Foto from '../components/Foto'
import fotos from '../data/fotos'

const valores = [
  { nombre: 'Cercanía', detalle: 'Conocemos a nuestros clientes por su nombre y atendemos sus pedidos especiales.' },
  { nombre: 'Frescura', detalle: 'Frutas, verduras y pan llegan cada mañana desde proveedores de la zona central.' },
  { nombre: 'Precio justo', detalle: 'Mantenemos una canasta básica con precios revisados todas las semanas.' },
  { nombre: 'Orden', detalle: 'Un inventario al día evita quiebres de stock y productos vencidos en góndola.' },
]

function QuienesSomos() {
  return (
    <>
      <EncabezadoPagina
        titulo="Quiénes somos"
        descripcion="Un supermercado de barrio que nació como almacén familiar en Ñuñoa y hoy atiende cuatro comunas de Santiago."
      />

      <section aria-labelledby="titulo-historia" className="grid gap-8 md:grid-cols-2 md:items-center md:gap-12">
        <div>
          <h2 id="titulo-historia" className="text-2xl font-bold">
            Nuestra historia
          </h2>
          <div className="mt-4 space-y-4 text-lg leading-relaxed">
            <p>
              Los Aromos abrió en 1987 como un almacén de 40 metros cuadrados en la esquina de
              Irarrázaval con Los Aromos. Vendía pan, abarrotes y verduras a las familias del barrio.
            </p>
            <p>
              Con los años sumamos lácteos, carnes y productos de limpieza, y abrimos sucursales en
              La Reina, Macul y Providencia. Seguimos siendo una empresa familiar.
            </p>
          </div>
        </div>
        <Foto foto={fotos.pergolaNunoa} descripcion="La pérgola de la Plaza Ñuñoa, la comuna donde nacimos" prioridad />
      </section>

      <section aria-labelledby="titulo-mision" className="mt-20 grid gap-6 md:grid-cols-2 md:gap-12">
        <div className="rounded-lg bg-superficie p-6 md:p-8">
          <h2 id="titulo-mision" className="text-2xl font-bold">
            Misión
          </h2>
          <p className="mt-4 text-lg leading-relaxed">
            Ofrecer a cada barrio los productos de todos los días, frescos y a buen precio, con la
            atención cercana de un almacén.
          </p>
        </div>
        <div className="rounded-lg bg-superficie p-6 md:p-8">
          <h2 className="text-2xl font-bold">Visión</h2>
          <p className="mt-4 text-lg leading-relaxed">
            Ser el supermercado de confianza de las comunas donde estamos, con tiendas ordenadas y
            un inventario siempre al día.
          </p>
        </div>
      </section>

      <div className="mt-20">
        <Foto
          foto={fotos.vegaGeneral}
          descripcion="La Vega Central, el mercado mayorista donde se abastecen los almacenes de Santiago"
          className="aspect-[4/3] md:aspect-[21/9]"
        />
      </div>

      <section aria-labelledby="titulo-valores" className="mt-20 grid gap-8 md:grid-cols-2 md:items-center md:gap-12">
        <div>
          <h2 id="titulo-valores" className="text-2xl font-bold">
            Nuestros valores
          </h2>
          <dl className="mt-6 space-y-6">
            {valores.map((valor) => (
              <div key={valor.nombre}>
                <dt className="text-lg font-medium">{valor.nombre}</dt>
                <dd className="mt-1">{valor.detalle}</dd>
              </div>
            ))}
          </dl>
        </div>
        <Foto foto={fotos.ajies} descripcion="Ajíes a granel en un puesto de La Vega Central" />
      </section>
    </>
  )
}

export default QuienesSomos
