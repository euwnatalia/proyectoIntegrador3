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
