// --- VARIABLES DE SISTEMA: ZRC_STATION ---
const pantalla_splash = document.getElementById('pantalla-splash');
const pantalla_carga = document.getElementById('pantalla-carga');
const escritorio = document.getElementById('escritorio');
const gato = document.getElementById('contenedor-gato');

// Sincronización con los nuevos IDs del HTML
const barra_progreso = document.getElementById('barra-progreso-carga');
const log_sistema_nexo = document.getElementById('registro-nexo');
const texto_porcentaje = document.getElementById('numero-porcentaje');

// Ventana de Mensaje
const ventana_mensaje = document.getElementById('ventana-mensaje');
const cerrar_boton = document.getElementById('cerrar-ventana');
const texto_autor = document.getElementById('texto-autor');

const mensaje_alien = `[ INIT_BIO_SCAN_Z ]\n⏣ ⎈ ⍎ ⍕ ⍙ ⍚ ⍛ ⍜\nasdkjao4569g flakjfgi adsjfbas...\n> TRADUCCIÓN FALLIDA.\n> zrc_root: acceso_concedido.`;

// --- MATRICES DE DATOS CAÓTICOS E INTERDIMENSIONALES ---
const fragmentos_binarios = ["01101001", "10011110", "00001111", "11100001", "10101010", "01010101"];
const bloques_unicode = ["⏣", "⎈", "⍎", "⍕", "⍙", "⍚", "⍛", "⍜", "░", "▒", "▓", "█", "ᛟ", "ᛖ", "ᚱ", "☣", "⚙", "⚡"];

const sentencias_espanol = [
    "S.O. VANGUARDIA: LOCALIZANDO PUNTO DE ANCLAJE EN EL UNIVERSO ORIGEN...",
    "ESTABLECIENDO CONEXIÓN SECTOR_0X99 // CANAL ALTERNO ACTIVO.",
    "RUIDO NECESARIO AÑADIDO PARA EVITAR COLAPSO DE LA LÍNEA TEMPORAL.",
    "DESCOMPRIMIENDO PAQUETES: kernel-core-vanguardia-nodes...",
    "SINCRONIZANDO CONSTANTES DE GRAVEDAD Y RELATIVIDAD LOCAL...",
    "EXTRAYENDO REGISTROS HISTÓRICOS DEL SUB-NEXO KOBLET...",
    "PROCESANDO FLUJO DE DATOS MULTIVERSAL ... INTEGRIDAD AL 94%",
    "ALINEANDO REJILLA MAGNÉTICA DEL MONITOR DE TRANSMISIÓN...",
    "CONECTANDO CON SERVIDOR REMOTO: REALIDAD_PARALELA_BETA..."
];

function obtenerDatosCorruptos() {
    let bloque = "";
    const cantidad = Math.floor(Math.random() * 4) + 2;
    for(let i = 0; i < cantidad; i++) {
        if(Math.random() > 0.5) {
            bloque += "0x" + Math.floor(Math.random()*255).toString(16).toUpperCase() + " ";
        } else {
            bloque += bloques_unicode[Math.floor(Math.random() * bloques_unicode.length)] + " ";
        }
    }
    return bloque;
}

// --- SECUENCIA DE INICIO ---
let sistema_iniciando = false;

gato.addEventListener('click', () => {
    if (sistema_iniciando) return;
    sistema_iniciando = true;

    // --- PARCHE CONTRALÍNEAS INTEGRADO ---
    document.body.style.backgroundColor = '#010401';

    pantalla_splash.style.opacity = '0';
    setTimeout(() => {
        pantalla_splash.style.display = 'none';
        pantalla_carga.style.display = 'flex';
        
        // Efecto de encendido de monitor CRT (Fade-in suave)
        setTimeout(() => {
            pantalla_carga.style.opacity = '1';
            iniciar_secuencia_acoplamiento();
        }, 10);
        
    }, 500);
});

