# Website Data Driven Schools

Sitio estático, responsive y fácil de editar.

## Archivos

- `index.html`: estructura de la página.
- `styles.css`: diseño, colores, tipografías y responsividad.
- `content.js`: **todo el contenido editable**.
- `script.js`: render y funciones. Normalmente no necesitas modificarlo.
- `single-file.html`: versión completa en un solo archivo.
- `assets/`: coloca aquí el logo y las imágenes.

## Edición rápida

Abre `content.js` con un editor de texto. Allí puedes cambiar:

- títulos y párrafos;
- servicios;
- talleres;
- casos;
- artículos;
- datos de contacto;
- enlaces;
- visibilidad de secciones.

Para mostrar testimonios:

```js
testimonials: {
  show: true,
```

Para ocultar casos, filosofía o artículos, cambia su propiedad `show` a `false`.

## Logo

1. Copia el logo a `assets/logo.png`.
2. En `content.js`, cambia:

```js
showLogoImage: true,
```

Si permanece en `false`, se mostrará el nombre de la marca en texto.

## Formulario

Por defecto, el formulario abre la aplicación de correo del visitante.

Para conectarlo con Formspree, Netlify Forms u otro servicio, coloca el endpoint en:

```js
formEndpoint: "https://formspree.io/f/XXXXXXXX"
```

## Publicación

Puedes subir la carpeta completa a cualquier hosting estático:

- Hostinger
- GoDaddy
- Netlify
- Cloudflare Pages
- GitHub Pages
- servidor propio

También puedes usar `single-file.html` cuando la plataforma permita pegar HTML completo.

## WordPress, Wix, Squarespace o similares

- Usa el contenido como base en el constructor visual.
- Para código personalizado, pega `single-file.html` en una página HTML o bloque de código que permita `<style>` y `<script>`.
- Algunos constructores bloquean JavaScript; en ese caso conviene subir la versión modular como página independiente o pedir al desarrollador que la integre en el tema.

## Colores

Los colores se editan al principio de `styles.css`:

```css
:root {
  --dds-navy: #102a43;
  --dds-blue: #2057d4;
  --dds-cyan: #2b9eb3;
}
```

## Enlaces de artículos

En `content.js`, reemplaza los valores `url: "#"` por el enlace real de cada publicación.
