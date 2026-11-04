import { useState } from 'react'
import { Link } from 'react-router-dom'
import CampoTexto from '../components/CampoTexto'
import EncabezadoPagina from '../components/EncabezadoPagina'
import { useInventario } from '../context/InventarioContext'
import tiposProducto from '../data/tiposProducto'

const formularioVacio = { nombre: '', marca: '', tipo: '', cantidad: '' }


function validar(datos, existeProducto) {
  const errores = {}

  if (datos.nombre === '') {
    errores.nombre = 'Escribe el nombre del producto.'
  } else if (datos.nombre.length < 2 || datos.nombre.length > 50) {
    errores.nombre = 'El nombre debe tener entre 2 y 50 caracteres.'
  }

  if (datos.marca === '') {
    errores.marca = 'Escribe la marca del producto.'
  } else if (datos.marca.length < 2 || datos.marca.length > 50) {
    errores.marca = 'La marca debe tener entre 2 y 50 caracteres.'
  }

  if (!tiposProducto.includes(datos.tipo)) {
    errores.tipo = 'Elige el tipo de producto.'
  }

  if (datos.cantidad === '') {
    errores.cantidad = 'Escribe la cantidad disponible.'
  } else if (!/^\d+$/.test(datos.cantidad) || Number(datos.cantidad) < 1) {
    errores.cantidad = 'La cantidad debe ser un número entero mayor a 0.'
  }

  if (!errores.nombre && !errores.marca && existeProducto(datos.nombre, datos.marca)) {
    errores.nombre = 'Ya existe un producto con ese nombre y esa marca.'
  }

  return errores
}

function AgregarProducto() {
  const { productos, agregarProducto, existeProducto } = useInventario()
  const [formulario, setFormulario] = useState(formularioVacio)
  const [errores, setErrores] = useState({})
  const [mensajeExito, setMensajeExito] = useState('')

  function manejarCambio(evento) {
    const { name, value } = evento.target
    setFormulario({ ...formulario, [name]: value })
    setMensajeExito('')
  }

  function manejarEnvio(evento) {
    evento.preventDefault()

    const datos = {
      nombre: formulario.nombre.trim(),
      marca: formulario.marca.trim(),
      tipo: formulario.tipo,
      cantidad: formulario.cantidad.trim(),
    }

    const erroresEncontrados = validar(datos, existeProducto)
    setErrores(erroresEncontrados)

    if (Object.keys(erroresEncontrados).length > 0) {
      return
    }

    agregarProducto({ ...datos, cantidad: Number(datos.cantidad) })
    setMensajeExito(`Se agregó "${datos.nombre}" al inventario.`)
    setFormulario(formularioVacio)
  }

  
  const ultimosProductos = productos.slice(-5).reverse()

  return (
    <>
      <EncabezadoPagina
        titulo="Agregar producto"
        descripcion="Registra un artículo nuevo con su nombre, marca, tipo y cantidad disponible. Aparecerá de inmediato en la tabla del inventario."
      />

      <div className="grid gap-6 md:grid-cols-[3fr_2fr] md:items-start">
        <form
          onSubmit={manejarEnvio}
          noValidate
          aria-labelledby="titulo-formulario"
          className="space-y-6 rounded-lg bg-superficie p-6 md:p-8"
        >
          <h2 id="titulo-formulario" className="text-lg font-bold">
            Datos del producto
          </h2>

          <CampoTexto
            id="nombre"
            etiqueta="Nombre"
            valor={formulario.nombre}
            error={errores.nombre}
            onChange={manejarCambio}
            placeholder="Ej.: Azúcar granulada, 1 kg"
          />

          <CampoTexto
            id="marca"
            etiqueta="Marca"
            valor={formulario.marca}
            error={errores.marca}
            onChange={manejarCambio}
            placeholder="Ej.: Iansa"
          />

          <div>
            <label htmlFor="tipo" className="block text-sm font-medium">
              Tipo de producto
            </label>
            <select
              id="tipo"
              name="tipo"
              value={formulario.tipo}
              onChange={manejarCambio}
              aria-invalid={errores.tipo ? 'true' : 'false'}
              aria-describedby={errores.tipo ? 'tipo-error' : undefined}
              className={`mt-2 h-11 w-full rounded-md border bg-superficie px-3 text-base outline-none focus:ring-2 focus:ring-tinta ${
                errores.tipo ? 'border-negativo' : 'border-control'
              }`}
            >
              <option value="">Selecciona un tipo</option>
              {tiposProducto.map((tipo) => (
                <option key={tipo} value={tipo}>
                  {tipo}
                </option>
              ))}
            </select>
            {errores.tipo && (
              <p id="tipo-error" className="mt-1 text-sm text-negativo">
                {errores.tipo}
              </p>
            )}
          </div>

          <CampoTexto
            id="cantidad"
            etiqueta="Cantidad disponible"
            tipo="number"
            valor={formulario.cantidad}
            error={errores.cantidad}
            onChange={manejarCambio}
            placeholder="Ej.: 20"
          />

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="submit"
              className="h-11 rounded-md bg-accion px-6 font-medium text-white transition-colors hover:bg-tinta/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tinta active:scale-[0.98]"
            >
              Agregar al inventario
            </button>
            <Link
              to="/inventario"
              className="text-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tinta"
            >
              Ver inventario
            </Link>
          </div>

          {/* role="status" hace que los lectores de pantalla anuncien el mensaje */}
          <p role="status" className="text-sm font-medium text-positivo">
            {mensajeExito}
          </p>
        </form>

        <section aria-labelledby="titulo-ultimos" className="rounded-lg bg-superficie p-6 md:p-8">
          <h2 id="titulo-ultimos" className="text-lg font-bold">
            Últimos agregados
          </h2>
          <ul className="mt-4 space-y-4">
            {ultimosProductos.map((producto) => (
              <li key={producto.id}>
                <p className="font-medium">{producto.nombre}</p>
                <p className="text-sm text-suave">
                  {producto.marca} · {producto.tipo}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-suave">
            Total en inventario: <span className="font-medium text-tinta tabular-nums">{productos.length}</span>
          </p>
        </section>
      </div>
    </>
  )
}

export default AgregarProducto
