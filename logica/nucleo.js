/* =========================================
   NÚCLEO ORQUESTADOR: CEREBRO DE LA TERMINAL
========================================= */

document.addEventListener("DOMContentLoaded", () => {
    const puntoInyeccion = document.getElementById("punto-inyeccion-nucleo");
    
    // ESTADO 1: Pantalla de Arranque
    function iniciarTerminal() {
        puntoInyeccion.innerHTML = `
            <div class="ventana-sistema">
                <h1 class="texto-fluido-zarco">NEXO G7 // ESTADO: EN LÍNEA</h1>
                <p>El núcleo lógico ha sido sincronizado.</p>
                <hr style="border-color: var(--color-energia-hesra); margin: 20px 0;">
                
                <pre class="texto-fluido-zarco" style="font-size: 1.5rem; line-height: 1.1; margin: 20px 0;">
   /\\_/\\  
  ( o.o ) 
   > ^ <  
                </pre>
                <p>Entidad KATT vinculada con éxito.</p>
                
                <button id="boton-enlace" class="boton-terminal parpadeo">[ INICIAR ENLACE ]</button>
            </div>
        `;
        
        const botonEnlace = document.getElementById("boton-enlace");
        botonEnlace.addEventListener("click", () => {
            cargarEscritorio(); 
        });
    }

   // ESTADO 2: El Escritorio Principal y la Barra de Estado
    function cargarEscritorio() {
        puntoInyeccion.innerHTML = `
            <div class="contenedor-escritorio">
                <div class="barra-estado">
                    <span>ZRC-OS // NEXO PRINCIPAL</span>
                    <span id="reloj-sistema">00:00:00</span>
                    <span>RED: ESTABLE</span>
                </div>
                
                <div class="area-trabajo">
                    <h2 class="texto-fluido-zarco" style="text-align: left; border-bottom: 1px solid var(--color-energia-hesra); padding-bottom: 10px; margin-top: 0;">
                        ACCESO: OPERADOR
                    </h2>
                    
                    <div class="contenedor-iconos">
                        
                        <div class="icono-sistema" id="nodo-archivos">
                            <div class="icono-grafico">[_]</div>
                            <div class="icono-texto">DATOS_G7</div>
                        </div>

                        <div class="icono-sistema" id="nodo-katt-log">
                            <div class="icono-grafico">[≡]</div>
                            <div class="icono-texto">KATT.log</div>
                        </div>

                    </div>
                </div>
            </div>
        `;
        
        iniciarReloj(); 
        console.log("Sistema Base Zarco: Nodos de datos inyectados.");
    }
    
    // Función para dar vida al reloj
    function iniciarReloj() {
        const visorReloj = document.getElementById("reloj-sistema");
        
        // Actualizamos la hora cada 1000 milisegundos (1 segundo)
        setInterval(() => {
            const tiempoActual = new Date();
            // Formateamos para que muestre Horas:Minutos:Segundos
            visorReloj.textContent = tiempoActual.toLocaleTimeString('es-ES'); 
        }, 1000);
    }

    // Disparamos la secuencia inicial
    iniciarTerminal();
});