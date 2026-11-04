// Campo de texto con etiqueta y mensaje de error. Se reutiliza en el formulario.
function CampoTexto({ id, etiqueta, valor, error, onChange, placeholder, tipo = 'text' }) {
  const idError = `${id}-error`

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium">
        {etiqueta}
      </label>
      <input
        id={id}
        name={id}
        type={tipo}
        value={valor}
        onChange={onChange}
        placeholder={placeholder}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? idError : undefined}
        className={`mt-2 h-11 w-full rounded-md border bg-superficie px-3 text-base outline-none focus:ring-2 focus:ring-tinta ${
          error ? 'border-negativo' : 'border-control'
        }`}
      />
      {error && (
        <p id={idError} className="mt-1 text-sm text-negativo">
          {error}
        </p>
      )}
    </div>
  )
}

export default CampoTexto
