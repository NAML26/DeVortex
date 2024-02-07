const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})


/****************************Inicio Página invitaciones****************************/

document.getElementById("crear-invitacion").addEventListener('click', function() {
    scrollToSection('container-crear-invitacion');
});

function scrollToSection(sectionId) {
    // Obtener la posición y desplazarse a la sección deseada
    const section = document.getElementById(sectionId);
    window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth' // Efecto de desplazamiento suave
    });
}

function mostrarDatos() {
  
    var inputNombre = document.getElementById('inputAnfi').value;
    console.log(inputNombre);
    var inputFecha = document.getElementById('inputFecha').value;
    var inputHora = document.getElementById('inputHora').value;
    var inputDireccion = document.getElementById('inputDireccion').value;
    var inputComentar = document.getElementById('inputComentar').value;

    // Obtener la URL de la imagen activa en el carrusel
    var carrusel = document.getElementById('invitaciones-carrusel');
    var imagenActiva = carrusel.querySelector('.carousel-item.active .invitacion-imagen');
    var imagenURL = imagenActiva.src;

    // Construir HTML para la Card
    var cardHTML = `
    <div style="background-image: url('${imagenURL}'); background-size: cover; height: 700px; display: flex; flex-direction: column; justify-content: center; align-items: center; color: black;">
      <h2>${inputNombre}</h2>
      <p>${inputFecha}</p>
      <p>${inputHora}</p>
      <p>${inputDireccion}</p>
      <p>${inputComentar}</p>
      </div>
    `;
    // Mostrar 
    document.getElementById('userCard').innerHTML = cardHTML;
  }
/****************************Término Página invitaciones****************************/

/****************Insertar lugares******************/
/* const lugaresContainer = document.getElementById("lugaresContainer");

const lugares = [haciendaSanFernando, salonMoezllonz, salonLienzo, centroVeracruzanoCoyoacan, salonAquiahuac];

lugares.forEach(lugar => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <h2>${lugar.nombre}</h2>
    <p>Precio: $${lugar.precio}</p>
    <p>Capacidad: ${lugar.capacidad}</p>
    <p>Ubicación: ${lugar.ubicacion}</p>
  `;

  lugaresContainer.appendChild(card);
}); */

/*const registro = document.getElementById('toRegistroCompleto');
registro.addEventListener('click', (e) =>{
  e.preventDefault()
  window.location.href = '../registroCompleto.html'
}); 
llamar registro completo con el boton de anunciar espacio*/