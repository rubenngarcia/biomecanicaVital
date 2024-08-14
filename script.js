
  /*FUNCIONES PARA EL ENCABEZADO*/ 
  
  document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("header nav ul li a");
    const carousel = document.querySelector(".carousel");
    const header = document.querySelector('header');
    const firstSection = document.getElementById('inicio');
    let timeout;

    // Función para mostrar el encabezado
    function showHeader() {
        clearTimeout(timeout);
        header.classList.remove('hidden');
    }

    // Función para ocultar el encabezado después de un retraso
    function hideHeader() {
        timeout = setTimeout(function() {
            // Verifica si estamos en la primera sección
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const firstSectionRect = firstSection.getBoundingClientRect();
            const isInFirstSection = scrollTop < firstSectionRect.bottom;

            if (!isInFirstSection) {
                header.classList.add('hidden');
            }
        }, 500); 
    }

    // Event listener para el movimiento del mouse
    header.addEventListener('mouseenter', showHeader);
    header.addEventListener('mouseleave', hideHeader);

    // Event listener para los enlaces de navegación
    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1); // Obtener el ID de destino
            const targetSlide = document.getElementById(targetId);

            // Hacer scroll al slide correspondiente
            carousel.scrollTo({
                top: targetSlide.offsetTop,
                behavior: "smooth"
            });

            // Mostrar el encabezado cuando se haga clic en un enlace
            showHeader();
        });
    });

    //oculta el encabezado cuando la página carga
    hideHeader();
});


/*tarjetas servicios*/ 
function flipCard(tarjeta) {
    tarjeta.classList.toggle('flip');
}





/*FUNCIONES PARA HACER LA RESERVA*/
 
document.addEventListener('DOMContentLoaded', () => {
    const abrirCalendarioBtn = document.getElementById('abrir-calendario');
    const formContainer = document.getElementById('form-container');
    const formOverlay = document.getElementById('form-overlay');
    const closeFormBtn = document.getElementById('close-form');

    // Inicializa Flatpickr para los campos del calendario
    flatpickr('#calendario', {
        enableTime: true,
        dateFormat: 'Y-m-d H:i',
    });

    flatpickr('#appointment-datetime', {
        enableTime: true,
        dateFormat: 'Y-m-d H:i',
    });

    // Abre el formulario cuando se hace clic en el botón "Haz tu Reserva"
    abrirCalendarioBtn.addEventListener('click', () => {
        formOverlay.style.display = 'flex'; // Muestra el overlay
        formContainer.style.display = 'block'; // Muestra el formulario
    });

    // Cierra el formulario cuando se hace clic en el botón "Cerrar"
    closeFormBtn.addEventListener('click', () => {
        formOverlay.style.display = 'none'; // Oculta el overlay
        formContainer.style.display = 'none'; // Oculta el formulario
    });

    // Cierra el formulario cuando se hace clic fuera del formulario (en el overlay)
    formOverlay.addEventListener('click', (e) => {
        if (e.target === formOverlay) {
            formOverlay.style.display = 'none'; // Oculta el overlay
            formContainer.style.display = 'none'; // Oculta el formulario
        }
    });
});
