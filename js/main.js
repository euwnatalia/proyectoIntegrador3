//suscribirse a newsletter de la pagina en la pagina valleDeUco.html
document.addEventListener("DOMContentLoaded", () => {
    var newsletterSubmit = document.getElementById("newsletterSubmit");
    newsletterSubmit.addEventListener("click", () => {
        var emailInput = document.getElementById("newsletterEmail");
        alert("email enviado correctamente: " + emailInput.value);

        console.log("Email para suscribirse: " + emailInput.value);
        emailInput.value = '';
    });
});
//mapas de visitanos.html
function iniciarMap(){
    var coord = {lat:-31.3549249 ,lng: -64.3731489};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}
//formulario de contacto en la pagina contacto.html
document.addEventListener("DOMContentLoaded", function() {
    var btnSiguiente = document.getElementById("btnSiguiente");
    var btnEnviar = document.getElementById("btnEnviar");
    var formularioCliente = document.getElementById("formularioCliente");
    var pasos = formularioCliente.querySelectorAll(".paso");
  
    btnSiguiente.addEventListener("click", function() {
        var elementoActivo = formularioCliente.querySelector(".activo");
        var elementoSiguiente = formularioCliente.querySelector(".activo + .oculto");
  
        if (elementoSiguiente) {
            elementoActivo.classList.remove("activo");
            elementoActivo.classList.add("oculto");
  
            elementoSiguiente.classList.remove("oculto");
            elementoSiguiente.classList.add("activo");
  
            if (!elementoSiguiente.nextElementSibling || elementoSiguiente.id === 'resumen') {
                mostrarResumen();
                btnSiguiente.classList.add("oculto");
                btnEnviar.classList.remove("oculto");
            }
        }
    });
  
  
    function mostrarResumen() {
      var nombre = formularioCliente.querySelector("#nombre").value;
      var apellido = formularioCliente.querySelector("#apellido").value;
      var provincia = formularioCliente.querySelector("#provincia").value;
      var telefono = formularioCliente.querySelector("#telefono").value;
      var email = formularioCliente.querySelector("#email").value;
      var experiencia = formularioCliente.querySelector("#experiencia").value;
      var detalles = formularioCliente.querySelector("#detalles").value;
  
      document.getElementById("resumenNombre").textContent = "Nombre: " + nombre;
      document.getElementById("resumenApellido").textContent = "Apellido: " + apellido;
      document.getElementById("resumenProvincia").textContent = "Provincia: " + provincia;
      document.getElementById("resumenTelefono").textContent = "Teléfono: " + telefono;
      document.getElementById("resumenEmail").textContent = "Email: " + email;
      document.getElementById("resumenExperiencia").textContent = "Experiencia: " + experiencia;
      document.getElementById("resumenDetalles").textContent = "Detalles: " + detalles;
    }
    btnEnviar.addEventListener("click", function() {
      alert("Formulario enviado");
      resetearFormulario();
  });
  
    function resetearFormulario() {
        formularioCliente.reset();
        pasos.forEach(paso => paso.classList.add("oculto"));
        pasos[0].classList.remove("oculto");
        pasos[0].classList.add("activo");
        btnSiguiente.classList.remove("oculto");
        btnEnviar.classList.add("oculto");
    }
  });
  