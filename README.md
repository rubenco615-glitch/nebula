# Nébula

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

- **.webp frente a .jpg**: He usado .webp en todas las imágenes porque pesan bastante menos que en .jpg manteniendo prácticamente la misma calidad. De esta forma la web carga mucho más rápido y no gasta tantos datos.
- **.svg para el logotipo**: Al ser un formato vectorial, el logo no se pixela nunca por mucho que aumentes la pantalla o lo abras desde el móvil, y además el archivo no llega a ocupar ni 2 KB.
- **.mp4 frente a .avi**: He elegido .mp4 con códec H.264 porque es el formato que admiten todos los navegadores web modernos sin dar fallos. Formatos más antiguos como .avi no se pueden reproducir directamente con la etiqueta `<video>` y pesan muchísimo más. Además, .mp4 deja que el vídeo empiece a sonar y verse según se va descargando, sin tener que esperar a que baje entero.
- **.mp3 frente a .wav**: Para el audio de fondo he usado .mp3 porque en .wav se iba a varios megas sin necesidad. Con .mp3 a 128 kbps se escucha genial, no hay ruido y ocupa menos de medio mega.

---

## Herramientas Utilizadas

- **GIMP y Squoosh**: Para recortar las imágenes a las proporciones que me hacían falta (16:9 y 4:3), ajustarles el tamaño y pasarlas a formato .webp.
- **HandBrake**: Para recortar el clip de vídeo a 12 segundos, comprimirlo en .mp4 para que no pesara tanto en la web y extraer el fotograma de inicio para usarlo de portada (`poster`).
- **Audacity**: Para cortar el audio de fondo, ajustar los niveles de volumen y meterle un fundido suave al principio y al final (fade in / fade out) para que no corte en seco al reproducirse.
- **Figma**: Para hacer el diseño del logotipo con formas geométricas simples y exportarlo directamente en .svg.
