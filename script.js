
/* Galería interactiva */
const principal = document.querySelector("#imagen-principal");
const titulo = document.querySelector("#titulo-principal");
const miniaturas = document.querySelectorAll(".miniatura");
let cambio;

// Cambia la imagen al pulsar una miniatura
miniaturas.forEach(boton => {
    boton.addEventListener("click", () => {
        const imagen = boton.querySelector("img");
        const nombre = boton.closest("figure").querySelector("h3").textContent;

        // Marca la miniatura seleccionada
        miniaturas.forEach(b => b.setAttribute("aria-pressed", String(b === boton)));

        // Cambia la imagen suavemente
        clearTimeout(cambio);
        principal.classList.add("cambiando");

        cambio = setTimeout(() => {
            principal.src = imagen.src;
            principal.alt = imagen.alt;
            titulo.textContent = nombre;
            principal.classList.remove("cambiando");
        }, 200);
    });
});

/* Modal del vídeo */
const modal = document.querySelector("#modal-video");
const video = document.querySelector("#video-reel");

// Abre el modal y reproduce el vídeo
document.querySelector("#abrir-video").addEventListener("click", () => {
    modal.showModal();
    video.play().catch(() => { });
});

// Cierra el modal con el botón
document.querySelector("#cerrar-video").addEventListener("click", () => {
    modal.close();
});

// Cierra el modal al pulsar fuera
modal.addEventListener("click", e => {
    const r = modal.getBoundingClientRect();
    if (e.target === modal && (e.clientX < r.left || e.clientX > r.right ||
        e.clientY < r.top || e.clientY > r.bottom)) modal.close();
});

// Pausa el vídeo al cerrar el modal
modal.addEventListener("close", () => {
    video.pause();
    video.currentTime = 0;
});

/* Reproductor de audio */
const audio = document.querySelector("#audio-ambiente");
const botonAudio = document.querySelector("#boton-audio");
const botonSilencio = document.querySelector("#boton-silencio");

// Reproduce o pausa el audio
botonAudio.addEventListener("click", () => {
    if (audio.paused) {
        audio.play().catch(() => {
            botonAudio.textContent = "No se pudo reproducir";
        });
    } else {
        audio.pause();
    }
});

// Cambia el texto del botón
audio.addEventListener("play", () => {
    botonAudio.textContent = "Pausar ambiente";
});
audio.addEventListener("pause", () => {
    botonAudio.textContent = "Escuchar ambiente espacial";
});
audio.addEventListener("ended", () => {
    botonAudio.textContent = "Escuchar ambiente espacial";
});

// Silencia o activa el sonido
botonSilencio.addEventListener("click", () => {
    audio.muted = !audio.muted;
    botonSilencio.textContent = audio.muted ? "Activar sonido" : "Silenciar";
    botonSilencio.setAttribute("aria-pressed", String(audio.muted));
});
