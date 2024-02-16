document.addEventListener('DOMContentLoaded', async function () {
    try {
        const response = await fetch('./modal.html');
        if (!response.ok) {
            throw new Error('Error al cargar el modal');
        }
  
        const modalContent = await response.text();
        document.getElementById('modalContainer').innerHTML = modalContent;
  
        const signupForm = document.querySelector('#signupForm');
        const errorMessages = document.querySelector('#error-message-signup'); 
        signupForm.addEventListener('submit', async (e) => {
            e.preventDefault(); // Evita que el formulario se envíe automáticamente
            const name = document.querySelector('#name').value;
            const email = document.querySelector('#email').value;
            const password = document.querySelector('#password').value;
            const confirmPassword = document.querySelector('#confirmacion').value; 

            const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%*?&]{6,}$/;
            if (!passwordRegex.test(password)) {
                errorMessages.textContent = 'La contraseña debe contener al menos 6 caracteres, una letra, un número y un símbolo.';
                return;
            } 
     
            if (password !== confirmPassword) {
                errorMessages.textContent = 'Las contraseñas no coinciden.';
                return;
            }

            const user = {   
                nombre: name,           
                correo: email,
                contrasena: password
            };
          
            const url = 'http://localhost:8080/admin/users';

            try {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(user)
                });
                if (!response.ok) {
                    throw new Error('Error al registrar el usuario');
                }
                const data = await response.json();
                console.log(data);
                alert('Registro Exitoso!');
                window.location.href = './login.html';
            }
            catch(error) {
                console.error('Error al crear el usuario:', error);
                // Aquí podrías mostrar un mensaje de error al usuario si falla el registro
            }
        });
    } catch (error) {
        console.error(error);
    }
});




/* document.addEventListener('DOMContentLoaded', async function () {
    try {
        const response = await fetch('./modal.html');
        if (!response.ok) {
            throw new Error('Error al cargar el modal');
        } */
  //Funciones para registro
       /*  const modalContent = await response.text();
        document.getElementById('modalContainer').innerHTML = modalContent;
  
        const signupForm = document.querySelector('#signupForm');
        const errorMessages = document.querySelector('#error-message-signup'); 
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.querySelector('#email').value;
            const password = document.querySelector('#password').value;
            const confirmPassword = document.querySelector('#confirmacion').value; 
          const passwordRegex = /^(?=.[A-Za-z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%*?&]{6,}$/;
         if (!passwordRegex.test(password)) {
                   errorMessages.textContent = 'La contraseña debe contener al menos 6 carácteres, un símbolo, y un número.';
                   return;
               } 
     
                else if (password !== confirmPassword) {
                 errorMessages.textContent = 'Las contraseñas no coinciden.';
                 return;
             }
            const user = {              
              correo: email,
              contrasena: password
          };
          
          const url = `http://localhost:8080/admin/users`;

          const crearUsuario = async () => {
            try {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(user)
                });
                const data = await response.json();
                console.log(data); */
               /*  alert('Registro Exitoso!'); */
         /*    }
            catch(error) {
                console.log(error);
            }
        } */
       // crearUsuario();
      /*   alert('Registro Exitoso!');  */
  /*   });
    
} catch (error) {
    console.error(error);
}
}); */
        
  
          /*   const Users = JSON.parse(localStorage.getItem('users')) || [];
            const isUserRegistered = Users.find(user => user.email === email);
            if (isUserRegistered) {
              errorMessages.textContent = 'Ya existe un usuario registrado con ese correo.';
           return;
            } */
  /* 
            Users.push({ name: name, email: email, password: password });
            localStorage.setItem('users', JSON.stringify(Users));
            alert('Registro Exitoso!');
            window.location.href = './login.html'; */
       
        /* document.getElementById('ingresaLink').addEventListener('click', function () {
            window.location.href = './login.html';
        }); */
      