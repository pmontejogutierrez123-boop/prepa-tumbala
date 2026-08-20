// ======================================
// MODO OSCURO
// ======================================

const modoBtn = document.getElementById("modoBtn");

if (modoBtn) {

    modoBtn.addEventListener("click", function () {

        document.body.classList.toggle("oscuro");

        if (document.body.classList.contains("oscuro")) {

            modoBtn.textContent = "☀️";

        } else {

            modoBtn.textContent = "🌙";

        }

    });

}


// ======================================
// FORMULARIO DE CONTACTO
// ======================================

const formulario = document.getElementById("formContacto");

if (formulario) {

    formulario.addEventListener("submit", function(event) {

        event.preventDefault();

        const nombre =
            document.getElementById("nombre").value;

        alert(
            "¡Gracias, " + nombre +
            "! Tu mensaje fue enviado correctamente."
        );

        formulario.reset();

    });

}