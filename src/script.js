
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
