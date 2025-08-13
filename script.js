document.addEventListener('DOMContentLoaded', () => {

    const entrarButton = document.getElementById('boton-entrar');
    const languageSelector = document.getElementById('language-selector');

    const translations = {
        'es': {
            'nav-inicio': 'Inicio',
            'nav-clases': 'Clases',
            'nav-contacto': 'Contacto',
            'nav-eventos': 'Eventos',
            'main-title': '¡Transforma tu cuerpo!',
            'main-paragraph': 'Únete a nuestra comunidad y alcanza tus metas de fitness.',
            'button-enter': 'ENTRAR',
            'footer-text': '© 2025 Gimnasio Fitness. Todos los derechos reservados.'
        },
        'en': {
            'nav-inicio': 'Home',
            'nav-clases': 'Classes',
            'nav-contacto': 'Contact',
            'nav-eventos': 'Events',
            'main-title': 'Transform your body!',
            'main-paragraph': 'Join our community and achieve your fitness goals.',
            'button-enter': 'ENTER',
            'footer-text': '© 2025 Fitness Gym. All rights reserved.'
        }
    };

    /**
     * Función para actualizar los textos de la página según el idioma seleccionado.
     * @param {string} lang -
     */
    function updateLanguage(lang) {
        document.querySelectorAll('[data-text-key]').forEach(element => {
            const key = element.getAttribute('data-text-key');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
    }

    if (entrarButton) {
        entrarButton.addEventListener('click', () => {
            window.location.href = 'login.html';
        });
    }

    if (languageSelector) {
        languageSelector.addEventListener('change', (event) => {
            const newLang = event.target.value;
            updateLanguage(newLang);
        });
    }

    if (languageSelector) {
        updateLanguage(languageSelector.value);
    }

});
