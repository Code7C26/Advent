
document.addEventListener("DOMContentLoaded", function () {

    // NAVEGACIÓN ENTRE LAS SECCIONES PRINCIPALES
    const botonesSeccion = document.querySelectorAll("[data-seccion]");
    const secciones = document.querySelectorAll(".seccion-pagina");

    botonesSeccion.forEach(function (boton) {
        boton.addEventListener("click", function (event) {
            event.preventDefault();

            const nombreSeccion = boton.getAttribute("data-seccion");
            const destinoScroll = boton.getAttribute("data-scroll-destino");

            secciones.forEach(function (seccion) {
                seccion.classList.remove("activa");
            });

            const seccionMostrar = document.getElementById(nombreSeccion);

            if (seccionMostrar) {
                seccionMostrar.classList.add("activa");
            } else {
                console.error(
                    "No se encontró la sección con el ID: " + nombreSeccion
                );
                return;
            }

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
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }
        });
    });

    // MENÚ LATERAL
    const botonMenu = document.getElementById("boton-menu");
    const menuLateral = document.getElementById("menu-lateral");
    const fondoMenu = document.getElementById("fondo-menu");

    function cerrarMenu() {
        if (menuLateral) {
            menuLateral.classList.remove("abierto");
        }

        if (fondoMenu) {
            fondoMenu.classList.remove("visible");
        }

        if (botonMenu) {
            botonMenu.setAttribute("aria-expanded", "false");
        }
    }

    if (botonMenu && menuLateral && fondoMenu) {
        botonMenu.addEventListener("click", function () {
            const estaAbierto = menuLateral.classList.toggle("abierto");

            fondoMenu.classList.toggle("visible", estaAbierto);
            botonMenu.setAttribute("aria-expanded", String(estaAbierto));
        });

        fondoMenu.addEventListener("click", cerrarMenu);

        menuLateral.querySelectorAll("a[data-seccion]").forEach(function (enlace) {
            enlace.addEventListener("click", cerrarMenu);
        });
    }

    // MENÚ INTERNO DE INFORMÁTICA
    document.querySelectorAll(
        "#informatica [data-subseccion]"
    ).forEach(function (boton) {
        boton.addEventListener("click", function () {
            const destino = boton.getAttribute("data-subseccion");

            const subsecciones = document.querySelectorAll(
                "#informatica .contenido-subseccion"
            );

            subsecciones.forEach(function (seccion) {
                seccion.classList.remove("activo");
            });

            const elegida = document.getElementById(destino);

            if (elegida && elegida.closest("#informatica")) {
                elegida.classList.add("activo");
            } else {
                console.error("No se encontró la subsección:", destino);
            }

            document.querySelectorAll(
                "#informatica [data-subseccion]"
            ).forEach(function (otroBoton) {
                otroBoton.classList.remove("activo");
            });

            boton.classList.add("activo");
        });
    });


    // DESTACAR TÍTULOS DE UNIDADES Y EJES
    destacarTitulosUnidades();
// FILTRO Y BUSCADOR DE PROFESORES

const buscadorProfesores = document.getElementById("buscar-profesor");
const filtroArea = document.getElementById("filtrar-area");

const tarjetasProfesores = document.querySelectorAll(
    "#informatica .contenedor-profesores .tarjeta-profesor"
);

if (buscadorProfesores && filtroArea) {

    function filtrarProfesores() {
        const texto = buscadorProfesores.value.trim()
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");

        const areaSeleccionada = filtroArea.value;

        tarjetasProfesores.forEach(function(tarjeta) {
            const nombre = tarjeta.querySelector("h3")?.textContent
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "") || "";

            const areas = (tarjeta.dataset.area || "").split(/\s+/);

            const coincideNombre = nombre.includes(texto);
            const coincideArea =
                areaSeleccionada === "todos" ||
                areas.includes(areaSeleccionada);

            tarjeta.style.display =
                coincideNombre && coincideArea ? "flex" : "none";
        });
    }

    buscadorProfesores.addEventListener("input", filtrarProfesores);
    filtroArea.addEventListener("change", filtrarProfesores);
}

}); // Cierre de DOMContentLoaded
// FILTRO Y BUSCADOR DE PROFESORES DE QUÍMICA

const buscadorProfesoresQuimica = document.getElementById(
    "buscar-profesor-quimica"
);

const filtroAreaQuimica = document.getElementById(
    "filtrar-area-quimica"
);

const tarjetasProfesoresQuimica = document.querySelectorAll(
    "#quimica #contenido-profesores .contenedor-profesores .tarjeta-profesor"
);

