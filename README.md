# Nébula

Portfolio de arte digital inspirado en paisajes de ciencia ficción.

## Tabla de Recursos y Licencias

| Archivo | Enlace a la URL original de descarga | Tipo de licencia |
| :--- | :--- | :--- |
| `assets/img/logo.svg` | Hecho por mí | Dominio Público / CC0 |
| `assets/img/portada.webp` | https://unsplash.com/@iamrohitchoudhari | Licencia Unsplash (gratis) |
| `assets/img/santuario-suspendido.webp` | https://unsplash.com/s/photos/sci-fi | Licencia Unsplash (gratis) |
| `assets/img/mareas-del-vacio.webp` | https://unsplash.com/s/photos/surreal | Licencia Unsplash (gratis) |
| `assets/img/aurora-sobre-el-hielo.webp` | https://unsplash.com/s/photos/aurora | Licencia Unsplash (gratis) |
| `assets/img/video-poster.webp` | Captura sacada del propio vídeo | Licencia Pixabay |
| `assets/img/contacto.webp` | https://pixabay.com/ | Licencia Pixabay (gratis) |
| `assets/video/presentacion.mp4` | https://pixabay.com/videos/ | Licencia Pixabay (gratis) |
| `assets/audio/ambiente-nebula.mp3` | https://freesound.org/ | Dominio Público (CC0) |

---

## Justificación Técnica de Formatos

- **.webp frente a .jpg:** He usado .webp en todas las imágenes porque pesan bastante menos que en .jpg manteniendo prácticamente la misma calidad. De esta forma la web carga más rápido y consume menos datos.
- **.svg para el logotipo:** Al ser un formato vectorial, el logo no se pixela al aumentar su tamaño. En la UT4 también se ha incluido directamente en HTML para cambiar sus colores con CSS.
- **.mp4 frente a .avi:** He elegido .mp4 con códec H.264 porque tiene buena compatibilidad con los navegadores modernos. Además, permite reproducir el vídeo sin descargarlo completamente.
- **.mp3 frente a .wav:** Para el audio de fondo he usado .mp3 porque ocupa menos espacio que .wav manteniendo una buena calidad de sonido.

---

## Herramientas Utilizadas

- **GIMP y Squoosh:** Para recortar las imágenes, ajustarles el tamaño y pasarlas a formato .webp.
- **HandBrake:** Para recortar el vídeo a 12 segundos, comprimirlo en .mp4 y sacar la imagen de portada.
- **Audacity:** Para cortar el audio, ajustar el volumen y añadir un fundido al principio y al final.
- **Figma:** Para diseñar el logotipo con formas geométricas y exportarlo en .svg.

---

## Mejoras de la UT4

- **Logo SVG:** El logo está incluido directamente en HTML y cambia de color al pasar el ratón.
- **Galería interactiva:** Las imágenes cambian al pulsar las miniaturas gracias a JavaScript.
- **Modal de vídeo:** El vídeo se abre en una ventana y se pausa al cerrarla.
- **Audio personalizado:** Se puede reproducir, pausar y silenciar con botones propios.
- **Efectos CSS:** Se han añadido transiciones y efectos al pasar el ratón por los elementos.

---

## Licencia del Proyecto

Para el contenido original de Nébula he elegido la licencia **Creative Commons CC BY 4.0**.

Esta licencia permite compartir y modificar el contenido siempre que se reconozca al autor original.

El logotipo propio se mantiene bajo CC0, como se indica en la tabla. Los recursos externos conservan sus licencias originales.

## Compatibilidad de Licencias

En el proyecto se utilizan recursos de Unsplash, Pixabay y Freesound.

Estas plataformas tienen condiciones de uso diferentes, por lo que hay que respetar la licencia de cada archivo. La licencia CC BY 4.0 del proyecto no sustituye las licencias de los recursos externos.

Los autores, enlaces y licencias de los recursos se recogen en el archivo `credits.html`.

## ¿Qué ocurriría si un recurso fuera CC BY-SA?

Si utilizara un recurso con licencia CC BY-SA y lo modificara, tendría que publicar esa adaptación con la misma licencia o una compatible.

También tendría que indicar quién es el autor original y qué cambios se han realizado.

Si simplemente utilizara el recurso sin modificarlo, mantendría su licencia original y no sería necesario cambiar la licencia del resto de la página.