
document.addEventListener("DOMContentLoaded", function () {

    // Buscar todos los botones que permiten cambiar de sección
    const botonesSeccion = document.querySelectorAll("[data-seccion]");

    // Buscar todas las secciones principales de la página
    const secciones = document.querySelectorAll(".seccion-pagina");

    // Recorrer los botones
    botonesSeccion.forEach(function (boton) {

        boton.addEventListener("click", function (event) {

            event.preventDefault();

            // Obtener el nombre de la sección que queremos abrir
            const nombreSeccion = boton.getAttribute("data-seccion");

            // Obtener el lugar al que queremos desplazarnos, si existe
            const destinoScroll = boton.getAttribute("data-scroll-destino");

            // Ocultar todas las secciones principales
            secciones.forEach(function (seccion) {
                seccion.classList.remove("activa");
            });

            // Buscar la sección que corresponde al botón
            const seccionMostrar = document.getElementById(nombreSeccion);

            // Mostrar la sección elegida
            if (seccionMostrar) {
                seccionMostrar.classList.add("activa");
            } else {
                console.error(
                    "No se encontró la sección con el ID: " + nombreSeccion
                );
                return;
            }

            // Si el botón tiene un destino específico, ir a ese lugar
            if (destinoScroll) {

                const destino = document.getElementById(destinoScroll);

                if (destino) {
                    destino.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                } else {
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    });
                    console.error(
                        "No se encontró el destino: " + destinoScroll
                    );
                }

            } else {

                // Si no hay destino, volver al inicio de la página
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }

        });

    });

});

const botonMenu = document.getElementById("boton-menu");
const menuLateral = document.getElementById("menu-lateral");
const fondoMenu = document.getElementById("fondo-menu");

function cerrarMenu() {
    menuLateral.classList.remove("abierto");
    fondoMenu.classList.remove("visible");
    botonMenu.setAttribute("aria-expanded", "false");
}

botonMenu.addEventListener("click", () => {
    const estaAbierto = menuLateral.classList.toggle("abierto");

    fondoMenu.classList.toggle("visible", estaAbierto);
    botonMenu.setAttribute("aria-expanded", estaAbierto);
});

fondoMenu.addEventListener("click", cerrarMenu);

menuLateral.querySelectorAll("a[data-seccion]").forEach(enlace => {
    enlace.addEventListener("click", cerrarMenu);
});



/* MENÚ INTERNO DE INFORMÁTICA */
document.querySelectorAll("#informatica [data-subseccion]").forEach(function (boton) {
    boton.addEventListener("click", function () {
        const destino = boton.getAttribute("data-subseccion");
        const secciones = document.querySelectorAll(
            "#informatica .contenido-subseccion"
        );

        secciones.forEach(function (seccion) {
            seccion.classList.remove("activo");
        });

        const elegida = document.getElementById(destino);

        if (elegida) {
            elegida.classList.add("activo");
        } else {
            console.error("No se encontró la subsección:", destino);
        }

        document.querySelectorAll("#informatica [data-subseccion]").forEach(function (otroBoton) {
            otroBoton.classList.remove("activo");
        });

        boton.classList.add("activo");
    });
});

function destacarTitulosUnidades() {
    document.querySelectorAll(".resumen-materia .contenido-pendiente").forEach(parrafo => {
        if (parrafo.dataset.titulosMarcados === "true") return;

        // Recorre el contenido del párrafo y conserva los saltos de línea.
        const lineas = parrafo.innerHTML.split(/<br\s*\/?>/i);

        parrafo.innerHTML = lineas.map(linea => {
            const texto = linea.trim();

            if (/^(Unidad|Eje)\s+\d+[\.:]/i.test(texto)) {
                return `<span class="titulo-unidad">${texto}</span>`;
            }

            return linea;
        }).join("<br>");

        parrafo.dataset.titulosMarcados = "true";
    });
}

document.addEventListener("DOMContentLoaded", destacarTitulosUnidades);

