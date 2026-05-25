// --- VARIABLES: Conectamos JS con el HTML ---
const splash = document.getElementById('pantalla-splash');
const carga = document.getElementById('pantalla-carga');
const escritorio = document.getElementById('escritorio');
const gato = document.getElementById('contenedor-gato');
const porcentajeTextoNum = document.getElementById('num-porcentaje');

// Elementos del Módulo 2 (Carga)
const progressBar = document.getElementById('progress-bar-fill');
const alienLog = document.getElementById('alien-symbols-log');

// Variables para la ventana .txt
const ventanaMensaje = document.getElementById('ventana-mensaje');
const cerrarBtn = document.getElementById('cerrar-ventana');
const textoAutor = document.getElementById('texto-autor');

const mensajeAlien = `[ INIT_BIO_SCAN_Z ]\n⏣ ⎈ ⍎ ⍕ ⍙ ⍚ ⍛ ⍜\nasdkjao4569g flakjfgi adsjfbas...\n> TRADUCCIÓN FALLIDA.\n> zrc_root: acceso_concedido.`;
const alienChars = "⏣⎈⍎⍕⍙⍚⍛⍜░▒▓█";

const lineasArranque = [
    "NEPTUNE BIOS v9.9.X ... OK",
    "Revisando memoria cuántica ... 64TB OK",
    "Cargando drivers dimensionales ... OK",
    "Conectando a la red ZRC_NEXUS ... ESTABLECIDO",
    "Verificando integridad del núcleo ...",
    "ADVERTENCIA: Anomalía detectada. Ignorando...",
    "Montando sistema de archivos [████████████] 100%",
    "Iniciando interfaz gráfica..."
];

// --- PASO 1: El clic en el Gato ---
let arrancando = false;

gato.addEventListener('click', () => {
    if (arrancando) return;
    arrancando = true;

    splash.style.opacity = '0';
    setTimeout(() => {
        splash.style.display = 'none';
        carga.style.display = 'flex';
        iniciarArranqueAlien();
    }, 500);
});

// --- PASO 2: Secuencia de Arranque ---
function iniciarArranqueAlien() {
    let progreso = 0;
    let lineaActual = 0;
    alienLog.innerHTML = ''; 

    const intervaloLineas = setInterval(() => {
        progreso += Math.floor(Math.random() * 10) + 2;
        if (progreso > 100) progreso = 100;
        
        porcentajeTextoNum.innerText = progreso;
        progressBar.style.width = progreso + "%";
        alienLog.innerHTML += alienChars.charAt(Math.floor(Math.random() * alienChars.length));

        if (progreso % 20 === 0 && lineaActual < lineasArranque.length) {
            alienLog.innerHTML += "<br>> " + lineasArranque[lineaActual] + "<br>";
            lineaActual++;
        }

        if (progreso >= 100) {
            clearInterval(intervaloLineas);
            alienLog.innerHTML += "<br>> ZRC_OS CARGADO.";
            setTimeout(revelarEscritorio, 1000);
        }
    }, 250);
}

// --- PASO 3: Revelar Escritorio (Fundido) ---
function revelarEscritorio() {
    carga.style.opacity = '0';
    setTimeout(() => {
        carga.style.display = 'none';
        escritorio.style.display = 'block';
        setTimeout(() => {
            escritorio.style.opacity = '1';
            escritorio.style.pointerEvents = 'auto';
        }, 100);
    }, 1500);
}

// --- PASO 4: Interacción (Despertar mensaje en el escritorio) ---
escritorio.addEventListener('click', (e) => {
    // Si se hace click en el fondo del escritorio (y no en una ventana/carpeta)
    if (e.target.id === 'escritorio') {
        if (ventanaMensaje.style.display !== 'block') {
            ventanaMensaje.style.display = 'block';
            textoAutor.innerHTML = ''; 
            escribirEfectoMaquina(0);
        }
    }
});

// --- PASO 5: Máquina de Escribir ---
function escribirEfectoMaquina(indice) {
    if (indice < mensajeAlien.length) {
        let caracter = mensajeAlien.charAt(indice);
        textoAutor.innerHTML += (caracter === '\n') ? '<br>' : caracter;
        setTimeout(() => escribirEfectoMaquina(indice + 1), 40);
    }
}

// --- PASO 6: Cerrar ventana ---
if (cerrarBtn) {
    cerrarBtn.addEventListener('click', (e) => {
        e.stopPropagation(); 
        ventanaMensaje.style.display = 'none';
    });
}
// --- INTERACCIÓN: Despertar al Gato al pasar el mouse ---
const btnSincronizar = document.getElementById('btn-sincronizar');
const ojosGato = document.querySelector('.pixel-cat');

if (btnSincronizar) {
    btnSincronizar.addEventListener('mouseenter', () => {
        // Añadimos la clase que dispara el parpadeo
        ojosGato.classList.add('blink-trigger');
        
        // Removemos la clase después de 0.6s (lo que dura la animación) 
        // para que se pueda volver a disparar la próxima vez
        setTimeout(() => {
            ojosGato.classList.remove('blink-trigger');
        }, 600);
    });
}