if (buscadorProfesoresQuimica && filtroAreaQuimica) {

    function filtrarProfesoresQuimica() {

        const texto = buscadorProfesoresQuimica.value.trim()
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");

        const areaSeleccionada = filtroAreaQuimica.value;

        tarjetasProfesoresQuimica.forEach(function(tarjeta) {

            const nombre = tarjeta.querySelector("h3")?.textContent
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "") || "";

            const areas = (tarjeta.dataset.area || "").split(/\s+/);

            const coincideNombre = nombre.includes(texto);

            const coincideArea =
                areaSeleccionada === "todos" ||
                areas.includes(areaSeleccionada);

            tarjeta.style.display =
                coincideNombre && coincideArea ? "flex" : "none";

        });
    }

    buscadorProfesoresQuimica.addEventListener(
        "input",
        filtrarProfesoresQuimica
    );

    filtroAreaQuimica.addEventListener(
        "change",
        filtrarProfesoresQuimica
    );
}

/* ==========================================
   PESTAÑAS DE QUÍMICA
   ========================================== */

(function () {
    function configurarQuimica() {
        const quimica = document.getElementById("quimica");

        if (!quimica) return;

        const botones = quimica.querySelectorAll("[data-quimica]");
        const contenidos = quimica.querySelectorAll(".contenido-quimica");

        if (!botones.length || !contenidos.length) {
            console.error("No se encontraron las pestañas o los contenidos de Química.");
            return;
        }

        function mostrar(nombre) {
            const destino = document.getElementById("contenido-" + nombre);

            // Verificar que el destino exista dentro de Química.
            if (!destino || !quimica.contains(destino)) {
                console.error("No se encontró la sección de Química:", nombre);
                return;
            }

            // Ocultar todos los bloques y mostrar únicamente el elegido.
            contenidos.forEach(function (bloque) {
                const seleccionado = bloque === destino;

                bloque.hidden = !seleccionado;
                bloque.style.display = seleccionado ? "block" : "none";
                bloque.classList.toggle("activa", seleccionado);
            });

            // Marcar el botón seleccionado.
            botones.forEach(function (boton) {
                boton.classList.toggle(
                    "activo",
                    boton.dataset.quimica === nombre
                );
            });
        }

        botones.forEach(function (boton) {
            boton.addEventListener("click", function (evento) {
                evento.preventDefault();
                mostrar(boton.dataset.quimica);
            });
        });

        // Mostrar Introducción al entrar a Química.
        mostrar("introduccion");
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", configurarQuimica);
    } else {
        configurarQuimica();
    }
})();

/* ==========================================
   PESTAÑAS DE CONSTRUCCIONES
   ========================================== */

(function () {
    function configurarConstrucciones() {
        const construcciones = document.getElementById("construcciones");

        if (!construcciones) return;

        const botones = construcciones.querySelectorAll("[data-construcciones]");
        const contenidos = construcciones.querySelectorAll(".contenido-construcciones");

        if (!botones.length || !contenidos.length) {
            console.error("No se encontraron las pestañas o los contenidos de Construcciones.");
            return;
        }

        function mostrar(nombre) {
            const destino = document.getElementById("contenido-construcciones-" + nombre);

            if (!destino || !construcciones.contains(destino)) {
                console.error("No se encontró la sección de Construcciones:", nombre);
                return;
            }

            contenidos.forEach(function (bloque) {
                const seleccionado = bloque === destino;

                bloque.hidden = !seleccionado;
                bloque.style.display = seleccionado ? "block" : "none";
                bloque.classList.toggle("activa", seleccionado);
            });

            botones.forEach(function (boton) {
                boton.classList.toggle(
                    "activo",
                    boton.dataset.construcciones === nombre
                );
            });
        }

        botones.forEach(function (boton) {
            boton.addEventListener("click", function (evento) {
                evento.preventDefault();
                mostrar(boton.dataset.construcciones);
            });
        });

        mostrar("introduccion");
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", configurarConstrucciones);
    } else {
        configurarConstrucciones();
    }
})();
// DESTACAR LOS TÍTULOS DE UNIDADES Y EJES
function destacarTitulosUnidades() {
    document.querySelectorAll(
        ".resumen-materia .contenido-pendiente"
    ).forEach(function (parrafo) {
        if (parrafo.dataset.titulosMarcados === "true") return;

        const lineas = parrafo.innerHTML.split(/<br\s*\/?>/i);

        parrafo.innerHTML = lineas.map(function (linea) {
            const texto = linea.trim();

            if (/^(Unidad|Eje)\s+\d+[\.:]/i.test(texto)) {
                return '<span class="titulo-unidad">' +
                    texto +
                    '</span>';
            }

            return linea;
        }).join("<br>");

        parrafo.dataset.titulosMarcados = "true";
    });
}
