// Función para animar la transición de página
function animatePageTransition(event) {
    event.preventDefault();
  
    // Obtener el enlace que fue clicado
    const link = event.currentTarget;
  
    // Agregar una clase de animación para la salida de la página actual
    document.body.classList.add('animate__animated', 'animate__fadeOut');
  
    // Esperar a que termine la animación de salida
    document.body.addEventListener('animationend', function() {
      // Redirigir a la página de destino después de la animación
      window.location.href = link.href;
    });
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    // Agregar el evento onclick a todos los enlaces que tengan la clase 'text-decoration-none'
    const links = document.querySelectorAll('a.text-decoration-none');
    links.forEach(link => {
      link.addEventListener('click', animatePageTransition);
    });
  
    // Agregar una clase de animación para la entrada de la página
    document.body.classList.add('animate__animated', 'animate__fadeIn');
  });
  