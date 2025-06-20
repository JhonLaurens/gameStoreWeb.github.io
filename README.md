# GameStoreWeb 🎮

## Descripción General 📜

GameStoreWeb es un proyecto de tienda en línea frontend para la venta de videojuegos. Permite a los usuarios navegar por un catálogo de juegos, ver detalles de los productos, agregarlos a un carrito de compras y simular un proceso de pago. El sitio también incluye páginas informativas sobre servicios (trucos, tutoriales, videos) y una página de contacto.

Este repositorio contiene todo el código fuente (HTML, CSS, JavaScript) y los assets (imágenes) necesarios para desplegar y ejecutar la tienda web.

## Características Principales ✨

*   **Catálogo de Productos:** Visualización de juegos con imágenes, nombres y precios en la página principal y en la sección de productos.
*   **Carrito de Compras:**
    *   Agregar juegos al carrito.
    *   Ver los artículos y el total acumulado en el carrito.
    *   Limpiar el carrito.
    *   Simulación de proceso de pago.
*   **Páginas Informativas:**
    *   **Servicios:** Sección con información sobre trucos de juegos, tutoriales (listado de juegos con plataforma y año) y videos (trailers de juegos embebidos).
    *   **Contacto:** Formulario de contacto, mapa de ubicación (Google Maps) e información de contacto.
*   **Diseño Responsivo:** Interfaz adaptable gracias al uso de Bootstrap.
*   **Navegación Intuitiva:** Menú de navegación claro para acceder a las diferentes secciones del sitio.

## Tecnologías Utilizadas 💻

*   **HTML5:** Para la estructura y el contenido de las páginas web.
*   **CSS3:** Para los estilos y la presentación visual (incluyendo archivos dedicados como `style.css`, `styleForm.css`, `styleRedes.css`).
*   **JavaScript (ES6+):** Para la funcionalidad interactiva, principalmente el manejo del carrito de compras en `Api.js`.
*   **Bootstrap 5:** Framework CSS para el diseño responsivo y componentes predefinidos.

## Estructura del Proyecto 📁

El proyecto se organiza de la siguiente manera:

```
.
├── .hintrc ..................... Configuración para el linter webhint
├── Api.js ...................... Lógica del carrito de compras
├── COMENTARIOS.TXT ............. Notas y comentarios sobre el proyecto
├── README.md ................... Este archivo
├── contacto.html ............... Página de contacto
├── images/ ..................... Carpeta con todas las imágenes del sitio
│   ├── bg.jpg
│   ├── g1.jpg - g7.jpg ......... Imágenes para el carrusel de juegos populares
│   ├── l1.jpg - l9.jpg ......... Imágenes de los productos (juegos)
│   ├── logo.jpg ................ Logo de la tienda
│   └── menu.png ................ Icono del menú móvil
├── index.html .................. Página principal de la tienda
├── productos.html .............. Página de listado de productos y carrito
├── servicios.html .............. Página de servicios (trucos, tutoriales, videos)
├── style.css ................... Estilos generales del sitio
├── styleForm.css ............... Estilos para el formulario de contacto
└── styleRedes.css .............. Estilos para los iconos de redes sociales
```

## Cómo Empezar 🚀

Para ejecutar este proyecto localmente, sigue estos pasos:

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/JhonLaurens/gameStoreWeb.github.io.git
    ```
2.  **Navega al directorio del proyecto:**
    ```bash
    cd gameStoreWeb.github.io
    ```
3.  **Abre el archivo `index.html` en tu navegador web preferido.**
    No se requieren pasos de compilación ni instalación de dependencias adicionales para la funcionalidad principal, ya que es un proyecto frontend puro.

## Uso 🖱️

*   Navega por las diferentes secciones utilizando el menú principal: Inicio, Servicios, Productos, Contacto.
*   En la página de "Productos", puedes hacer clic en el botón "Comprar" de cualquier juego para agregarlo al carrito.
*   El carrito de compras se actualizará mostrando los productos agregados y el total.
*   Puedes limpiar el carrito o simular un pago usando los botones correspondientes en la sección del carrito.
*   Explora la sección de "Servicios" para ver trucos, tutoriales y videos de juegos.
*   Utiliza el formulario en la página de "Contacto" para enviar mensajes (requiere configuración de backend para la recepción real de mensajes, ya que `submeter-formulario.php` no está incluido).

## Contribuciones 🤝

Las contribuciones son bienvenidas. Si deseas mejorar este proyecto:

1.  Haz un Fork del repositorio.
2.  Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3.  Realiza tus cambios y haz commit (`git commit -am 'Añadir nueva funcionalidad'`).
4.  Haz Push a la rama (`git push origin feature/nueva-funcionalidad`).
5.  Abre un Pull Request.

## Licencia 📄

Este proyecto no especifica una licencia. Se recomienda añadir un archivo `LICENSE` si se desea definir los términos bajo los cuales otros pueden usar, modificar y distribuir el código.

