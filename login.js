// Seleccionar el contenedor principal
const container = document.querySelector(".container");

// Seleccionar los botones de inicio de sesión y registro
const btnSignIn = document.getElementById("btn-sign-in");
const btnSignUp = document.getElementById("btn-sign-up");

// Añadir evento al botón de inicio de sesión para remover la clase 'toggle' del contenedor
btnSignIn.addEventListener("click", () => {
    container.classList.remove("toggle");
});

// Añadir evento al botón de registro para añadir la clase 'toggle' al contenedor
btnSignUp.addEventListener("click", () => {
    container.classList.add("toggle");
});
