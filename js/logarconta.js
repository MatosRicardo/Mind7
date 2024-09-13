function logarconta() {
    var senha = document.querySelector("#senha").value;
    var email = document.querySelector("#email").value;

    if (senha === "1234567890" && email === "gustavo@gmail.com") {
        window.location.href = "./usuario.html";
    } else {
        alert("Credenciais inválidas, tente novamente!");
    }
}