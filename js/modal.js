document.addEventListener('DOMContentLoaded', async function () {
  try {
      const response = await fetch('../pages/modal.html' || 'modal.html');
      if (!response.ok) {
          throw new Error('Error al cargar el modal');
      }

      const modalContent = await response.text();
      document.getElementById('modalContainer').innerHTML = modalContent;

      const signupForm = document.querySelector('#signupForm');
      signupForm.addEventListener('submit', function (e) {
          e.preventDefault();
          const name = document.querySelector('#name').value;
          const email = document.querySelector('#email').value;
          const password = document.querySelector('#password').value;

          const Users = JSON.parse(localStorage.getItem('users')) || [];
          const isUserRegistered = Users.find(user => user.email === email);
          if (isUserRegistered) {
              return alert('El usuario ya está registrado!');
          }

          Users.push({ name: name, email: email, password: password });
          localStorage.setItem('users', JSON.stringify(Users));
          alert('Registro Exitoso!');
          window.location.href = 'login.html';
      });

     
      document.getElementById('ingresaLink').addEventListener('click', function () {
          window.location.href = '../pages/login.html';
      });
  } catch (error) {
      console.error(error);
  }
});


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