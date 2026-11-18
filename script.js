
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

        // Cambia la imagen con una transición suave
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
