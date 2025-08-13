document.addEventListener('DOMContentLoaded', () => {
    const selectorMaquina = document.getElementById('selector-maquina');
    const botonLimpiar = document.getElementById('boton-limpiar'); 
    const contenedorImagenSalida = document.getElementById('contenedor-imagen-salida'); 
    const contenedorTextoSalida = document.getElementById('contenedor-texto-salida'); 

    const datosMaquinas = {
        '1': {
            name: 'Bicicleta Estática',
            image: 'img/bici.webp',
            description: 'La bicicleta estática es una excelente herramienta para aquellos que buscan mantenerse en forma sin tener que salir de casa o enfrentarse a los imprevistos del tiempo.'
        },
        '2': {
            name: 'ELÍPTICA',
            image: 'img/eliptica.webp',
            description: 'Una elíptica es una máquina de ejercicio que se utiliza para simular el movimiento de caminar.'
        },
        '3': {
            name: 'PRENSA DE PIERNA',
            image: 'img/press.webp',
            description: 'La prensa de pierna es un ejercicio de entrenamiento de fuerza que se enfoca en los músculos de las piernas, específicamente los cuádriceps, los glúteos y los isquiotibiales.'
        },
        '4': {
            name: 'MÁQUINA DE ADUCTOR',
            image: 'img/aductor.webp',
            description: 'Una máquina de aductor es un equipo de entrenamiento de fuerza que se utiliza para trabajar los músculos aductores de las piernas.'
        },
        '5': {
            name: 'PRESS DE BANCA',
            image: 'img/banca.webp',
            description: 'El press de banca es uno de los ejercicios más populares en el mundo del fitness y el levantamiento de pesas.'
        },
        '6': {
            name: 'MÁQUINA PARA FEMORALES',
            image: 'img/femoral.webp',
            description: 'El curl femoral tumbado, también conocido como curl de piernas, es uno de los mejores ejercicios de aislamiento para los isquiotibiales.'
        },
        '7': {
            name: 'POLEAS CRUZADAS',
            image: 'img/polea.webp',
            description: 'Las poleas cruzadas son una excelente herramienta de entrenamiento en el gimnasio.'
        },
        '8': {
            name: 'MÁQUINA DORSALERA',
            image: 'img/dorsal.webp',
            description: 'La máquina dorsalera es un aparato que se utiliza para trabajar los músculos de la espalda.'
        }
    };

    function mostrarInfoMaquina(idMaquina) { 
        const datos = datosMaquinas[idMaquina]; 
        if (datos) {
            contenedorImagenSalida.innerHTML = '';
            contenedorTextoSalida.innerHTML = '';

            const img = document.createElement('img');
            img.src = datos.image;
            img.alt = datos.name;
            contenedorImagenSalida.appendChild(img);

            const elementoNombre = document.createElement('h5'); 
            elementoNombre.textContent = datos.name;
            elementoNombre.style.color = 'var(--primary-color)'; 
            elementoNombre.style.marginBottom = '0.5rem';

            const elementoDescripcion = document.createElement('p');
            elementoDescripcion.textContent = datos.description;
            elementoDescripcion.style.color = 'var(--dimmed-text)'; 

            contenedorTextoSalida.appendChild(elementoNombre);
            contenedorTextoSalida.appendChild(elementoDescripcion);
        } else {
            contenedorImagenSalida.innerHTML = '<p style="color:var(--dimmed-text);">Selecciona una máquina válida.</p>';
            contenedorTextoSalida.innerHTML = '';
        }
    }

    selectorMaquina.addEventListener('change', (evento) => { 
        const idSeleccionado = evento.target.value; 
        mostrarInfoMaquina(idSeleccionado); 
    });

    botonLimpiar.addEventListener('click', () => { 
        selectorMaquina.value = '';
        contenedorImagenSalida.innerHTML = '';
        contenedorTextoSalida.innerHTML = ''; 
    });
});
