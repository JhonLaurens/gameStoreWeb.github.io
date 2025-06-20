# 🎮 GameStore - Tienda de Videojuegos Online

**👉 Ver el proyecto en vivo:** **[https://jhonlaurens.github.io/gameStoreWeb.github.io/](https://jhonlaurens.github.io/gameStoreWeb.github.io/)**

---

## 📜 Descripción General

GameStoreWeb es un proyecto de tienda en línea frontend para la venta de videojuegos. Permite a los usuarios navegar por un catálogo de juegos, ver detalles de los productos, agregarlos a un carrito de compras y simular un proceso de pago. El sitio también incluye páginas informativas sobre servicios (trucos, tutoriales, videos) y una página de contacto.

Este repositorio contiene todo el código fuente (HTML, CSS, JavaScript) y los assets (imágenes) necesarios para desplegar y ejecutar la tienda web.

---

### ✨ Vista Previa

*(Te recomiendo subir una captura de pantalla de tu sitio a la carpeta `images` y reemplazar el enlace de abajo. Ejemplo: `images/preview.png`)*

![Vista previa del sitio GameStore](URL_DE_LA_IMAGEN_AQUI)

---

## 🚀 Características Principales

*   **Catálogo de Productos:** Visualización de juegos con imágenes, nombres y precios en la página principal y en la sección de productos.
*   **Carrito de Compras:**
    *   Agregar juegos al carrito.
    *   Ver los artículos y el total acumulado en el carrito.
    *   Limpiar el carrito.
    *   Simulación de proceso de pago.
*   **Páginas Informativas:**
    *   **Servicios:** Sección con información sobre trucos, tutoriales y videos de juegos.
    *   **Contacto:** Formulario de contacto, mapa de ubicación y datos de contacto.
*   **Diseño Responsivo:** Interfaz adaptable a múltiples dispositivos gracias a Bootstrap.
*   **Navegación Intuitiva:** Menú claro para acceder a todas las secciones del sitio.

---

## 💻 Tecnologías Utilizadas

Este proyecto fue construido utilizando las siguientes tecnologías:

- ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
- ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
- ![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)

---

## 📁 Estructura del Proyecto

```
.
├── .hintrc ..................... Configuración para el linter webhint
├── Api.js ...................... Lógica del carrito de compras
├── COMENTARIOS.TXT ............. Notas y comentarios sobre el proyecto
├── README.md ................... Este archivo
├── contacto.html ............... Página de contacto
├── images/ ..................... Carpeta con todas las imágenes del sitio
├── index.html .................. Página principal de la tienda
├── productos.html .............. Página de listado de productos y carrito
├── servicios.html .............. Página de servicios (trucos, tutoriales, videos)
├── style.css ................... Estilos generales del sitio
├── styleForm.css ............... Estilos para el formulario de contacto
└── styleRedes.css .............. Estilos para los iconos de redes sociales
```

---

## 🚀 Cómo Empezar

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
    No se requieren pasos de compilación ni dependencias adicionales.

---

## 🖱️ Uso

*   Navega por las diferentes secciones utilizando el menú principal: **Inicio, Servicios, Productos, Contacto**.
*   En la página de **Productos**, haz clic en **"Comprar"** para agregar juegos al carrito.
*   El carrito se actualizará mostrando los productos agregados y el total.
*   Explora la sección de **Servicios** para ver trucos, tutoriales y videos.
*   Utiliza el formulario en la página de **Contacto** para enviar mensajes (la funcionalidad de envío real requeriría un backend).

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar este proyecto:

1.  Haz un Fork del repositorio.
2.  Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3.  Realiza tus cambios y haz commit (`git commit -am 'Añadir nueva funcionalidad'`).
4.  Haz Push a la rama (`git push origin feature/nueva-funcionalidad`).
5.  Abre un Pull Request.

---

## 📄 Licencia

Este proyecto no especifica una licencia. Se recomienda añadir un archivo `LICENSE` para definir los términos de uso.
