//suscribirse a newsletter de la pagina en la pagina valleDeUco.html
document.addEventListener("DOMContentLoaded", () => {
    var newsletterSubmit = document.getElementById("newsletterSubmit");
    newsletterSubmit.addEventListener("click", () => {
        var emailInput = document.getElementById("newsletterEmail");

        console.log("Email para suscribirse: " + emailInput.value);
        emailInput.value = '';
    });
});