// --- LÓGICA DE ARRANQUE "DENSE LINUX BOOT" ---
function iniciar_secuencia_acoplamiento() {
    let progreso = 0;
    let error_provocado = false;
    let error_resuelto = false;
    let bucle_logs_activo = false;
   
    log_sistema_nexo.innerHTML = '> ENLACE INTERCEPTADO EN EL UMBRAL DIMENSIONAL <span id="cursor-analogico">_</span>';
    const monitor_crt = document.querySelector('.contenedor-terminal-crt');

    let ciclos_parpadeo = 0;
    const secuencia_cursor = setInterval(() => {
        const cursor = document.getElementById('cursor-analogico');
        if (cursor) {
            cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
        }
        ciclos_parpadeo++;

        if (ciclos_parpadeo >= 6) {
            clearInterval(secuencia_cursor);
            log_sistema_nexo.innerHTML = '> INICIALIZANDO APILAMIENTO DE PAQUETES DE S.O. VANGUARDIA...<br>';
            bucle_logs_activo = true;
           
            procesarLluviaDeCodigos();
            ejecutarProgresoBarra();
        }
    }, 200);

    // 1. CONTROL DE LA BARRA DE PROGRESO (CON FÍSICA DE TIRONES ASÍNCRONOS)
    function ejecutarProgresoBarra() {
        const ciclo_carga = setInterval(() => {
            if (error_provocado && !error_resuelto) return;

            let dado_avance = Math.random();
            if (dado_avance > 0.82) {
                progreso += Math.floor(Math.random() * 8) + 4; 
            } else if (dado_avance > 0.40) {
                progreso += Math.floor(Math.random() * 2) + 1; 
            } else {
                progreso += 0; 
            }

            if (progreso > 100) progreso = 100;
           
            texto_porcentaje.innerText = progreso;
            barra_progreso.style.width = progreso + "%";

            if (progreso >= 45 && !error_provocado) {
                error_provocado = true;
                provocarFalloDimensional();
            }

            if (progreso >= 100) {
                clearInterval(ciclo_carga);
                bucle_logs_activo = false;
               
                monitor_crt.style.transform = 'translate(0, 0) skew(0deg)';
                monitor_crt.style.filter = 'none';
                monitor_crt.style.animation = 'none';

                log_sistema_nexo.innerHTML += "<span class='log-exito-plomo'>> ENLACE CON INTERFAZ VANGUARDIA COMPLETADO CON ÉXITO</span>";
                log_sistema_nexo.scrollTop = log_sistema_nexo.scrollHeight;

                const emblema = document.querySelector('.emblema-nexo');
                emblema.style.transition = 'all 0.3s ease-in-out';
               
                // --- CRONOLOGÍA DETALLADA: EFECTO DE ENCENDIDO DE MOTOR ---
                setTimeout(() => { emblema.style.filter = 'drop-shadow(0 0 10px #33ff66) brightness(1.2)'; emblema.style.transform = 'scale(1.03)'; }, 400);
                setTimeout(() => { emblema.style.filter = 'drop-shadow(0 0 6px rgba(51, 255, 102, 0.7))'; emblema.style.transform = 'scale(1)'; }, 700);
                setTimeout(() => { emblema.style.filter = 'drop-shadow(0 0 25px #33ff66) brightness(1.8)'; emblema.style.transform = 'scale(1.08)'; }, 1200);
                setTimeout(() => { emblema.style.filter = 'drop-shadow(0 0 6px rgba(51, 255, 102, 0.7))'; emblema.style.transform = 'scale(1)'; }, 1500);
                setTimeout(() => { emblema.style.filter = 'drop-shadow(0 0 40px #33ff66) brightness(2.5)'; emblema.style.transform = 'scale(1.15)'; }, 2200);
                setTimeout(() => { emblema.style.filter = 'drop-shadow(0 0 6px rgba(51, 255, 102, 0.7))'; emblema.style.transform = 'scale(1)'; revelar_escritorio(); }, 2600);
            }
        }, 180);
    }

    // 2. TORMENTA DE LOGS DINÁMICOS ASÍNCRONOS
    function procesarLluviaDeCodigos() {
        if (!bucle_logs_activo) return;
        if (error_provocado && !error_resuelto) {
            setTimeout(procesarLluviaDeCodigos, 200);
            return;
        }

        let delay = 20;
        let dados = Math.random();
        let string_inyectar = "";

        if (dados > 0.88) {
            string_inyectar = `<span style="color: #33ff66;">> ${sentencias_espanol[Math.floor(Math.random() * sentencias_espanol.length)]}</span>`;
            delay = Math.floor(Math.random() * 200) + 650; 
        } else if (dados > 0.45) {
            string_inyectar = `<span style="opacity: 0.25;">DESCARGANDO: sys-kernel-vanguardia-${fragmentos_binarios[Math.floor(Math.random() * fragmentos_binarios.length)]} [${obtenerDatosCorruptos()}]</span>`;
            delay = Math.floor(Math.random() * 6) + 4; 
        } else if (dados > 0.20) {
            string_inyectar = `<span style="opacity: 0.55;">REG_DUMP [0x${Math.floor(Math.random()*16384).toString(16).toUpperCase()}]: ${obtenerDatosCorruptos()}</span>`;
            delay = 60;
        } else {
            string_inyectar = `<span style="opacity: 0.45;">> verificando_nodo_cuantico: ${obtenerDatosCorruptos()} ... OK</span>`;
            delay = 120;
        }

        log_sistema_nexo.innerHTML += string_inyectar + "<br>";
        log_sistema_nexo.scrollTop = log_sistema_nexo.scrollHeight;

        setTimeout(procesarLluviaDeCodigos, delay);
    }

    // 3. COREOGRAFÍA DE INGENIERÍA DE BAJO NIVEL (GLITCH CLÁSICO DE MOVIMIENTO)
    function provocarFalloDimensional() {
        // --- PASO 1: GLITCH CLÁSICO (Desplazamiento lateral y centrado) ---
        monitor_crt.style.transform = "translate(3px, -2px) skew(1.5deg)";
        monitor_crt.style.filter = "brightness(1.15) blur(0.3px)";
        
        setTimeout(() => {
            // Regreso al centro
            monitor_crt.style.transform = "translate(0, 0) skew(0deg)";
            monitor_crt.style.filter = "none";
            
            // Inyección del error
            log_sistema_nexo.innerHTML += `<span class='log-error-rojo'>[KERNEL_PANIC]: STACK_OVERFLOW EN CORRECCIÓN DE DESCRIPTORES DE RED</span><br>`;
            log_sistema_nexo.scrollTop = log_sistema_nexo.scrollHeight;

            // --- PASO 2: INTENTO DE ARREGLO HUMANO ---
            setTimeout(() => {
                log_sistema_nexo.innerHTML += `<span class='log-defensa-verde'>> DEFENSA_NEXO: FORZANDO DESAPILAMIENTO DE PUNTEROS... HECHO</span><br>`;
                log_sistema_nexo.scrollTop = log_sistema_nexo.scrollHeight;

                // --- PASO 3: RECAÍDA ALIENÍGENA ---
                setTimeout(() => {
                    // Desplazamiento contrario (Lado opuesto)
                    monitor_crt.style.transform = "translate(-3px, 2px) skew(-1deg)";
                    monitor_crt.style.filter = "brightness(1.15) blur(0.3px)";
                    
                    log_sistema_nexo.innerHTML += `<span class='log-error-rojo'>REG_DUMP: EAX=0x7F⏣FF EBX=0x00⚡2A ESP=0xFA☣BC // NEXO_FAULT</span><br>`;
                    log_sistema_nexo.scrollTop = log_sistema_nexo.scrollHeight;

                    // --- PASO 4: RESOLUCIÓN ABSOLUTA ---
                    setTimeout(() => {
                        monitor_crt.style.transform = "translate(0, 0) skew(0deg)";
                        monitor_crt.style.filter = "none";
                        
                        log_sistema_nexo.innerHTML += `<span style="color: #33ff66; font-weight: bold;">> SYS_MUTEX_LOCK: ⚙ ⎈ [EXCLUSIÓN_MUTUA_INYECTADA] ... MONITOR ESTABLE.</span><br>`;
                        log_sistema_nexo.innerHTML += `<span style="color: #33ff66; opacity: 0.7;">> REANUDANDO INSTALACIÓN DEL REPOSITORIO VANGUARDIA...</span><br><br>`;
                        log_sistema_nexo.scrollTop = log_sistema_nexo.scrollHeight;
                        
                        error_resuelto = true; 
                    }, 1200); 

                }, 800); 

            }, 750); 

        }, 120); 
    }
}

