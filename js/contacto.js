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
      
      var resumen = `Resumen de la Consulta:
      Nombre: ${nombre}
      Apellido: ${apellido}
      Provincia: ${provincia}
      Teléfono: ${telefono}
      Email: ${email}
      Experiencia a Consultar: ${experiencia}
      Detalles de la Consulta: ${detalles}`;
      console.log(resumen);
    }
    btnEnviar.addEventListener("click", function() {
      alert("Formulario enviado correctamente");
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
  