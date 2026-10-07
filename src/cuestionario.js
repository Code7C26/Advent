// ============================================================
// CUESTIONARIO DE INTERESES VOCACIONALES - ADVENT
// D = 1 punto | I = 2 puntos | A = 3 puntos
// ============================================================

const preguntasVocacionales = [
    ["1", "Trabajar resolviendo cálculos físicos y matemáticos"],
    ["2", "Investigar el nivel de los precios"],
    ["3", "Aprender estilos de pintura artística"],
    ["4", "Hacer esculturas"],
    ["5", "Trabaja en estudios jurídicos"],
    ["6", "Estudiar derecho Constitucional"],
    ["7", "Aprender a interpretar radiografías"],
    ["8", "Asesorar a estudiantes sobre orientación vocacional"],
    ["9", "Reparar la dentadura de una persona"],
    ["10", "Trabajar con equipos electrónicos"],
    ["11", "Estudiar los ecosistemas de una región"],
    ["12", "Organizar la producción de una industria química"],
    ["13", "Aprender a diseñar y decorar ambientes"],
    ["14", "Realizar cálculos físicos matemáticos de estructuras"],
    ["15", "Resolver ejercicios matemáticos"],
    ["16", "Planificar actividades administrativas de una empresa"],
    ["17", "Realizar una crítica a una obra literaria y cinematográfica"],
    ["18", "Conocer técnicas y materiales de dibujo artístico"],
    ["19", "Enseñar contenidos matemáticos"],
    ["20", "Exponer casos jurídicos en audiencias o juicios"],
    ["21", "Aprender sobre causas y tratamientos de enfermedades"],
    ["22", "Trabajar en centros médicos"],
    ["23", "Armar y reparar computadoras"],
    ["24", "Diseñar páginas web"],
    ["25", "Planificar la construcción de obras fluviales y marítimas"],
    ["26", "Supervisar obras en construcción"],
    ["27", "Aprender a realizar pronósticos meteorológicos"],
    ["28", "Realizar análisis químicos"],
    ["29", "Investigar centros y movimientos sísmicos"],
    ["30", "Aprender anatomía"],
    ["31", "Evaluar daños de viviendas y edificios"],
    ["32", "Construir puentes"],
    ["33", "Investigar sobre diferentes enfermedades mentales"],
    ["34", "Ayudar a fortalecer músculos en una persona"],
    ["35", "Llevar adelante pago de impuestos de otras personas"],
    ["36", "Asesorar financieramente a empresas"],
    ["37", "Aprender a tomar fotografías"],
    ["38", "Crear música con software"],
    ["39", "Analizar las condiciones y habitat de vida de una familia"],
    ["40", "Tomar declaración a personas acusadas de un delito"],
    ["41", "Diseñar juegos electrónicos"],
    ["42", "Realizar edición de música y videos"],
    ["43", "Aprender el proceso de formación de sustancias"],
    ["44", "Realizar análisis químicos de productos industriales"],
    ["45", "Evaluar el estado de conexiones eléctricas"],
    ["46", "Asesorar a empresas constructoras"],
    ["46bis", "Investigar dónde se almacena información tecnológica"],
    ["47", "Reconocer los diferentes programas informáticos"],
    ["48", "Elaborar dietas para pacientes"],
    ["49", "Trabajar en un banco"],
    ["50", "Analizar temas de comercio internacional"],
    ["51", "Enseñar a niños"],
    ["52", "Analizar problemáticas sociales"],
    ["53", "Musicalizar obras teatrales"],
    ["54", "Realizar artesanías"],
    ["55", "Ayudar a personas enfermas"],
    ["56", "Ayudar a personas con problemas emocionales"],
    ["57", "Investigar sobre nuevas aplicaciones tecnológicas"],
    ["58", "Producir programas televisivos"],
    ["59", "Realizar experimentos para desarrollar productos curativos"],
    ["60", "Analizar formulas científicas"],
    ["61", "Investigar índice de precios"],
    ["62", "Organizar una empresa"],
    ["63", "Supervisar las condiciones laborales de una empresa"],
    ["64", "Investigar acontecimientos históricos"],
    ["65", "Leer partituras"],
    ["66", "Organizar conciertos musicales"],
    ["67", "Trabajar en laboratorios"],
    ["68", "Investigar el movimiento de los átomos"],
    ["69", "Diseñar y controlar planos de una casa"],
    ["70", "Trabajar con elementos de geometría"],
    ["71", "Cuidar a personas con capacidades especiales"],
    ["72", "Ayudar a niños con problemas de aprendizaje"],
    ["73", "Aprender a realizar guiones con audiovisuales"],
    ["74", "Diseñar ropa"],
    ["75", "Diseñar un sistema operativo informática"],
    ["76", "Realizar diagnóstico de autos por computadoras"],
    ["78", "Diseñar amueblamientos para una casa"],
    ["79", "Investigar sobre materiales ecológicos para la construcción de viviendas"],
    ["80", "Llevar adelante el pago de sueldo de trabajadores"],
    ["81", "Realizar el seguimiento contable de una empresa o comercio"],
    ["82", "Realizar una pintura mural"],
    ["83", "Tocar en una banda musical"],
    ["84", "Realizar notas periodísticas para una radio"],
    ["85", "Organizar las relaciones públicas de una empresa"],
    ["86", "Conocer sobre redes informáticas"],
    ["87", "Analizar logaritmos"],
    ["88", "Conocer los componentes químicos de un alimento"],
    ["89", "Experimentar con reactivos químicos"],
    ["90", "Diseñar un avión"],
    ["91", "Diseñar obras de ingeniería"],
    ["93", "Programar Computadoras"],
    ["94", "Diseñar el prototipo de una maquina"],
    ["95", "Curar animales"],
    ["96", "Socorrer emergencias médicas"],
    ["97", "Conocer y viajar por distintos lugares del mundo"],
    ["98", "Enseñar deportes"],
    ["99", "Conocer diferentes drogas y sus efectos"],
    ["100", "Experimentar para descubrir nuevas variedades de vegetales"],
    ["101", "Conocer y realizar cálculos estructurales de una vivienda"],
    ["102", "Realizar el diseño de donde ubicar viviendas en una ciudad"],
    ["103", "Asesorar a personas sobre inversiones financieras"],
    ["104", "Aprender algebra"],
    ["105", "Investigar sobre las propiedades de diferentes metales"],
    ["106", "Asesorar sobre el cuidado de los vegetales"]
];


