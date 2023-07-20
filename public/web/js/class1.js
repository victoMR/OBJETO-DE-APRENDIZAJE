// Función para actualizar la barra de progreso de lectura
function updateProgressBar(progress) {
  var progressBar = document.getElementById("progressBar");
  progressBar.style.width = progress + "%";
}

// Función para mostrar u ocultar el botón "Scroll to Top"
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  var btnScrollToTop = document.getElementById("btnScrollToTop");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnScrollToTop.style.display = "block";
  } else {
    btnScrollToTop.style.display = "none";
  }
}

// Agregar el evento 'scroll' al objeto window para actualizar la barra de progreso
window.addEventListener("scroll", function() {
  var scrollTop = window.scrollY || document.documentElement.scrollTop;
  var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var progress = (scrollTop / scrollHeight) * 100;
  updateProgressBar(progress); // Llama a la función y pasa el valor de progreso como argumento
  scrollFunction(); // Llama a la función para mostrar u ocultar el botón "Scroll to Top"
});
