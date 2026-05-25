/* =========================================
   NÚCLEO ORQUESTADOR: CEREBRO DE LA TERMINAL
========================================= */

document.addEventListener("DOMContentLoaded", () => {
    // Identificamos el contenedor vacío del esqueleto maestro
    const puntoInyeccion = document.getElementById("punto-inyeccion-nucleo");
    
    // Función de inicialización del puente cuántico
    function iniciarTerminal() {
        // Inyectamos el primer mensaje del sistema en la pantalla
        puntoInyeccion.innerHTML = `
            <div style="padding: 20px;">
                <h1 class="texto-fluido-zarco">NEXO G7 // ESTADO: EN LÍNEA</h1>
                <p>El núcleo lógico ha sido sincronizado. El puente dimensional está estable.</p>
                <p style="color: var(--color-texto-muerto);">Esperando directivas del Operador...</p>
            </div>
        `;
        
        // Registro silencioso en la consola para el desarrollador
        console.log("Sistema Base Zarco: Nodo estabilizado.");
    }

    // Ejecutamos la secuencia de arranque
    iniciarTerminal();
});