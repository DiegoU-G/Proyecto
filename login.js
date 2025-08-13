document.getElementById('formulario-acceso').addEventListener('submit', function(evento) {
    evento.preventDefault();

    const nombreUsuario = document.getElementById('nombre-usuario').value;
    const contrasena = document.getElementById('contrasena').value; 
    const mensajeError = document.getElementById('mensaje-error');

    if (nombreUsuario === '' || contrasena === '') {
        mensajeError.textContent = 'Por favor, completa todos los campos.';
        mensajeError.style.display = 'block';
    } else {
        mensajeError.textContent = 'Inicio de sesión exitoso. ¡Redireccionando!';
        mensajeError.style.color = '#33cc33'; 
        mensajeError.style.display = 'block';
        window.location.href = 'landing.html'; 
    }
});
