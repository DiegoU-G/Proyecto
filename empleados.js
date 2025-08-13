document.addEventListener('DOMContentLoaded', () => {
    const imagenesEmpleado = document.querySelectorAll('.tarjeta-empleado img[data-src]'); 
    const superposicionLightbox = document.getElementById('superposicion-lightbox'); 
    const imagenLightbox = document.getElementById('imagen-lightbox'); 
    const leyendaLightbox = document.getElementById('leyenda-lightbox'); 
    const botonCerrar = document.querySelector('.boton-cerrar'); 
    const botonImagenAnterior = document.getElementById('boton-imagen-anterior'); 
    const botonImagenSiguiente = document.getElementById('boton-imagen-siguiente'); 

    let indiceImagenActual = 0;

    function abrirLightbox(indice) {
        if (!superposicionLightbox || !imagenLightbox || !leyendaLightbox || imagenesEmpleado.length === 0) {
            console.error('Error: Elementos de Lightbox o imágenes de empleado no encontrados.');
            return;
        }
        indiceImagenActual = indice;
        actualizarContenidoLightbox();
        superposicionLightbox.classList.add('activo'); 
        document.body.style.overflow = 'hidden';
    }

    function cerrarLightbox() {
        if (!superposicionLightbox) return;
        superposicionLightbox.classList.remove('activo'); 
        document.body.style.overflow = '';
    }

    function actualizarContenidoLightbox() {
        if (imagenesEmpleado.length === 0) return;

        const elementoImagen = imagenesEmpleado[indiceImagenActual];
        if (elementoImagen && imagenLightbox && leyendaLightbox) {
            imagenLightbox.src = elementoImagen.getAttribute('data-src');
            leyendaLightbox.textContent = elementoImagen.getAttribute('data-caption') || '';
        }
    }

    imagenesEmpleado.forEach((item, index) => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            abrirLightbox(index);
        });
    });

    if (botonCerrar) botonCerrar.addEventListener('click', cerrarLightbox);

    if (botonImagenAnterior) {
        botonImagenAnterior.addEventListener('click', () => {
            indiceImagenActual = (indiceImagenActual - 1 + imagenesEmpleado.length) % imagenesEmpleado.length;
            actualizarContenidoLightbox();
        });
    }

    if (botonImagenSiguiente) {
        botonImagenSiguiente.addEventListener('click', () => {
            indiceImagenActual = (indiceImagenActual + 1) % imagenesEmpleado.length;
            actualizarContenidoLightbox();
        });
    }

    if (superposicionLightbox) {
        superposicionLightbox.addEventListener('click', (e) => {
            if (e.target === superposicionLightbox) {
                cerrarLightbox();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && superposicionLightbox && superposicionLightbox.classList.contains('activo')) {
            cerrarLightbox();
        }
    });

    const campoBusquedaEmpleado = document.getElementById('buscar-empleado'); 
    const tarjetasEmpleado = document.querySelectorAll('.tarjeta-empleado'); 

    if (campoBusquedaEmpleado) {
        campoBusquedaEmpleado.addEventListener('input', () => {
            const terminoBusqueda = campoBusquedaEmpleado.value.toLowerCase(); 

            tarjetasEmpleado.forEach(tarjeta => {
                const elementoNombreEmpleado = tarjeta.querySelector('h4');
                if (elementoNombreEmpleado) {
                    const nombreEmpleado = elementoNombreEmpleado.textContent.toLowerCase();

                    if (nombreEmpleado.includes(terminoBusqueda)) {
                        tarjeta.style.display = 'block'; 
                        tarjeta.classList.add('resaltada'); 
                    } else {
                        tarjeta.style.display = 'none';
                        tarjeta.classList.remove('resaltada'); 
                    }
                }
            });
        });
    }
});
