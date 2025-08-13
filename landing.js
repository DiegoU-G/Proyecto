document.querySelectorAll('a[href^="#"]').forEach(ancla => { 
    ancla.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => { 
        if (entrada.isIntersecting) { 
            entrada.target.classList.add('mostrar'); 
        } else {
            entrada.target.classList.remove('mostrar'); 
        }
    });
}, {
    rootMargin: '-50px',
});

const elementosOcultos = document.querySelectorAll('.item-nosotros, .tarjeta-clase, .tarjeta-precio'); 
elementosOcultos.forEach((el) => {
    el.classList.add('oculto');
    observador.observe(el);
});

const translations = {
    es: {
        // Navegación
        nav_nosotros: 'Nosotros',
        nav_clases: 'Clases',
        nav_membresias: 'Membresías',
        nav_contacto: 'Contacto',
        nav_ubicacion: 'Ubicacion',
        nav_empleados: 'Empleados',
        nav_acceder: 'Acceder',
        // Sección 'Nosotros'
        nosotros_titulo: '¿Quiénes Somos?',
        nosotros_parrafo: 'Somos un equipo de profesionales apasionados por el fitness, dedicados a ayudarte a alcanzar tus metas de salud y bienestar. Nuestras instalaciones de última generación y nuestro personal experto te ofrecen el ambiente perfecto para tu transformación.',
        // Sección 'Clases'
        clases_titulo: 'Nuestras Clases',
        clases_boxeo: 'Boxeo Funcional',
        clases_boxeo_desc: 'Mejora tu resistencia y fuerza con nuestra clase de boxeo, dirigida por instructores certificados.',
        clases_yoga: 'Yoga y Estiramiento',
        clases_yoga_desc: 'Encuentra tu equilibrio y flexibilidad en nuestras sesiones de yoga, aptas para todos los niveles.',
        clases_cardio: 'Cardio HIIT',
        clases_cardio_desc: 'Quema calorías y acelera tu metabolismo con entrenamientos de alta intensidad.',
        // Sección 'Membresías'
        membresias_titulo: 'Nuestros Planes de Membresía',
        plan_bronce_titulo: 'Bronce',
        plan_plata_titulo: 'Plata',
        plan_oro_titulo: 'Oro',
        precio_mes: '/mes',
        plan_bronce_li1: 'Acceso a instalaciones 8am - 5pm',
        plan_bronce_li2: '✓ Acceso a máquinas',
        plan_bronce_li3: '✗ Clases grupales',
        plan_bronce_li4: '✗ Entrenador personal',
        plan_bronce_li5: '✗ Soporte nutricional',
        plan_plata_li1: 'Acceso completo 24/7',
        plan_plata_li2: '✓ Clases grupales',
        plan_plata_li3: '✓ Entrenador personal (limitado)',
        plan_plata_li4: '✗ Soporte nutricional',
        plan_plata_li5: '✗ Sauna y spa',
        plan_oro_li1: 'Acceso completo 24/7',
        plan_oro_li2: '✓ Clases grupales',
        plan_oro_li3: '✓ Entrenador personal',
        plan_oro_li4: '✓ Soporte nutricional',
        plan_oro_li5: '✓ Sauna y spa',
        boton_elegir_plan: 'Elegir Plan',
        // Formulario de Contacto
        contacto_titulo: 'Contáctanos',
        placeholder_nombre: 'Tu Nombre',
        placeholder_email: 'Tu Email',
        placeholder_mensaje: 'Tu Mensaje',
        boton_enviar: 'Enviar Mensaje'
    },
    en: {
        // Navegación
        nav_nosotros: 'About Us',
        nav_clases: 'Classes',
        nav_membresias: 'Memberships',
        nav_contacto: 'Contact',
        nav_ubicacion: 'Location',
        nav_empleados: 'Team',
        nav_acceder: 'Access',
        // Sección 'Nosotros'
        nosotros_titulo: 'Who We Are?',
        nosotros_parrafo: 'We are a team of fitness professionals dedicated to helping you achieve your health and wellness goals. Our state-of-the-art facilities and expert staff provide the perfect environment for your transformation.',
        // Sección 'Clases'
        clases_titulo: 'Our Classes',
        clases_boxeo: 'Functional Boxing',
        clases_boxeo_desc: 'Improve your stamina and strength with our boxing class, led by certified instructors.',
        clases_yoga: 'Yoga & Stretching',
        clases_yoga_desc: 'Find your balance and flexibility in our yoga sessions, suitable for all levels.',
        clases_cardio: 'Cardio HIIT',
        clases_cardio_desc: 'Burn calories and boost your metabolism with high-intensity workouts.',
        // Sección 'Membresías'
        membresias_titulo: 'Our Membership Plans',
        plan_bronce_titulo: 'Bronze',
        plan_plata_titulo: 'Silver',
        plan_oro_titulo: 'Gold',
        precio_mes: '/month',
        plan_bronce_li1: 'Access to facilities 8am - 5pm',
        plan_bronce_li2: '✓ Machine access',
        plan_bronce_li3: '✗ Group classes',
        plan_bronce_li4: '✗ Personal trainer',
        plan_bronce_li5: '✗ Nutritional support',
        plan_plata_li1: 'Full access 24/7',
        plan_plata_li2: '✓ Group classes',
        plan_plata_li3: '✓ Limited personal trainer',
        plan_plata_li4: '✗ Nutritional support',
        plan_plata_li5: '✗ Sauna and spa',
        plan_oro_li1: 'Full access 24/7',
        plan_oro_li2: '✓ Group classes',
        plan_oro_li3: '✓ Personal trainer',
        plan_oro_li4: '✓ Nutritional support',
        plan_oro_li5: '✓ Sauna and spa',
        boton_elegir_plan: 'Choose Plan',
        contacto_titulo: 'Contact Us',
        placeholder_nombre: 'Your Name',
        placeholder_email: 'Your Email',
        placeholder_mensaje: 'Your Message',
        boton_enviar: 'Send Message'
    }
};

