
// Las imágenes están en public/img. BASE_URL agrega la carpeta del sitio en GitHub Pages
const base = import.meta.env.BASE_URL

const fotos = {
  puestoVega: {
    src: `${base}img/la-vega-central-15747341503.jpg`,
    ancho: 1920,
    alto: 1278,
    alt: 'Vendedor ordena racimos de uva junto a tomates en un puesto de La Vega Central',
    titulo: 'La Vega Central',
    autor: 'Eduardo Woo',
    licencia: 'CC BY-SA 2.0',
    licenciaUrl: 'https://creativecommons.org/licenses/by-sa/2.0',
    fuente: 'https://commons.wikimedia.org/wiki/File:La_Vega_Central_(15747341503).jpg',
  },
  vegaGeneral: {
    src: `${base}img/la-vega-central-en-santiago.jpg`,
    ancho: 1920,
    alto: 1440,
    alt: 'Pasillo de La Vega Central lleno de gente comprando tomates, paltas y verduras',
    titulo: 'La Vega Central en Santiago',
    autor: 'Mx. Granger',
    licencia: 'CC0',
    licenciaUrl: 'https://creativecommons.org/publicdomain/zero/1.0/deed.es',
    fuente: 'https://commons.wikimedia.org/wiki/File:La_Vega_Central_en_Santiago.jpg',
  },
  ajies: {
    src: `${base}img/ajies-en-la-vega-central.jpg`,
    ancho: 1920,
    alto: 1285,
    alt: 'Canasto de ajíes rojos con un letrero de pizarra que marca su precio',
    titulo: 'Ajíes en la Vega Central',
    autor: 'simenon',
    licencia: 'CC BY-SA 2.0',
    licenciaUrl: 'https://creativecommons.org/licenses/by-sa/2.0',
    fuente: 'https://commons.wikimedia.org/wiki/File:Aj%C3%ADes_en_la_Vega_Central..jpg',
  },
  irarrazaval: {
    src: `${base}img/avenida-irarrazaval-en-la-comuna-de-nunoa.jpg`,
    ancho: 1920,
    alto: 1440,
    alt: 'Avenida Irarrázaval con locales comerciales y la cordillera nevada al fondo',
    titulo: 'Avenida Irarrázaval, en la comuna de Ñuñoa',
    autor: 'Carlos Teixidor Cadenas',
    licencia: 'CC BY-SA 4.0',
    licenciaUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
    fuente:
      'https://commons.wikimedia.org/wiki/File:Avenida_Irarr%C3%A1zaval,_en_la_comuna_de_%C3%91u%C3%B1oa,_en_Santiago_de_Chile.jpg',
  },
  pergolaNunoa: {
    src: `${base}img/pergola-plaza-nunoa-a740204.jpg`,
    ancho: 1920,
    alto: 1395,
    alt: 'Pérgola de muros amarillos y rojos con techo de tejas en la Plaza Ñuñoa',
    titulo: 'Pérgola Plaza Ñuñoa',
    autor: 'Rjcastillo',
    licencia: 'CC BY 4.0',
    licenciaUrl: 'https://creativecommons.org/licenses/by/4.0',
    fuente: 'https://commons.wikimedia.org/wiki/File:P%C3%A9rgola_Plaza_%C3%91u%C3%B1oa_-_A740204.jpg',
  },
}

export default fotos
