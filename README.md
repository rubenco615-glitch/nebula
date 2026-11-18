# Nébula

Portfolio de arte digital basado en paisajes de ciencia ficción.

## Tabla de Recursos y Licencias

| Archivo | Enlace a la fuente | Licencia |
| :--- | :--- | :--- |
| `assets/img/logo.svg` | Hecho por mí | CC0 |
| `assets/img/portada.webp` | [Rohit Choudhari / Unsplash](https://unsplash.com/@iamrohitchoudhari) | Licencia Unsplash |
| `assets/img/santuario-suspendido.webp` | [Unsplash](https://unsplash.com/s/photos/sci-fi) | Licencia Unsplash |
| `assets/img/mareas-del-vacio.webp` | [Unsplash](https://unsplash.com/s/photos/surreal) | Licencia Unsplash |
| `assets/img/aurora-sobre-el-hielo.webp` | [Unsplash](https://unsplash.com/s/photos/aurora) | Licencia Unsplash |
| `assets/img/video-poster.webp` | Captura del propio vídeo | Licencia Pixabay |
| `assets/img/contacto.webp` | [Pixabay](https://pixabay.com/) | Licencia Pixabay |
| `assets/video/presentacion.mp4` | [Pixabay](https://pixabay.com/videos/) | Licencia Pixabay |
| `assets/audio/ambiente-nebula.mp3` | [Freesound](https://freesound.org/) | CC0 (pendiente de verificar) |

## Justificación Técnica de Formatos

- **WebP frente a JPG:** He utilizado WebP para las imágenes porque ocupan menos espacio que JPG y mantienen una buena calidad. Así la página carga más rápido.

- **SVG para el logotipo:** He utilizado SVG porque no pierde calidad al cambiar de tamaño. En la UT4 también lo he incluido directamente en el HTML para poder cambiar sus colores con CSS.

- **MP4 frente a AVI:** He elegido MP4 con códec H.264 porque tiene buena compatibilidad con los navegadores modernos y permite reproducir el vídeo directamente en la página.

- **MP3 frente a WAV:** Para el audio ambiental he utilizado MP3 porque ocupa menos espacio que WAV y mantiene una buena calidad de sonido.

## Herramientas Utilizadas

- **GIMP y Squoosh:** Para recortar las imágenes, ajustar su tamaño y convertirlas a WebP.
- **HandBrake:** Para recortar el vídeo a 12 segundos, comprimirlo y sacar una imagen de portada.
- **Audacity:** Para recortar el audio, ajustar el volumen y añadir un fundido al principio y al final.
- **Figma:** Para diseñar el logotipo con formas geométricas y exportarlo en SVG.
- **Visual Studio Code:** Para trabajar con los archivos HTML, CSS y JavaScript.

---

## Mejoras de la UT4

En esta práctica he añadido varias funciones nuevas a la página de la UT3.

### 1. Logo SVG interactivo

He sustituido el logo por código SVG directamente dentro del HTML.

Con CSS he utilizado `hover` y `focus-visible` para que el planeta y su órbita cambien de color al pasar el ratón o seleccionarlos con el teclado.

### 2. Galería interactiva

He utilizado JavaScript para que la imagen principal cambie al pulsar las miniaturas de la galería.

También he añadido transiciones y efectos para que el cambio de imagen sea más suave.

### 3. Modal de vídeo

He sustituido el vídeo que aparecía directamente en la página por un botón llamado **Ver Reel de Animación**.

Al pulsarlo, se abre una ventana modal y el vídeo se reproduce automáticamente con `play()`.

Al cerrar la ventana, el vídeo se detiene utilizando `pause()`.

### 4. Reproductor de audio

He quitado los controles normales del audio y he creado botones personalizados.

Con JavaScript puedo reproducir, pausar y silenciar el audio utilizando `play()`, `pause()` y `muted`.

### 5. Efectos CSS

He utilizado `hover`, `focus-visible`, `transform` y `transition` para añadir efectos a los elementos interactivos.

También he mantenido el diseño responsive para que la página se adapte a diferentes tamaños de pantalla.

---

## Propiedad Intelectual y Licencias

### Licencia del proyecto

He elegido la licencia **Creative Commons CC BY 4.0** para los contenidos originales de Nébula.

Esta licencia permite compartir y modificar el contenido siempre que se reconozca al autor original.

El logotipo propio se mantiene bajo CC0, mientras que los recursos descargados de otras páginas conservan sus licencias originales.

### Compatibilidad de licencias

En mi proyecto he utilizado recursos de Unsplash, Pixabay y Freesound.

Cada página tiene sus propias condiciones de uso, por lo que tengo que respetar las licencias de los archivos utilizados.

La licencia CC BY 4.0 se aplica a mi contenido original, pero no cambia las licencias de las imágenes, el vídeo o el audio de otros autores.

Los créditos de los recursos están recogidos en el archivo `credits.html`.

### ¿Qué ocurriría si un recurso fuera CC BY-SA?

Si utilizara un recurso con licencia CC BY-SA y lo modificara, tendría que publicar esa adaptación con la misma licencia o una compatible.

También tendría que indicar quién es el autor original y qué modificaciones he realizado.

Si utilizara el recurso sin modificarlo, mantendría su licencia original y no tendría que cambiar la licencia del resto de mi página.

---

## Pruebas de Compatibilidad UT4

### Pruebas en navegadores

He comprobado el funcionamiento de Nébula en Google Chrome, Mozilla Firefox y Microsoft Edge.

He revisado el logo SVG, la galería interactiva, el modal de vídeo y los controles del audio.

| Funcionalidad | Chrome | Firefox | Edge |
| :--- | :--- | :--- | :--- |
| Logo SVG interactivo | Correcto | Correcto | Correcto |
| Galería interactiva | Correcto | Correcto | Correcto |
| Modal de vídeo | Correcto | Correcto | Correcto |
| Reproductor de audio | Correcto | Correcto | Correcto |
| Consola sin errores | Correcto | Correcto | Correcto |

### Pruebas en móvil y tablet

He utilizado las herramientas de desarrollador (F12) y el modo dispositivo para comprobar cómo se adapta la página a diferentes resoluciones.

| Comprobación | Resultado |
| :--- | :--- |
| Móvil (390 × 844 px) | Correcto |
| Tablet (768 × 1024 px) | Correcto |
| Galería adaptable | Correcto |
| Modal de vídeo | Correcto |
| Reproductor de audio | Correcto |
| Botones de mínimo 44 × 44 px | Correcto |
| Navegación con teclado | Correcto |

### Accesibilidad

He comprobado que los botones se pueden utilizar con el ratón y el teclado.

También he utilizado `focus-visible` para resaltar los elementos seleccionados y transiciones CSS para que los efectos sean suaves.

Los controles táctiles cumplen el tamaño mínimo de 44 × 44 píxeles.

### Resultados finales

Todas las funcionalidades de Nébula funcionan correctamente en Chrome, Firefox y Edge.

La página se adapta bien a las resoluciones de móvil y tablet, las imágenes mantienen su tamaño adecuado y los botones se pueden utilizar sin problemas.

**No se han detectado errores en la consola de JavaScript durante las pruebas.**

---

## Conclusión

En esta práctica he conseguido mejorar mi página Nébula añadiendo funciones interactivas con JavaScript y efectos visuales con CSS.

También he aprendido a utilizar SVG dentro del HTML, controlar vídeos y audios con JavaScript y adaptar los elementos a diferentes dispositivos.

El resultado es una página más dinámica e interactiva, manteniendo el diseño de la práctica anterior.