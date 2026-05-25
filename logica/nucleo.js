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
        
        // Conectamos el sensor de clic al botón
        const botonEnlace = document.getElementById("boton-enlace");
        botonEnlace.addEventListener("click", () => {
            cargarEscritorio(); // Al hacer clic, disparamos la Fase 2
        });
    }

    // ESTADO 2: El Escritorio Principal (El interior del sistema)
    function cargarEscritorio() {
        // Expandimos la ventana para que ocupe casi toda la pantalla
        puntoInyeccion.innerHTML = `
            <div class="ventana-sistema" style="width: 95vw; height: 90vh; max-width: none; display: flex; flex-direction: column;">
                <h2 class="texto-fluido-zarco" style="text-align: left; border-bottom: 1px solid var(--color-energia-hesra); padding-bottom: 10px;">
                    ESCRITORIO ZARCO // NIVEL DE ACCESO: OPERADOR
                </h2>
                
                <div style="flex-grow: 1; display: flex; justify-content: center; align-items: center; flex-direction: column;">
                    <p>Bienvenido al nexo principal. El entorno está vacío.</p>
                    <p style="color: var(--color-texto-muerto);">Esperando despliegue de nodos y archivos interceptados...</p>
                </div>
            </div>
        `;
        console.log("Sistema Base Zarco: Enlace establecido. Escritorio cargado.");
    }

    // Disparamos la secuencia inicial
    iniciarTerminal();
});