const langEsButton = document.getElementById('lang-es');
const langEnButton = document.getElementById('lang-en');
function setLanguage(lang) {
    // Navegación
    document.querySelector('a[href="#nosotros"]').textContent = translations[lang].nav_nosotros;
    document.querySelector('a[href="#clases"]').textContent = translations[lang].nav_clases;
    document.querySelector('a[href="#membresias"]').textContent = translations[lang].nav_membresias;
    document.querySelector('a[href="#contacto"]').textContent = translations[lang].nav_contacto;
    document.querySelector('a[href="ubi.html"]').textContent = translations[lang].nav_ubicacion;
    document.querySelector('a[href="empleados.html"]').textContent = translations[lang].nav_empleados;
    document.querySelector('.enlace-accion-nav').textContent = translations[lang].nav_acceder;

    // Sección 'Nosotros'
    document.querySelector('#nosotros h3').textContent = translations[lang].nosotros_titulo;
    document.querySelector('#nosotros p').textContent = translations[lang].nosotros_parrafo;
    
    // Sección 'Clases'
    document.querySelector('#clases h3').textContent = translations[lang].clases_titulo;
    document.querySelector('.tarjeta-clase:nth-child(1) h4').textContent = translations[lang].clases_boxeo;
    document.querySelector('.tarjeta-clase:nth-child(1) p').textContent = translations[lang].clases_boxeo_desc;
    document.querySelector('.tarjeta-clase:nth-child(2) h4').textContent = translations[lang].clases_yoga;
    document.querySelector('.tarjeta-clase:nth-child(2) p').textContent = translations[lang].clases_yoga_desc;
    document.querySelector('.tarjeta-clase:nth-child(3) h4').textContent = translations[lang].clases_cardio;
    document.querySelector('.tarjeta-clase:nth-child(3) p').textContent = translations[lang].clases_cardio_desc;

    // Sección 'Membresías'
    document.querySelector('#membresias h3').textContent = translations[lang].membresias_titulo;
    document.querySelector('.tarjeta-precio:nth-child(1) h4').textContent = translations[lang].plan_bronce_titulo;
    document.querySelector('.tarjeta-precio:nth-child(1) .precio span:last-child').textContent = translations[lang].precio_mes;
    const planBronceLis = document.querySelectorAll('.tarjeta-precio:nth-child(1) ul li');
    planBronceLis[0].textContent = translations[lang].plan_bronce_li1;
    planBronceLis[1].textContent = translations[lang].plan_bronce_li2;
    planBronceLis[2].textContent = translations[lang].plan_bronce_li3;
    planBronceLis[3].textContent = translations[lang].plan_bronce_li4;
    planBronceLis[4].textContent = translations[lang].plan_bronce_li5;

    document.querySelector('.tarjeta-precio:nth-child(2) h4').textContent = translations[lang].plan_plata_titulo;
    document.querySelector('.tarjeta-precio:nth-child(2) .precio span:last-child').textContent = translations[lang].precio_mes;
    const planPlataLis = document.querySelectorAll('.tarjeta-precio:nth-child(2) ul li');
    planPlataLis[0].textContent = translations[lang].plan_plata_li1;
    planPlataLis[1].textContent = translations[lang].plan_plata_li2;
    planPlataLis[2].textContent = translations[lang].plan_plata_li3;
    planPlataLis[3].textContent = translations[lang].plan_plata_li4;
    planPlataLis[4].textContent = translations[lang].plan_plata_li5;

    document.querySelector('.tarjeta-precio:nth-child(3) h4').textContent = translations[lang].plan_oro_titulo;
    document.querySelector('.tarjeta-precio:nth-child(3) .precio span:last-child').textContent = translations[lang].precio_mes;
    const planOroLis = document.querySelectorAll('.tarjeta-precio:nth-child(3) ul li');
    planOroLis[0].textContent = translations[lang].plan_oro_li1;
    planOroLis[1].textContent = translations[lang].plan_oro_li2;
    planOroLis[2].textContent = translations[lang].plan_oro_li3;
    planOroLis[3].textContent = translations[lang].plan_oro_li4;
    planOroLis[4].textContent = translations[lang].plan_oro_li5;
    
    document.querySelectorAll('.boton-precio').forEach(button => {
        button.textContent = translations[lang].boton_elegir_plan;
    });

    document.querySelector('#formulario-contacto h3').textContent = translations[lang].contacto_titulo;
    document.querySelector('#formulario-contacto input[name="nombre"]').placeholder = translations[lang].placeholder_nombre;
    document.querySelector('#formulario-contacto input[name="email"]').placeholder = translations[lang].placeholder_email;
    document.querySelector('#formulario-contacto textarea[name="mensaje"]').placeholder = translations[lang].placeholder_mensaje;
    document.querySelector('#formulario-contacto button').textContent = translations[lang].boton_enviar;

    langEsButton.classList.remove('active');
    langEnButton.classList.remove('active');
    if (lang === 'es') {
        langEsButton.classList.add('active');
    } else {
        langEnButton.classList.add('active');
    }

    localStorage.setItem('preferredLang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
    const preferredLang = localStorage.getItem('preferredLang') || 'es'; 
    setLanguage(preferredLang);
});

if (langEsButton) {
    langEsButton.addEventListener('click', () => setLanguage('es'));
}

if (langEnButton) {
    langEnButton.addEventListener('click', () => setLanguage('en'));
}
