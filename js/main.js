const botonOpen = document.getElementById("btn-open");
const botonClose = document.getElementById("btn-close");
const lista = document.querySelector(".lista");
const fondo = document.getElementById("fondo");
botonOpen.classList.remove("hidden");
fondo.classList.remove("fondo-transparente");

botonOpen.addEventListener("click", () => {
    lista.classList.remove("hidden");
    botonOpen.classList.add("hidden");
    fondo.classList.add("fondo-transparente");
});

botonClose.addEventListener("click", () => {
    lista.classList.add("hidden");
    botonOpen.classList.remove("hidden");
    fondo.classList.remove("fondo-transparente");
})