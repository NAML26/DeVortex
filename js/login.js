const loginForm = document.querySelector('#loginForm')
const errorMessage = document.querySelector('#error-message');

loginForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    const url = `http://localhost:8080/admin/users/byEmail?email=${email}`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        if (data.correo === email && data.contrasena === password){
            alert(`Bienvenido ${data.correo}`)
            window.location.href = '../index.html' 
        } else if (data.correo === email && data.contrasena != password){
            errorMessage.textContent = 'Usuario y/o contraseña incorrectos';
        }
    })
    .catch(error => {
        console.error(error, 'Usuario no encontrado');
        errorMessage.textContent = 'Usuario y/o contraseña incorrectos';
    })
})