// ============================================================
// PREGUNTAS QUE PERTENECEN A CADA ÁREA
// ============================================================

const areasVocacionales = {

    "Económica": [
        "1", "2", "15", "16", "35", "36",
        "49", "50", "61", "62", "80", "81",
        "103", "104"
    ],

    "Musical / Artística": [
        "3", "4", "17", "18", "37", "38",
        "53", "54", "65", "66", "73", "74",
        "82", "83"
    ],

    "Humanista": [
        "5", "6", "19", "20", "39", "40",
        "51", "52", "63", "64", "84", "85",
        "97", "98"
    ],

    "Asistencial": [
        "7", "8", "9", "21", "22", "33",
        "34", "48", "55", "56", "71", "72",
        "95", "96"
    ],

    "Diseño / Construcción": [
        "1", "13", "14", "25", "26", "31",
        "32", "45", "46", "69", "70", "74",
        "78", "79", "90", "91", "94", "101",
        "102"
    ],

    "Tecnológica / Informática": [
        "10", "23", "24", "27", "38", "41",
        "42", "46bis", "47", "57", "58",
        "75", "76", "86", "87", "93", "94",
        "104"
    ],

    "Naturales / Química": [
        "11", "12", "27", "28", "29", "30",
        "43", "44", "48", "59", "60", "67",
        "68", "88", "89", "99", "100", "105",
        "106"
    ]
};


// ============================================================
// PUNTAJE DE CADA RESPUESTA
// ============================================================

const puntosRespuesta = {
    D: 1,
    I: 2,
    A: 3
};


// ============================================================
// CUANDO CARGA LA PÁGINA
// ============================================================

