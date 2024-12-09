window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
/*//const contactForm = document.getElementById('contactForm');
const submitSuccessMessage = document.getElementById('submitSuccessMessage');
const submitErrorMessage = document.getElementById('submitErrorMessage');

if (contactForm) {
    contactForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        // Ocultar mensajes previos
        submitSuccessMessage.classList.add('d-none');
        submitErrorMessage.classList.add('d-none');

        // Obtener los valores del formulario
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Validación básica
        if (!name || !email || !message) {
            alert('Por favor, completa todos los campos requeridos.');
            return;
        }

        // Preparar los datos para enviar
        const requestData = {
            to: 'tu_destinatario@gmail.com', // Cambia al correo del destinatario
            subject: `Nuevo mensaje de ${name}`,
            text: `Nombre: ${name}\nTeléfono: ${phone}\nEmail: ${email}\nMensaje: ${message}`,
        };

        try {
            // Enviar los datos a la Firebase Function
            const response = await fetch('./', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData),
            });

            if (response.ok) {
                // Mostrar mensaje de éxito
                submitSuccessMessage.classList.remove('d-none');
                contactForm.reset(); // Limpiar el formulario
            } else {
                // Mostrar mensaje de error
                submitErrorMessage.classList.remove('d-none');
            }
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
            submitErrorMessage.classList.remove('d-none');
        }
    });
}
*/
