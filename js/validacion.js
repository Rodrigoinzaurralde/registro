function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

const boton = document.getElementById("regBtn");
boton.addEventListener("click", function(event) {
    event.preventDefault();
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const email = document.getElementById("email").value.trim();
    const password1 = document.getElementById("password1").value.trim();
    const password2 = document.getElementById("password2").value.trim();
    const terminos = document.getElementById("terminos").checked;

    if (nombre && apellido && email && password1 && password2 && terminos) {
        if (password1 === password2) {
            if(password1.length >= 6) {
            showAlertSuccess();
            }else{
                showAlertError();
            }
        } else {
            showAlertError();
        }
    } else {
        showAlertError();
    }
});