// --- TRANSICIÓN DIRECTA ENLACE AL ESCRITORIO ---
function revelar_escritorio() {
    escritorio.style.display = 'block';
    escritorio.style.opacity = '1';
    escritorio.style.pointerEvents = 'auto';
   
    pantalla_carga.style.transition = 'opacity 0.6s cubic-bezier(0.1, 0.8, 0.25, 1)';
    pantalla_carga.style.opacity = '0';
   
    setTimeout(() => {
        pantalla_carga.style.display = 'none';
    }, 600);
}

// --- VENTANA DE ESCRITORIO ---
escritorio.addEventListener('click', (e) => {
    if (e.target.id === 'escritorio') {
        if (ventana_mensaje.style.display !== 'block') {
            ventana_mensaje.style.display = 'block';
            texto_autor.innerHTML = '';
            maquina_escribir(0);
        }
    }
});

function maquina_escribir(indice) {
    if (indice < mensaje_alien.length) {
        let caracter = mensaje_alien.charAt(indice);
        texto_autor.innerHTML += (caracter === '\n') ? '<br>' : caracter;
        setTimeout(() => maquina_escribir(indice + 1), 40);
    }
}

if (cerrar_boton) {
    cerrar_boton.addEventListener('click', (e) => {
        e.stopPropagation();
        ventana_mensaje.style.display = 'none';
    });
}

// --- SENSOR DE PARPADEO GATO ---
const boton_sincronizar = document.getElementById('btn-sincronizar');
const ojos_gato = document.querySelector('.pixel-cat');

if (boton_sincronizar) {
    boton_sincronizar.addEventListener('mouseenter', () => {
        ojos_gato.classList.add('blink-trigger');
        setTimeout(() => ojos_gato.classList.remove('blink-trigger'), 600);
    });
}