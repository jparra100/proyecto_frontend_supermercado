# Supermercado Los Aromos: gestión de inventario

## Descripción

Sitio web hecho con React para gestionar el inventario de un supermercado. Permite agregar artículos,
verlos en una lista, filtrarlos por categoría, revisar su detalle y llevarlos a un carrito. Cada vez que
se agrega o se quita un artículo del carrito, el inventario se actualiza.

Sitio publicado: https://jparra100.github.io/proyecto_frontend_supermercado/

## Funciones

- **Inventario:** tabla con todos los artículos y su cantidad disponible.
- **Filtro por categoría:** muestra solo los artículos de la categoría elegida, sin perder la lista original.
- **Detalle del artículo:** al hacer clic en un artículo se ve su información y se puede agregar al carrito.
- **Carrito:** lista los artículos agregados y permite aumentar o disminuir sus cantidades.
- **Agregar producto:** formulario con validaciones para registrar un artículo nuevo.

## Páginas

| Dirección | Página |
|---|---|
| `#/` | Inicio |
| `#/inventario` | Lista de artículos con filtro |
| `#/inventario/:id` | Detalle de un artículo |
| `#/carrito` | Carrito de compras |
| `#/agregar` | Formulario para agregar un artículo |
| `#/quienes-somos` | Quiénes somos |
| `#/nuestras-tiendas` | Nuestras tiendas |

## Tecnologías

- **React 19** y **Vite**
- **React Router** para la navegación
- **Context API** para el estado global (inventario y carrito)
- **Tailwind CSS v4** para los estilos

## Cómo ejecutarlo

Se necesita Node.js 20 o superior.

```bash
git clone https://github.com/jparra100/proyecto_frontend_supermercado.git
cd proyecto_frontend_supermercado
npm install
npm run dev
```

Luego se abre en el navegador la dirección que muestra la terminal:
`http://localhost:5173/proyecto_frontend_supermercado/`

| Comando | Uso |
|---|---|
| `npm run build` | Genera la versión de producción en `dist` |
| `npm run lint` | Revisa el código |
| `npm run deploy` | Publica el sitio en GitHub Pages |

## Estructura del proyecto

```
src/
├── main.jsx          Punto de entrada
├── App.jsx           Rutas del sitio
├── context/          Estado global: InventarioContext y CarritoContext
├── data/             Datos de ejemplo (productos, categorías, tiendas y fotos)
├── components/       Componentes reutilizables (menús, tabla, fila del carrito, etc.)
└── pages/            Una página por ruta
```

## Créditos de las imágenes

Las fotografías provienen de Wikimedia Commons y se usan según sus licencias.

| Imagen | Autor | Licencia |
|---|---|---|
| [La Vega Central](https://commons.wikimedia.org/wiki/File:La_Vega_Central_(15747341503).jpg) | Eduardo Woo | CC BY-SA 2.0 |
| [La Vega Central en Santiago](https://commons.wikimedia.org/wiki/File:La_Vega_Central_en_Santiago.jpg) | Mx. Granger | CC0 |
| [Ajíes en la Vega Central](https://commons.wikimedia.org/wiki/File:Aj%C3%ADes_en_la_Vega_Central..jpg) | simenon | CC BY-SA 2.0 |
| [Avenida Irarrázaval, en la comuna de Ñuñoa](https://commons.wikimedia.org/wiki/File:Avenida_Irarr%C3%A1zaval,_en_la_comuna_de_%C3%91u%C3%B1oa,_en_Santiago_de_Chile.jpg) | Carlos Teixidor Cadenas | CC BY-SA 4.0 |
| [Pérgola Plaza Ñuñoa](https://commons.wikimedia.org/wiki/File:P%C3%A9rgola_Plaza_%C3%91u%C3%B1oa_-_A740204.jpg) | Rjcastillo | CC BY 4.0 |
