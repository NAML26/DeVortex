document.addEventListener('DOMContentLoaded', async function () {
    try {
        const response = await fetch('../pages/modal.html');
        if (!response.ok) {
            throw new Error('Error al cargar el modal');
        }
  
        const modalContent = await response.text();
        document.getElementById('modalContainer').innerHTML = modalContent;
  
        const signupForm = document.querySelector('#signupForm');
        const errorMessages = document.querySelector('#error-message-signup');
        signupForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = document.querySelector('#name').value;
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
  
            const Users = JSON.parse(localStorage.getItem('users')) || [];
            const isUserRegistered = Users.find(user => user.email === email);
            if (isUserRegistered) {
              errorMessages.textContent = 'Ya existe un usuario registrado con ese correo.';
           return;
            }
  
            Users.push({ name: name, email: email, password: password });
            localStorage.setItem('users', JSON.stringify(Users));
            alert('Registro Exitoso!');
            window.location.href = '../pages/login.html';
        });
       
        document.getElementById('ingresaLink').addEventListener('click', function () {
            window.location.href = '../pages/login.html';
        });
    } catch (error) {
        console.error(error);
    }
  });