const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

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
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});

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
      Accept:'application7json'
    }
  })

  if(response.ok){
    this.reset()
    alert('Mensaje enviado')
  }else{
    alert('Error en el envio')
  }

}

form.addEventListener('submit', handleSubmit)