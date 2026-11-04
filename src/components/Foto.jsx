
function Foto({ foto, descripcion, className = 'aspect-[4/3]', prioridad = false }) {
  return (
    <figure>
      <img
        src={foto.src}
        width={foto.ancho}
        height={foto.alto}
        alt={foto.alt}
        loading={prioridad ? 'eager' : 'lazy'}
        decoding="async"
        className={`w-full rounded-lg bg-elevado object-cover ${className}`}
      />
      <figcaption className="mt-2 text-sm text-suave">
        {descripcion && <span className="text-tinta">{descripcion}. </span>}
        Foto:{' '}
        <a href={foto.fuente} className="underline-offset-2 hover:underline" target="_blank" rel="noreferrer">
          {foto.autor}
        </a>
        ,{' '}
        <a href={foto.licenciaUrl} className="underline-offset-2 hover:underline" target="_blank" rel="noreferrer">
          {foto.licencia}
        </a>
        , vía Wikimedia Commons.
      </figcaption>
    </figure>
  )
}

export default Foto
