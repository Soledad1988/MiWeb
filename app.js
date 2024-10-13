document.addEventListener('DOMContentLoaded', function() {
  // Función para abrir modal correspondiente
  function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
  }

  // Función para cerrar el modal
  function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
  }

  // Asignar eventos a los botones
  document.getElementById("btnModal1").onclick = function() {
    openModal("myModal1");
  }

  document.getElementById("btnModal2").onclick = function() {
    openModal("myModal2");
  }

  document.getElementById("btnModal3").onclick = function() {
    openModal("myModal3");
  }

  document.getElementById("btnModal4").onclick = function() {
    openModal("myModal4");
  }

  // Asignar eventos a los botones de cierre
  var closeButtons = document.getElementsByClassName("close");
  for (var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].onclick = function() {
      var modalId = this.getAttribute("data-modal");
      if (modalId) {
        closeModal(modalId);
      }
    }
  }
});


//Código JavaScript para el carrusel:
// Inicializar índices para cada carrusel
let slideIndex = {
  carousel1: 0,
  carousel2: 0,
  carousel3: 0,
  carousel3: 0
};

// Mostrar las imágenes iniciales
showSlides(slideIndex.carousel1, 'carousel1');
showSlides(slideIndex.carousel2, 'carousel2');
showSlides(slideIndex.carousel3, 'carousel3');
showSlides(slideIndex.carousel4, 'carousel4');

// Función para cambiar las diapositivas
function plusSlides(n, carouselId) {
  slideIndex[carouselId] += n;
  showSlides(slideIndex[carouselId], carouselId);
}

// Función para mostrar las imágenes del carrusel específico
function showSlides(n, carouselId) {
  const carousel = document.getElementById(carouselId);
  const slides = carousel.querySelectorAll('.carousel-images img');
  
  // Controlar que el índice no exceda los límites
  if (n >= slides.length) { 
    slideIndex[carouselId] = 0; // Regresar a la primera imagen
  }
  if (n < 0) { 
    slideIndex[carouselId] = slides.length - 1; // Ir a la última imagen
  }
  
  // Ocultar todas las imágenes
  slides.forEach(slide => slide.classList.remove('active'));
  
  // Mostrar la imagen actual
  slides[slideIndex[carouselId]].classList.add('active');
}



const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
});

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
});


const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } 
  return valido;
}



//https://formspree.io/f/mqkvrqjj
//enviar formulario
const $form = document.querySelector('form')

async function handleSubmit(event){
  event.preventDefault()
  const form = new FormData(this)
  const response = await fetch('https://formspree.io/f/mqkvrqjj',{
    method:'POST',
    body:form,
    headers:{
      Accept:'application/json'
    }
  })

  if(response.ok){
    this.reset()
    alert('Mensaje enviado')
  }else{
    alert('Error en el envio')
  }

}

form.addEventListener("submit", handleSubmit, (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});




//form.addEventListener('submit', handleSubmit)