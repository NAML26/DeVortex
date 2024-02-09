const loginForm = document.querySelector('#loginForm')
const errorMessage = document.querySelector('#error-message');
loginForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    const Users = JSON.parse(localStorage.getItem('users')) || []
    const validUser = Users.find(user => user.email === email && user.password === password)
    if(!validUser){
        errorMessage.textContent = 'Usuario y/o contraseña incorrecto'; // Actualiza el mensaje de error
        return;
    }
    alert(`Bienvenido ${validUser.name}`)
    localStorage.setItem('login_success', JSON.stringify(validUser))
    window.location.href = '../index.html'   

})

