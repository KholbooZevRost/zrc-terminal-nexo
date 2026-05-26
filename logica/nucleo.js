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
    "CONECTANDO WITH SERVIDOR REMOTO: REALIDAD_PARALELA_BETA..."
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
        iniciar_secuencia_acoplamiento();
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

    // 1. CONTROL DE LA BARRA DE PROGRESO
    function ejecutarProgresoBarra() {
        const ciclo_carga = setInterval(() => {
            if (error_provocado && !error_resuelto) return;

            progreso += Math.floor(Math.random() * 3) + 1;
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

                log_sistema_nexo.innerHTML += "<br><span style='color: #ffffff; font-weight: bold; text-shadow: 0 0 8px #33ff66;'>> [ ENLACE CON INTERFAZ VANGUARDIA COMPLETADO CON ÉXITO ]</span>";
                log_sistema_nexo.scrollTop = log_sistema_nexo.scrollHeight;

                const emblema = document.querySelector('.emblema-nexo');
                emblema.style.transition = 'all 0.15s ease-in-out';
                
                // --- CRONOLOGÍA DE TRIPLE PARPADEO CALIBRADO ---
                
                // [PRIMER PARPADEO]: Normal y espaciado
                setTimeout(() => {
                    emblema.style.filter = 'drop-shadow(0 0 15px #33ff66) brightness(1.8)';
                    emblema.style.transform = 'scale(1.06)';
                }, 400);

                // Apagado del primer parpadeo
                setTimeout(() => {
                    emblema.style.filter = 'drop-shadow(0 0 6px rgba(51, 255, 102, 0.7))';
                    emblema.style.transform = 'scale(1)';
                }, 600);

                // [SEGUNDO PARPADEO]: Espera prolongada y brilla más fuerte
                setTimeout(() => {
                    emblema.style.filter = 'drop-shadow(0 0 35px #33ff66) brightness(3)';
                    emblema.style.transform = 'scale(1.15)';
                }, 1200);

                // Apagado del segundo parpadeo
                setTimeout(() => {
                    emblema.style.filter = 'drop-shadow(0 0 6px rgba(51, 255, 102, 0.7))';
                    emblema.style.transform = 'scale(1)';
                }, 1450);

                // [TERCER PARPADEO]: Sobrecarga total de fósforo blanco uniforme
                setTimeout(() => {
                    // Ocultamos las líneas físicas de barrido CRT para que no manchen el blanco puro
                    const vidrio = document.querySelector('.vidrio-crt');
                    if (vidrio) vidrio.style.opacity = '0';

                    // Convertimos la caja del monitor en un bloque blanco puro instantáneo
                    monitor_crt.style.transition = 'background 0.08s ease-in-out';
                    monitor_crt.style.background = '#ffffff';

                    // Forzamos el emblema a fundirse en blanco absoluto
                    emblema.style.filter = 'brightness(100)';
                    emblema.style.transform = 'scale(1.2)';
                    
                    // Forzamos la cabecera del sistema a tornarse blanca y remover su sombra verde
                    const etiqueta = document.querySelector('.etiqueta-sistema');
                    if (etiqueta) {
                        etiqueta.style.color = '#ffffff';
                        etiqueta.style.textShadow = 'none';
                    }

                    // Forzamos el bloque de registros de consola y sus spans internos (errores) a blanco puro
                    if (log_sistema_nexo) {
                        log_sistema_nexo.style.color = '#ffffff';
                        log_sistema_nexo.style.textShadow = 'none';
                        log_sistema_nexo.style.borderColor = '#ffffff';
                        log_sistema_nexo.querySelectorAll('span').forEach(span => {
                            span.style.color = '#ffffff';
                            span.style.textShadow = 'none';
                            span.style.opacity = '1';
                        });
                    }

                    // Ocultamos la rejilla pixelada de la barra de carga para un fundido limpio
                    const contenedor_barra = document.getElementById('contenedor-barra-progreso');
                    if (contenedor_barra) {
                        contenedor_barra.style.borderColor = '#ffffff';
                        contenedor_barra.style.backgroundColor = '#ffffff';
                        contenedor_barra.style.boxShadow = 'none';
                    }
                    if (barra_progreso) {
                        barra_progreso.style.backgroundColor = '#ffffff';
                        barra_progreso.style.boxShadow = 'none';
                        barra_progreso.style.backgroundImage = 'none'; 
                    }

                    // Forzamos el indicador de porcentaje final a blanco
                    if (texto_porcentaje) {
                        texto_porcentaje.parentElement.style.color = '#ffffff';
                        texto_porcentaje.parentElement.style.textShadow = 'none';
                    }

                }, 2100);

                // Desvanecimiento controlado desde el blanco absoluto hacia el escritorio
                setTimeout(() => {
                    revelar_escritorio();
                }, 2350); 
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

        let delay = 30; 
        let dados = Math.random();
        let string_inyectar = "";

        if (dados > 0.90) {
            string_inyectar = `<span style="color: #33ff66;">> ${sentencias_espanol[Math.floor(Math.random() * sentencias_espanol.length)]}</span>`;
            delay = 450;
        } else if (dados > 0.65) {
            string_inyectar = `<span style="opacity: 0.3;">DESCARGANDO: pkg/vanguardia-core-${fragmentos_binarios[Math.floor(Math.random() * fragmentos_binarios.length)]} [${obtenerDatosCorruptos()}]</span>`;
            delay = 12;
        } else if (dados > 0.40) {
            string_inyectar = `<span style="opacity: 0.6;">M_DUMP [0x${Math.floor(Math.random()*16384).toString(16).toUpperCase()}]: ${obtenerDatosCorruptos()} ${obtenerDatosCorruptos()}</span>`;
            delay = 80;
        } else {
            string_inyectar = `<span style="opacity: 0.5;">> comp_node_status: ${obtenerDatosCorruptos()} ... OK</span>`;
            delay = 40;
        }

        log_sistema_nexo.innerHTML += string_inyectar + "<br>";
        log_sistema_nexo.scrollTop = log_sistema_nexo.scrollHeight;

        setTimeout(procesarLluviaDeCodigos, delay);
    }

    // 3. SECUENCIA DEL ERROR
    function provocarFalloDimensional() {
        monitor_crt.style.transform = "translate(7px, -5px) skew(4deg)";
        monitor_crt.style.filter = "brightness(2) blur(1px)";
        
        log_sistema_nexo.innerHTML += `<br><span style="color: #ff3333; font-weight: bold; text-shadow: 0 0 8px #ff3333;">[ERROR_CRÍTICO]: ALINEACIÓN DE DISPOSITIVOS FALLIDA</span><br>`;
        log_sistema_nexo.innerHTML += `<span style="color: #ff3333; opacity: 0.8;">[ALERTA]: ADVERTENCIA DE RUPTURA DE NEXO ENTRE UNIVERSOS (CÓDIGO_TRANS_0xFA)</span><br>`;
        log_sistema_nexo.innerHTML += `<span style="color: #ff3333; opacity: 0.6;">> VOLCADO DE EMERGENCIA: ${obtenerDatosCorruptos()} ${obtenerDatosCorruptos()}</span><br>`;
        log_sistema_nexo.scrollTop = log_sistema_nexo.scrollHeight;

        setTimeout(() => {
            log_sistema_nexo.innerHTML += `<span style="color: #ffffff;">> INTERCEPCIÓN DE CONTROL: APLICANDO PARCHE AL VUELO EN NÚCLEO...</span><br>`;
            log_sistema_nexo.scrollTop = log_sistema_nexo.scrollHeight;
            monitor_crt.style.transform = "translate(-4px, 4px) skew(-2deg)";
            
            setTimeout(() => {
                monitor_crt.style.transform = "translate(0, 0) skew(0deg)";
                monitor_crt.style.filter = "none";
                
                log_sistema_nexo.innerHTML += `<span style="color: #33ff66; font-weight: bold;">> [PARCHE APLICADO]: SECTORES CUÁNTICOS REDIRECCIONADOS CON ÉXITO. RESUELTO.</span><br>`;
                log_sistema_nexo.innerHTML += `<span style="color: #33ff66; opacity: 0.7;">> REANUDANDO INSTALACIÓN DEL REPOSITORIO VANGUARDIA...</span><br><br>`;
                log_sistema_nexo.scrollTop = log_sistema_nexo.scrollHeight;
                
                error_resuelto = true;
            }, 900);
        }, 800);
    }
}

// --- TRANSICIÓN SUAVE DESDE BLANCO ABSOLUTO AL ESCRITORIO ---
function revelar_escritorio() {
    pantalla_carga.style.transition = 'opacity 0.6s cubic-bezier(0.1, 0.8, 0.25, 1)';
    pantalla_carga.style.opacity = '0';
    
    setTimeout(() => {
        pantalla_carga.style.display = 'none';
        escritorio.style.display = 'block';
        
        setTimeout(() => {
            escritorio.style.opacity = '1';
            escritorio.style.pointerEvents = 'auto';
        }, 50);
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