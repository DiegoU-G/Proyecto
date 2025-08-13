document.addEventListener('DOMContentLoaded', () => {
    const abrirLightboxBtn = document.getElementById('abrir-lightbox-btn');
    const cerrarLightboxBtn = document.getElementById('cerrar-lightbox-btn');
    const superposicionLightbox = document.getElementById('superposicion-lightbox');
    const videoIframe = document.getElementById('video-iframe');

    const urlVideoYouTube = 'https://www.youtube.com/embed/gS2aR-4qVvU'; 


    function abrirLightbox() {
        superposicionLightbox.classList.remove('oculto');
        document.body.style.overflow = 'hidden';
        videoIframe.src = urlVideoYouTube;
    }

    function cerrarLightbox() {
        superposicionLightbox.classList.add('oculto');
        document.body.style.overflow = '';
        videoIframe.src = '';
    }

    if (abrirLightboxBtn) {
        abrirLightboxBtn.addEventListener('click', abrirLightbox);
    } else {
        console.error('Botón para abrir el lightbox no encontrado.');
    }

    if (cerrarLightboxBtn) {
        cerrarLightboxBtn.addEventListener('click', cerrarLightbox);
    }

    if (superposicionLightbox) {
        superposicionLightbox.addEventListener('click', (e) => {
            if (e.target === superposicionLightbox) {
                cerrarLightbox();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !superposicionLightbox.classList.contains('oculto')) {
            cerrarLightbox();
        }
    });
});
