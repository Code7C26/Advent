// ==========================================
// CAMBIO DE SECCIONES
// ==========================================


// Buscamos todos los elementos que tengan
// data-seccion

const botonesSeccion =
    document.querySelectorAll("[data-seccion]");


// Buscamos todas las secciones

const secciones =
    document.querySelectorAll(".seccion-pagina");


// Recorremos todos los botones

botonesSeccion.forEach(function(boton) {


    // Cuando hacemos clic

    boton.addEventListener("click", function(event) {


        // Evitamos que el enlace
        // recargue la página

        event.preventDefault();


        // Averiguamos qué sección queremos mostrar

        const nombreSeccion =
            boton.getAttribute("data-seccion");


        // Ocultamos todas las secciones

        secciones.forEach(function(seccion) {

            seccion.classList.remove("activa");

        });


        // Buscamos la sección elegida

        const seccionMostrar =
            document.getElementById(nombreSeccion);


        // La mostramos

        if (seccionMostrar) {

            seccionMostrar.classList.add("activa");

        }


        // Volvemos al comienzo

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

});