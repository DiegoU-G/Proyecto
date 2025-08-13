document.addEventListener('DOMContentLoaded', () => {
    const parametrosUrl = new URLSearchParams(window.location.search); 
    const nombrePlan = parametrosUrl.get('plan'); 
    const precioPlan = parametrosUrl.get('price'); 

    const elementoNombrePlan = document.getElementById('nombre-plan'); 
    const elementoPrecioPlan = document.getElementById('precio-plan'); 

    if (nombrePlan && precioPlan) {
        elementoNombrePlan.textContent = nombrePlan;
        elementoPrecioPlan.textContent = `$${precioPlan}`;
    } else {
        elementoNombrePlan.textContent = 'No seleccionado';
        elementoPrecioPlan.textContent = '$0';
    }

    const formularioPago = document.getElementById('formulario-pago'); 
    formularioPago.addEventListener('submit', (e) => {
        e.preventDefault();

        const numeroTarjeta = document.getElementById('numero-tarjeta').value; 
        const nombreTarjeta = document.getElementById('nombre-tarjeta').value; 
        const fechaCaducidad = document.getElementById('fecha-caducidad').value; 
        const cvv = document.getElementById('cvv').value;
        const mensajePago = document.getElementById('mensaje-pago');

        if (numeroTarjeta && nombreTarjeta && fechaCaducidad && cvv) {
            mensajePago.textContent = 'Pago procesado con éxito. ¡Gracias por tu compra!';
            mensajePago.style.color = '#33cc33'; 
            mensajePago.style.display = 'block';

        } else {
            mensajePago.textContent = 'Por favor, completa todos los campos de pago.';
            mensajePago.style.color = '#ff3333';
            mensajePago.style.display = 'block';
        }
    });
});