document.addEventListener("DOMContentLoaded", function () {

    const contenedor =
        document.getElementById("preguntas-vocacionales");

    const formulario =
        document.getElementById("formulario-vocacional");

    const resultado =
        document.getElementById("resultado-vocacional");


    // Si alguno de estos elementos no existe,
    // no hacemos nada.

    if (!contenedor || !formulario || !resultado) {
        return;
    }


    // ========================================================
    // CREAR AUTOMÁTICAMENTE TODAS LAS PREGUNTAS
    // ========================================================

    preguntasVocacionales.forEach(function (pregunta, indice) {

        const bloque = document.createElement("div");

        bloque.className = "pregunta-vocacional";


        const numeroPregunta = pregunta[0];
        const textoPregunta = pregunta[1];


        bloque.innerHTML = `

            <p class="texto-pregunta">

                <strong>${numeroPregunta}.</strong>

                ${textoPregunta}

            </p>


            <div class="opciones-vocacionales">

                <label>

                    <input
                        type="radio"
                        name="pregunta-${indice}"
                        value="D">

                    <span>D</span>

                </label>


                <label>

                    <input
                        type="radio"
                        name="pregunta-${indice}"
                        value="I">

                    <span>I</span>

                </label>


                <label>

                    <input
                        type="radio"
                        name="pregunta-${indice}"
                        value="A">

                    <span>A</span>

                </label>

            </div>

        `;


        contenedor.appendChild(bloque);

    });


    // ========================================================
    // CUANDO SE PRESIONA "VER MI RESULTADO"
    // ========================================================

    formulario.addEventListener("submit", function (event) {

        event.preventDefault();


        // ----------------------------------------------------
        // OBTENER DATOS DEL ALUMNO
        // ----------------------------------------------------

        const nombre =
            document
                .getElementById("nombre-vocacional")
                .value
                .trim();


        const apellido =
            document
                .getElementById("apellido-vocacional")
                .value
                .trim();


        const curso =
            document
                .getElementById("curso-vocacional")
                .value
                .trim();


        // ----------------------------------------------------
        // COMPROBAR QUE HAYA NOMBRE, APELLIDO Y CURSO
        // ----------------------------------------------------

        if (!nombre || !apellido || !curso) {

            alert(
                "Por favor completá nombre, apellido y curso antes de comenzar."
            );

            return;
        }


        // ----------------------------------------------------
        // CREAR LOS PUNTAJES DE TODAS LAS ÁREAS
        // ----------------------------------------------------

        const puntajes = {};


        Object.keys(areasVocacionales).forEach(function (area) {

            puntajes[area] = 0;

        });


        // ====================================================
        // RECORRER TODAS LAS PREGUNTAS
        // ====================================================

        for (
            let i = 0;
            i < preguntasVocacionales.length;
            i++
        ) {

            const respuesta =
                document.querySelector(
                    `input[name="pregunta-${i}"]:checked`
                );


            // ------------------------------------------------
            // COMPROBAR QUE LA PREGUNTA ESTÉ RESPONDIDA
            // ------------------------------------------------

            if (!respuesta) {

                alert(
                    "Todavía faltan preguntas por responder. Revisá el cuestionario."
                );


                const preguntas =
                    document.querySelectorAll(
                        ".pregunta-vocacional"
                    );


                preguntas[i].scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });


                return;
            }


            // ------------------------------------------------
            // OBTENER LOS PUNTOS
            // ------------------------------------------------

            const puntos =
                puntosRespuesta[respuesta.value];


            // Número real de la pregunta
            const numeroPregunta =
                preguntasVocacionales[i][0];


            // ------------------------------------------------
            // SUMAR LOS PUNTOS EN LAS ÁREAS CORRESPONDIENTES
            // ------------------------------------------------

            Object.keys(areasVocacionales).forEach(
                function (area) {

                    if (
                        areasVocacionales[area]
                            .includes(numeroPregunta)
                    ) {

                        puntajes[area] += puntos;

                    }

                }
            );

        }


        // ====================================================
        // ORDENAR LAS ÁREAS DE MAYOR A MENOR PUNTAJE
        // ====================================================

        const ranking =
            Object.entries(puntajes)
                .sort(function (a, b) {

                    return b[1] - a[1];

                });


        const primera = ranking[0];

        const segunda = ranking[1];


        // ====================================================
        // MOSTRAR RESULTADO
        // ====================================================

        resultado.innerHTML = `

            <div class="resultado-contenido">

                <h2>
                    Resultado del cuestionario
                </h2>


                <p class="saludo-resultado">

                    ${nombre}
                    ${apellido}
                    - ${curso}

                </p>


                <p>

                    Según tus respuestas,
                    las dos áreas con mayor puntaje son:

                </p>


                <div class="areas-resultado">


                    <div class="area-resultado">

                        <span>1°</span>

                        <strong>
                            ${primera[0]}
                        </strong>

                        <small>
                            ${primera[1]} puntos
                        </small>

                    </div>


                    <div class="area-resultado">

                        <span>2°</span>

                        <strong>
                            ${segunda[0]}
                        </strong>

                        <small>
                            ${segunda[1]} puntos
                        </small>

                    </div>


                </div>


                <p class="texto-final-resultado">

                    Estas áreas representan los intereses
                    que obtuvieron los puntajes más altos
                    en tus respuestas.

                </p>


                <button
                    type="button"
                    class="boton-volver-inicio">

                    Volver al inicio

                </button>


            </div>

        `;


        // Mostrar resultado

        resultado.classList.add("mostrar");


        // Llevar al resultado

        resultado.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });


        // ====================================================
        // BOTÓN "VOLVER AL INICIO"
        // ====================================================

        const botonVolver =
            resultado.querySelector(
                ".boton-volver-inicio"
            );


        if (botonVolver) {

            botonVolver.addEventListener(
                "click",
                function () {

                    resultado.classList.remove("mostrar");


                    document
                        .querySelectorAll(".seccion-pagina")
                        .forEach(function (seccion) {

                            seccion.classList.remove("activa");

                        });


                    const inicio =
                        document.getElementById("inicio");


                    if (inicio) {

                        inicio.classList.add("activa");

                    }


                    window.scrollTo({

                        top: 0,

                        behavior: "smooth"

                    });

                }
            );

        }

    });

});