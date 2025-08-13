document.addEventListener('DOMContentLoaded', () => {
    const carruselWrapper = document.getElementById('carrusel-testimonios');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const tarjetasTestimonio = document.querySelectorAll('.tarjeta-testimonio');

    let indiceActual = 0;
    const totalTestimonios = tarjetasTestimonio.length;

    function mostrarTestimonio() {
        if (tarjetasTestimonio.length > 0) {
            const anchoTarjeta = tarjetasTestimonio[0].clientWidth + 32; 
            const desplazamiento = -indiceActual * anchoTarjeta;
            carruselWrapper.style.transform = `translateX(${desplazamiento}px)`;
        }
    }

    function irAtras() {
        indiceActual = (indiceActual > 0) ? indiceActual - 1 : totalTestimonios - 1;
        mostrarTestimonio();
    }

    function irAdelante() {
        indiceActual = (indiceActual < totalTestimonios - 1) ? indiceActual + 1 : 0;
        mostrarTestimonio();
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', irAtras);
    }
    if (nextBtn) {
        nextBtn.addEventListener('click', irAdelante);
    }
    window.addEventListener('resize', mostrarTestimonio);
    mostrarTestimonio();
});
