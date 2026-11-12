
import { db } from "./firebase.js";

import {
    collection,
    addDoc,
    query,
    where,
    orderBy,
    onSnapshot,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", function () {

    const espaciosComentarios = document.querySelectorAll(
        ".comentarios[data-especialidad]"
    );

    espaciosComentarios.forEach(function (espacio) {

        const especialidad = espacio.dataset.especialidad;

        const lista = espacio.querySelector(".lista-comentarios");
        const formulario = espacio.querySelector(".formulario-comentarios");

        const nombre = formulario.querySelector('input[id^="nombre-comentario"]');
        const curso = formulario.querySelector('input[id^="curso-comentario"]');
        const opinion = formulario.querySelector("textarea");

        // Todos los comentarios se guardan en una misma colección.
        const referencia = collection(db, "comentarios");

        // Mostrar solamente los comentarios de esta especialidad.
        // Ordenar desde el más reciente al más antiguo.
        const consulta = query(
            referencia,
            where("especialidad", "==", especialidad),
            orderBy("fecha", "desc")
        );

        // Escuchar los cambios en Firebase en tiempo real.
        onSnapshot(consulta, function (resultado) {

            lista.innerHTML = "";

            if (resultado.empty) {
                lista.textContent = "Todavía no hay comentarios. ¡Sé el primero en participar!";
                return;
            }

            resultado.forEach(function (documento) {

                const datos = documento.data();

                const tarjeta = document.createElement("article");
                tarjeta.classList.add("comentario");

                const encabezado = document.createElement("p");
                const nombreCompleto = document.createElement("strong");

                nombreCompleto.textContent =
                    datos.nombre + " · " + datos.curso;

                encabezado.appendChild(nombreCompleto);

                const mensaje = document.createElement("p");
                mensaje.textContent = datos.comentario;

                tarjeta.appendChild(encabezado);
                tarjeta.appendChild(mensaje);

                lista.appendChild(tarjeta);
            });

        }, function (error) {
            console.error("Error al cargar comentarios:", error);
            lista.textContent = "No se pudieron cargar los comentarios.";
        });

        // Guardar un comentario nuevo.
        formulario.addEventListener("submit", async function (evento) {

            evento.preventDefault();

            const nombreIngresado = nombre.value.trim();
            const cursoIngresado = curso.value.trim();
            const opinionIngresada = opinion.value.trim();

            if (!nombreIngresado || !cursoIngresado || !opinionIngresada) {
                alert("Completá todos los campos antes de publicar.");
                return;
            }

            const boton = formulario.querySelector(".boton-subir-comentario");

            boton.disabled = true;
            boton.textContent = "Publicando...";

            try {

                await addDoc(referencia, {
                    nombre: nombreIngresado,
                    curso: cursoIngresado,
                    comentario: opinionIngresada,
                    especialidad: especialidad,
                    fecha: serverTimestamp()
                });

                formulario.reset();

            } catch (error) {

                console.error("Error al publicar el comentario:", error);
                alert("No se pudo publicar el comentario. Intentá nuevamente.");

            } finally {

                boton.disabled = false;
                boton.textContent = "Subir";

            }

        });

    });

});
