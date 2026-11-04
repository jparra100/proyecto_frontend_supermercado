# Supermercado Los Aromos: gestión de inventario

## Descripción

Sitio web desarrollado con React para gestionar el inventario de un supermercado. Permite navegar entre
páginas informativas, registrar nuevos artículos mediante un formulario y consultar todos los artículos
en una tabla.

## Tecnologías

- **React 19**: construcción de la interfaz con componentes.
- **Vite**: entorno de desarrollo y compilación.
- **React Router**: navegación entre páginas sin recargar el sitio.
- **Context API de React (`createContext` + `useState`)**: estado global de los artículos.
- **Tailwind CSS v4**: framework CSS usado para los estilos de todo el sitio.

## Requisitos para ejecutar

- Node.js 20 o superior
- npm

## Instalación y ejecución

```bash
git clone https://github.com/jparra100/proyecto_frontend_supermercado.git
cd proyecto_frontend_supermercado
npm install
npm run dev
```

Luego abrir en el navegador la dirección que muestra la terminal (por defecto `http://localhost:5173`).

Otros comandos:

| Comando | Uso |
|---|---|
| `npm run build` | Genera la versión de producción en la carpeta `dist` |
| `npm run preview` | Muestra la versión de producción de forma local |
| `npm run lint` | Revisa el código con Oxlint |

## Estructura del proyecto

```
src/
├── main.jsx                  Punto de entrada: BrowserRouter e InventarioProvider
├── App.jsx                   Definición de rutas
├── index.css                 Tailwind CSS y colores del sitio
├── context/
│   └── InventarioContext.jsx Estado global de los artículos
├── data/                     Datos de ejemplo (productos, tipos, tiendas y fotos)
├── components/               Componentes reutilizables
│   ├── Layout.jsx
│   ├── MenuSuperior.jsx
│   ├── MenuInferior.jsx
│   ├── EncabezadoPagina.jsx
│   ├── CampoTexto.jsx
│   ├── TablaProductos.jsx
│   └── Foto.jsx
└── pages/                    Una vista por ruta
    ├── Home.jsx
    ├── QuienesSomos.jsx
    ├── NuestrasTiendas.jsx
    ├── Inventario.jsx
    ├── AgregarProducto.jsx
    └── NoEncontrada.jsx
```

## Créditos de las imágenes

Las fotografías provienen de Wikimedia Commons y se usan según sus licencias. Cada una muestra su
crédito en el sitio.

| Imagen | Autor | Licencia |
|---|---|---|
| [La Vega Central](https://commons.wikimedia.org/wiki/File:La_Vega_Central_(15747341503).jpg) | Eduardo Woo | CC BY-SA 2.0 |
| [La Vega Central en Santiago](https://commons.wikimedia.org/wiki/File:La_Vega_Central_en_Santiago.jpg) | Mx. Granger | CC0 |
| [Ajíes en la Vega Central](https://commons.wikimedia.org/wiki/File:Aj%C3%ADes_en_la_Vega_Central..jpg) | simenon | CC BY-SA 2.0 |
| [Avenida Irarrázaval, en la comuna de Ñuñoa](https://commons.wikimedia.org/wiki/File:Avenida_Irarr%C3%A1zaval,_en_la_comuna_de_%C3%91u%C3%B1oa,_en_Santiago_de_Chile.jpg) | Carlos Teixidor Cadenas | CC BY-SA 4.0 |
| [Pérgola Plaza Ñuñoa](https://commons.wikimedia.org/wiki/File:P%C3%A9rgola_Plaza_%C3%91u%C3%B1oa_-_A740204.jpg) | Rjcastillo | CC BY 4.0 |
