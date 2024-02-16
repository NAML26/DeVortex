const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");



abrir.addEventListener("click", () => {
  nav.classList.add("visible");
});

cerrar.addEventListener("click", () => {
  nav.classList.remove("visible");
});

/****************************Inicio Página invitaciones****************************/

document
  .getElementById("crear-invitacion")
  .addEventListener("click", () => {
    scrollToSection("container-crear-invitacion");
  });

function scrollToSection(sectionId) {
  // Obtener la posición y desplazarse a la sección deseada
  const section = document.getElementById(sectionId);
  window.scrollTo({
    top: section.offsetTop,
    behavior: "smooth", // Efecto de desplazamiento suave
  });
}

function mostrarDatos() {
  var inputNombre = document.getElementById("inputAnfi").value;
  console.log(inputNombre);
  var inputFecha = document.getElementById("inputFecha").value;
  var inputHora = document.getElementById("inputHora").value;
  var inputDireccion = document.getElementById("inputDireccion").value;
  var inputComentar = document.getElementById("inputComentar").value;
  var inputTelefono = document.getElementById('inputTelefono').value;

  // Obtener la URL de la imagen activa en el carrusel
  var carrusel = document.getElementById("invitaciones-carrusel");
  var imagenActiva = carrusel.querySelector(
    ".carousel-item.active .invitacion-imagen"
  );
  // Obtener las dimensiones originales de la imagen
  var anchoOriginal = imagenActiva.naturalWidth;
  var altoOriginal = imagenActiva.naturalHeight;

  // Crear un elemento canvas
  const canvas = document.createElement("canvas");
  canvas.width = anchoOriginal;
  canvas.height = altoOriginal;
  const ctx = canvas.getContext("2d");

  // Dibujar la imagen original en el canvas
  ctx.drawImage(imagenActiva, 0, 0);



  // Calcular la posición x centrada
const xCentrado = canvas.width/ 2;

// Agregar el texto al canvas
ctx.font = "120px Comic Sans MS"; // Estilo de fuente y tamaño
ctx.fillStyle = "#333"; // Color del texto
ctx.textAlign = "center";
ctx.fillText(inputNombre, xCentrado, 800);

ctx.font = "50px Jaldi"; // Estilo de fuente y tamaño
ctx.fillStyle = "#333"; // Color del texto
ctx.textAlign = "center";
const customFecha = `El día: ${inputFecha},`
ctx.fillText(customFecha, xCentrado, 950);

ctx.font = "60px Jaldi"; // Estilo de fuente y tamaño
ctx.fillStyle = "#333"; // Color del texto
ctx.textAlign = "center";
const customHora = `a las: ${inputHora} hrs.`
ctx.fillText(customHora, xCentrado, 1100);

ctx.font = "45px Jaldi"; // Estilo de fuente y tamaño
ctx.fillStyle = "#333"; // Color del texto
ctx.textAlign = "center";
const customDireccion = `Te esperamos en: ${inputDireccion}`
ctx.fillText(customDireccion, xCentrado, 1250);

ctx.font = "50px Jaldi"; // Estilo de fuente y tamaño
ctx.fillStyle = "#333"; // Color del texto
ctx.textAlign = "center";
ctx.fillText(inputComentar, xCentrado, 1400);

ctx.font = "50px Jaldi"; // Estilo de fuente y tamaño
ctx.fillStyle = "#333"; // Color del texto
ctx.textAlign = "center";
const customTel =  `Confirma tu asistencia al: ${inputTelefono}`;
ctx.fillText(customTel, xCentrado, 1550);

  // Obtener la URL de la imagen combinada
  const imagenCombinadaURL = canvas.toDataURL("image/png");

  // Crear un nuevo elemento img
const imgElement = document.createElement("img");
imgElement.src = imagenCombinadaURL;

// Actualizar el contenido del div
const userCardDiv = document.getElementById("userCard");
userCardDiv.innerHTML = ""; // Limpia el contenido actual
userCardDiv.appendChild(imgElement); // Agrega la imagen al div

const botonDescargar = document.createElement("button");
botonDescargar.className = "especial2 guardar-imagen";
botonDescargar.textContent = "Guardar invitación";
botonDescargar.onclick = function() {
  const link = document.createElement("a");
  link.href = imagenCombinadaURL;
  link.download = "invitacion_con_texto.jpeg"; // Nombre del archivo
  link.click();
};
userCardDiv.appendChild(botonDescargar);

  }

  //redirección de registro completo a MiLokl
  //<---------------------------------------->
/*   // const registro = document.getElementById('toRegistroCompleto');
  // registro.addEventListener('click', () =>{ */
  //   /* e.preventDefault() */
 /*  //   alert("Gracias por completar tu registro, tu Lok'l ha sido publicado con éxito");
  //   window.location.href = 'miespacio.html' 
  // });  */

  //<---------------------------------------->

  //  document.getElementById('myForm').addEventListener('submit', function (event) {
  //   event.preventDefault();

  //   alert("Gracias por completar tu registro, tu Lok'l ha sido publicado con éxito");

  //   window.location.href = 'index.html' 
    
  // })

  //<---------------------------------------->

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


//llamar registro completo con el boton de anunciar espacio

// const lugaresContainer = document.getElementById("lugaresContainer");

// lugares.forEach(lugar => {
//   const card = document.createElement("div");
//   card.classList.add("card");

//   card.innerHTML = `
//     <h2>${lugar.nombre}</h2>
//     <p>Precio: $${lugar.precio}</p>
//     <p>Capacidad: ${lugar.capacidad}</p>
//     <p>Ubicación: ${lugar.ubicacion}</p>
//   `;

//   lugaresContainer.appendChild(card);
// });