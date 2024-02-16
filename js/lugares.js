// Obtener todos los botones "Guardar"
const guardarBotones = document.querySelectorAll('#guardarTarjeta');

guardarBotones.forEach(boton => {
    boton.addEventListener('click', function() {
        const tarjeta = this.closest('.card');
        const tarjetaHTML = tarjeta.outerHTML;
        const tarjetaID = tarjeta.id;
        localStorage.setItem(tarjetaID, tarjetaHTML);
    });
});