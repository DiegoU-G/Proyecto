
const CLAVE_ULTIMO_CALCULO = 'ultima_calculadora_pago';


document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formulario-calculadora');
    const resultadoDiv = document.getElementById('resultado-div');
    const pagoMensualSpan = document.getElementById('pago-mensual');
    const costoTotalSpan = document.getElementById('costo-total');
    const ultimaBusquedaP = document.getElementById('ultima-busqueda');
    const selectorPlan = document.getElementById('selector-plan');

    function cargarPlanes() {
        gymPlans.forEach(plan => {
            const opcion = document.createElement('option');
            opcion.value = plan.costo;
            opcion.textContent = plan.nombre;
            opcion.dataset.id = plan.id;
            selectorPlan.appendChild(opcion);
        });
    }

    cargarPlanes();
    cargarUltimoCalculo();

    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();

        const planSeleccionado = selectorPlan.options[selectorPlan.selectedIndex];
        const inputMeses = document.getElementById('meses');
        const inputInteres = document.getElementById('interes');

        let esValido = true;

        [inputMeses, inputInteres].forEach(input => {
            input.classList.remove('input-error');
            document.getElementById(`${input.id}-error`).classList.add('hidden');
        });

        if (!planSeleccionado || !planSeleccionado.value) {
            alert('Por favor, selecciona un plan o equipo.');
            esValido = false;
        }
        if (!inputMeses.value || parseInt(inputMeses.value) <= 0) {
            inputMeses.classList.add('input-error');
            document.getElementById('meses-error').classList.remove('hidden');
            esValido = false;
        }
        if (!inputInteres.value || parseFloat(inputInteres.value) < 0) {
            inputInteres.classList.add('input-error');
            document.getElementById('interes-error').classList.remove('hidden');
            esValido = false;
        }

        if (!esValido) {
            resultadoDiv.classList.add('hidden');
            return;
        }

        const monto = parseFloat(planSeleccionado.value);
        const meses = parseInt(inputMeses.value);
        const interesAnual = parseFloat(inputInteres.value);

        const pagoMensual = calcularPagoMensual(monto, meses, interesAnual);
        const costoTotal = pagoMensual * meses;

        pagoMensualSpan.textContent = `₡${pagoMensual.toFixed(2)}`;
        costoTotalSpan.textContent = `₡${costoTotal.toFixed(2)}`;
        resultadoDiv.classList.remove('hidden');

        guardarCalculo({ planId: planSeleccionado.dataset.id, meses, interesAnual });
    });
});

function calcularPagoMensual(monto, meses, interesAnual) {
    const interesMensual = (interesAnual / 100) / 12;

    if (interesMensual === 0) {
        return monto / meses;
    }

    const pagoMensual = monto * (interesMensual * Math.pow(1 + interesMensual, meses)) / (Math.pow(1 + interesMensual, meses) - 1);
    return pagoMensual;
}

function guardarCalculo(datos) {
    localStorage.setItem(CLAVE_ULTIMO_CALCULO, JSON.stringify(datos));
}

function cargarUltimoCalculo() {
    const ultimaBusquedaP = document.getElementById('ultima-busqueda');
    const datosGuardados = localStorage.getItem(CLAVE_ULTIMO_CALCULO);
    if (datosGuardados) {
        const datos = JSON.parse(datosGuardados);
        const selectorPlan = document.getElementById('selector-plan');
        const planSeleccionado = gymPlans.find(plan => plan.id === datos.planId);
        if (planSeleccionado) {
            selectorPlan.value = planSeleccionado.costo;
        }
        document.getElementById('meses').value = datos.meses;
        document.getElementById('interes').value = datos.interesAnual;
        ultimaBusquedaP.textContent = `Valores cargados de tu última búsqueda.`;
    } else {
        ultimaBusquedaP.textContent = `No hay búsquedas previas guardadas.`;
    }
}
