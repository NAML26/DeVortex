/* const exampleModal = document.getElementById('exampleModal')
if (exampleModal) {
  exampleModal.addEventListener('show.bs.modal', event => {
    /* Button that triggered the modal */
   // const button = event.relatedTarget
    /* Extract info from data-bs-* attributes */
   // const recipient = button.getAttribute('data-bs-whatever')
/*     If necessary, you could initiate an Ajax request here
    and then do the updating in a callback. */
/* 
    Update the modal's content. */
 /*   const modalTitle = exampleModal.querySelector('.modal-title')
    const modalBodyInput = exampleModal.querySelector('.modal-body input')

    modalTitle.textContent = `New message to ${recipient}`
    modalBodyInput.value = recipient
  })
} */

document.addEventListener('DOMContentLoaded', async function () {
  try {
    const response = await fetch('modal.html');
    if (!response.ok) {
      throw new Error('Error al cargar el modal');
    }

    const modalContent = await response.text();
    document.getElementById('modalContainer').innerHTML = modalContent;

    // Después de cargar el modal, inicializa Bootstrap y otros scripts si es necesario
   // var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));

    // Mostrar el modal
    // function showModal() {
     /*  myModal.show(); */
    //  document.getElementById("modalContainer").style.display = "block";
      //
      //
      //
      //
      //acciones para registro
  //  } 

    // Ocultar el modal
  //  function hideModal() {
      /* myModal.hide(); */
    //  document.getElementById("modalContainer").style.display = "none";
    //}

    // Asignar eventos a los botones u otros elementos para mostrar y ocultar el modal
   //var showButton = document.getElementById('showModalButton'); // Reemplaza 'showModalButton' con el ID de tu botón para mostrar el modal
    //var hideButton = document.getElementById('hideModalButton'); // Reemplaza 'hideModalButton' con el ID de tu botón para ocultar el modal

    // Evento para mostrar el modal al hacer clic en el botón correspondiente
    //showButton.addEventListener('click', showModal);

    //Evento para ocultar el modal al hacer clic en el botón correspondiente
    //hideButton.addEventListener('click', hideModal);
 } catch (error) {
  console.error(error);
  }
});