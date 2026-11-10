
const boton = document.getElementById("boton");
const opciones = document.getElementById("opciones");
const seleccion = document.getElementById("seleccion");
const flecha = document.getElementById("flecha");
const resultado = document.getElementById("resultado");

const elementos = document.querySelectorAll("#opciones button");

// Abrir y cerrar el menú
function cambiarMenu() {
    opciones.hidden = !opciones.hidden;

    if (opciones.hidden) {
        flecha.textContent = "⌄";
        boton.setAttribute("aria-expanded", "false");
    } else {
        flecha.textContent = "⌃";
        boton.setAttribute("aria-expanded", "true");
    }
}

boton.addEventListener("click", cambiarMenu);

// Seleccionar una opción
elementos.forEach(function(elemento) {

    elemento.addEventListener("click", function() {

        // Quitar la selección anterior
        elementos.forEach(function(opcion) {
            opcion.classList.remove("seleccionado");
        });

        // Resaltar la nueva selección
        elemento.classList.add("seleccionado");

        // Mostrar el elemento elegido
        seleccion.textContent = elemento.textContent;

        resultado.textContent = "Elegiste: " + elemento.textContent;

        // Cerrar el menú
        cambiarMenu();

    });

});

// Cerrar al hacer clic fuera del menú
document.addEventListener("click", function(evento) {

    if (!evento.target.closest(".desplegable") && !opciones.hidden) {
        cambiarMenu();
    }

});

// Cerrar con la tecla Escape
document.addEventListener("keydown", function(evento) {

    if (evento.key === "Escape" && !opciones.hidden) {
        cambiarMenu();
        boton.focus();
    }

});
