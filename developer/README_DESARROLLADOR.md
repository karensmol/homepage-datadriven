# Data Driven Schools — paquete de desarrollo

## Estado
Este paquete contiene una versión lista para publicar como sitio estático responsive con formulario PHP opcional. Está construido con HTML, CSS y JavaScript sin framework, para que pueda subirse a prácticamente cualquier hosting.

## Dominio objetivo
`https://www.datadrivenschools.mx/`

Si se publicará en otro dominio, reemplazar el dominio en:
- `<link rel="canonical">` de cada página
- `robots.txt`
- `sitemap.xml`
- datos estructurados JSON-LD del home

## Arquitectura pública
- `/` — Inicio
- `/servicios/` — Servicios
- `/nosotros/` — Nosotros
- `/articulos/` — Artículos
- `/conversemos/` — Conversemos
- `/privacidad/` — Aviso de privacidad

No mostrar la sigla “DDS” como marca pública. Usar siempre **Data Driven Schools** o el logo oficial.

## Identidad visual cerrada
- Navy: `#0b3154`
- Crema: `#f8f3e9`
- Turquesa: `#1d9cab`
- Dorado: `#b99049`
- No incorporar verde/savia.
- Serif editorial para titulares (Cormorant Garamond con fallback Georgia).
- Sans serif limpia para cuerpo (Inter con fallback Arial).
- Mantener espacios amplios, jerarquía tipográfica alta y animación sobria.

## Imágenes
- Logo oficial: `/assets/img/logo-data-driven-schools.png`
- Foto provisional Karen: `/assets/img/karen-smolensky.jpg`

La foto está implementada en contenedores 4:5 con `object-fit: cover`; puede sustituirse por una foto nueva conservando exactamente el mismo nombre de archivo y sin tocar el layout.

## Formulario
El formulario envía a `/contact.php`.
- Requiere PHP y `mail()` habilitado.
- Si el hosting usa SMTP, Formspree, HubSpot, Brevo, Mailchimp u otro backend, sustituir solamente el endpoint del formulario y/o el archivo `contact.php`.
- Antes de producción, revisar el remitente `web@datadrivenschools.mx` para asegurar SPF/DKIM/DMARC.
- El aviso de privacidad incluido es **provisional** y debe sustituirse por el texto legal aprobado antes de activar el formulario.

## CMS — requisito aprobado
La intención es que el sitio sea administrable mediante **CMS estructurado**: contenido editable y diseño protegido.

Campos que deben quedar editables desde CMS:
- Inicio: textos, situaciones de “¿Te pasa?”, banner de valor, tarjetas de servicios, foto de Karen.
- Servicios: textos, diagnóstico, dimensiones 360°, talleres/capacitaciones, CTAs.
- Nosotros: textos de Nuestra mirada, Karen, historia y visión, foto.
- Artículos: alta/baja de artículos, título, extracto, categoría, imagen, fecha, URL, enlace externo/interno, SEO.
- Conversemos: datos de contacto y opciones del formulario.
- SEO: title, meta description, OG title/description/image, canonical cuando corresponda.

Este paquete no impone un proveedor de CMS porque depende del hosting contratado. Se recomienda:
- WordPress con campos estructurados (ACF) si el dominio ya usa WordPress.
- Decap CMS / Git-based CMS si el hosting es Netlify/Cloudflare/GitHub.
- Sanity, Contentful o similar si se desea headless CMS.

### Artículos ya desacoplados
La página `/articulos/` lee `/content/articles.json` en tiempo real. Esto permite incorporar nuevos artículos sin tocar el HTML. Un CMS puede editar directamente este archivo o reemplazarlo por su API.

## SEO implementado
- titles únicos
- meta descriptions
- canonical
- sitemap.xml
- robots.txt
- datos estructurados Organization en home
- HTML semántico
- H1 único por página
- URLs limpias por carpeta

### Pendiente del desarrollador
1. Verificar Google Search Console y subir sitemap.
2. Configurar favicon/OG image definitiva.
3. Conectar Analytics/Tag Manager solo si Karen lo solicita.
4. Optimizar imágenes a WebP/AVIF en producción manteniendo fallback.
5. Verificar Core Web Vitals.

## Interacciones
- Header sticky.
- Menú responsive.
- Aparición progresiva al hacer scroll.
- En `Servicios > Nuestro enfoque`, los 4 elementos se revelan gradualmente y se construyen visualmente; no es carrusel y no cambia de página automáticamente.
- `prefers-reduced-motion` desactiva animaciones para accesibilidad.

## QA antes de publicar
- Chrome, Edge, Safari, Firefox.
- iOS + Android.
- Desktop 1440/1920 px, tablet, móvil 375/390 px.
- Comprobar todos los enlaces y anchors.
- Comprobar formulario y correo de recepción.
- Comprobar contraste y navegación con teclado.
- Comprobar que ningún texto público use “DDS”.
- Confirmar logo oficial y foto definitiva.
- Sustituir aviso de privacidad provisional.
- Verificar que no haya contenido de prueba ni URLs `#`.

## Publicación básica
Subir el contenido de esta carpeta a la raíz pública del dominio (`public_html`, `www`, `htdocs` o equivalente). En Apache, conservar `.htaccess`.

## Nota importante
Las marcas IELTS, TOEFL, College Board, Innovamat e IB aparecen únicamente como ejemplos de fuentes/evaluaciones institucionales. No deben presentarse como alianzas, certificaciones o avales de Data Driven Schools.
