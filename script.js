const envoltura = document.querySelector(".envoltura-sobre");
const carta = document.querySelector(".carta");

function manejarEvento(e) {
    const target = e.target;

    // Si se toca directamente la carta abierta, ignorar el evento
    if (carta.classList.contains("abierta") && target.closest(".carta")) {
        e.stopPropagation();
        return;
    }

    // Abrir o cerrar el sobre
    if (
        target.matches(".sobre") || 
        target.matches(".solapa-derecha") ||
        target.matches(".solapa-izquierda") ||
        target.matches(".corazon")
    ) {
        envoltura.classList.toggle("abierto");
    } 
    // Mostrar o cerrar la carta
    else if (target.closest(".sobre")) {
        if (!carta.classList.contains("abierta")) {
            carta.classList.add("mostrar-carta");

            setTimeout(() => {
                carta.classList.remove("mostrar-carta");
                carta.classList.add("abierta");
            }, 500);

            envoltura.classList.add("desactivar-sobre");
        } else {
            carta.classList.add("cerrando-carta");
            envoltura.classList.remove("desactivar-sobre");

            setTimeout(() => {
                carta.classList.remove("cerrando-carta");
                carta.classList.remove("abierta");
            }, 500);
        }
    }
}

// Escucha tanto clics como toques para asegurar compatibilidad en móviles
document.addEventListener("click", manejarEvento);
document.addEventListener("touchstart", manejarEvento);