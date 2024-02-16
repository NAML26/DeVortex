
    const contenedor = document.getElementById('tarjetasGuardadas');
    for (let i = 0; i < localStorage.length; i++) {

        const clave = localStorage.key(i);
        const tarjetaHTML = localStorage.getItem(clave);
        contenedor.innerHTML += tarjetaHTML;
    }

