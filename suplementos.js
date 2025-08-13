document.querySelector('#boton-calcular').addEventListener('click', determinarMontoFinal);

function determinarMontoFinal() {
    let tipoSuplemento = '';
    let costoCombo = 0;
    let porcentajeDescuento = 0; 
    let codigoDescuento = 0;
    let montoDescuento = 0; 
    let montoFinal = 0;
    let cantidad = 0;
    let subtotal = 0;
    codigoDescuento = Number(document.querySelector('#codigo-descuento').value); 
    tipoSuplemento = document.querySelector('#selector-tipo-suplemento').value; 
    cantidad = Number(document.querySelector('#cantidad-combos').value); 

    if (tipoSuplemento === "" || cantidad <= 0) {
        console.warn("Por favor, selecciona un combo de suplementos y una cantidad válida.");

        return; 
    }

    if (codigoDescuento >= 20 && codigoDescuento <= 24) {
        porcentajeDescuento = 0.1;
    }
    switch (tipoSuplemento) {
        case 's1': 
            costoCombo = 50.00;
            break;
        case 's2': 
            costoCombo = 75.00;
            break;
        case 's3': 
            costoCombo = 60.00;
            break;
        case 's4': 
            costoCombo = 90.00;
            break;
        case 's5': 
            costoCombo = 80.00;
            break;
        default:
            costoCombo = 0; 
            break;
    }

    subtotal = costoCombo * cantidad;

    montoDescuento = subtotal * porcentajeDescuento;
    montoFinal = subtotal - montoDescuento;
    document.querySelector('#resultado-monto-final').textContent = `$${montoFinal.toFixed(2)}`; 
}

function limpiarCampos() { 
    document.getElementById('codigo-descuento').value = ""; 
    document.getElementById('selector-tipo-suplemento').value = ""; 
    document.getElementById('resultado-monto-final').textContent = "$0.00";
}
document.querySelector('#boton-limpiar').addEventListener('click', limpiarCampos);