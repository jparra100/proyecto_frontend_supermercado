import { Link } from 'react-router-dom'
import Foto from '../components/Foto'
import { useInventario } from '../context/InventarioContext'
import fotos from '../data/fotos'
import tiposProducto from '../data/tiposProducto'

function Home() {
  const { productos } = useInventario()


  const conteoPorTipo = tiposProducto.map((tipo) => ({
    tipo,
    cantidad: productos.filter((producto) => producto.tipo === tipo).length,
  }))
  const mayorCantidad = Math.max(...conteoPorTipo.map((fila) => fila.cantidad), 1)

  return (
    <>
      <section className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
        <div>
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">Inventario de Los Aromos</h1>
          <p className="mt-6 max-w-xl text-lg">
            Sitio interno del Supermercado Los Aromos para registrar los artículos de nuestras
            tiendas y consultar qué hay en bodega.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/agregar"
              className="inline-flex h-11 items-center rounded-md bg-accion px-5 font-medium text-white transition-colors hover:bg-tinta/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tinta"
            >
              Agregar producto
            </Link>
            <Link
              to="/inventario"
              className="inline-flex h-11 items-center rounded-md bg-elevado px-5 font-medium transition-colors hover:bg-control focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tinta"
            >
              Ver inventario
            </Link>
          </div>
        </div>

        <section aria-labelledby="titulo-resumen" className="rounded-lg bg-superficie p-6 md:p-8">
          <h2 id="titulo-resumen" className="text-xl font-bold">
            <span className="text-4xl font-medium tabular-nums">{productos.length}</span> artículos en
            inventario
          </h2>

          <ul className="mt-6 space-y-3">
            {conteoPorTipo.map((fila) => (
              <li key={fila.tipo} className="grid grid-cols-[9.5rem_1fr_2rem] items-center gap-3">
                <span>{fila.tipo}</span>
                <span className="h-2 rounded-full bg-fondo">
                  <span
                    className="block h-2 rounded-full bg-dato"
                    style={{ width: `${(fila.cantidad / mayorCantidad) * 100}%` }}
                  />
                </span>
                <span className="text-right tabular-nums">{fila.cantidad}</span>
              </li>
            ))}
          </ul>
        </section>
      </section>

      <div className="mt-12">
        <Foto
          foto={fotos.puestoVega}
          descripcion="Frutas y verduras en La Vega Central, el mercado que abastece a los almacenes de Santiago"
          className="aspect-[4/3] md:aspect-[21/9]"
          prioridad
        />
      </div>

      <section aria-labelledby="titulo-conocenos" className="mt-20 grid gap-6 md:grid-cols-2">
        <h2 id="titulo-conocenos" className="text-xl font-bold md:col-span-2">
          Conoce el supermercado
        </h2>

        <Link
          to="/quienes-somos"
          className="block overflow-hidden rounded-lg bg-superficie transition-colors hover:bg-elevado focus-visible:outline-2 focus-visible:outline-tinta"
        >
          <img
            src={fotos.pergolaNunoa.src}
            alt=""
            loading="lazy"
            className="aspect-[16/9] w-full object-cover"
          />
          <span className="block p-6">
            <span className="block text-lg font-medium">Quiénes somos</span>
            <span className="mt-2 block text-suave">
              Nuestra historia desde 1987, la misión y los valores con que atendemos al barrio.
            </span>
            <span className="mt-4 block text-xs text-suave">
              Foto: {fotos.pergolaNunoa.autor}, {fotos.pergolaNunoa.licencia}, vía Wikimedia Commons.
            </span>
          </span>
        </Link>

        <Link
          to="/nuestras-tiendas"
          className="block overflow-hidden rounded-lg bg-superficie transition-colors hover:bg-elevado focus-visible:outline-2 focus-visible:outline-tinta"
        >
          <img
            src={fotos.irarrazaval.src}
            alt=""
            loading="lazy"
            className="aspect-[16/9] w-full object-cover"
          />
          <span className="block p-6">
            <span className="block text-lg font-medium">Nuestras tiendas</span>
            <span className="mt-2 block text-suave">
              Dirección, horario y teléfono de las cuatro sucursales en Santiago.
            </span>
            <span className="mt-4 block text-xs text-suave">
              Foto: {fotos.irarrazaval.autor}, {fotos.irarrazaval.licencia}, vía Wikimedia Commons.
            </span>
          </span>
        </Link>
      </section>
    </>
  )
}

export default Home
