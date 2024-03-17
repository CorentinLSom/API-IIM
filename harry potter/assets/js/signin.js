document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let errorContainer = document.querySelector(".message-error");
    let errorList = document.querySelector(".message-error ul");

    errorList.innerHTML = "";
    errorContainer.classList.remove("visible");

    let nickname = document.querySelector("#nickname");
    if (nickname.value === "") {
    errorContainer.classList.add("visible");
    nickname.classList.remove("success");

    let err = document.createElement("li");
    err.innerText = "Le champ nom d'utilisateur ne doit pas être vide";

    errorList.appendChild(err);
    } else {
    nickname.classList.add("success");
    }

    let password = document.querySelector("#password");
    if (password.value === "") {
    errorContainer.classList.add("visible");
    password.classList.remove("success");

    let err = document.createElement("li");
    err.innerText = "Le champ mot de passe ne doit pas être vide";

    errorList.appendChild(err);
    } else {
    password.classList.add("success");
    }

    let successContainer = document.querySelector('.message-success')
    successContainer.classList.remove('visible')

    if ( 
    nickname.classList.contains('success') && 
    password.classList.contains('success')
    ) {
    successContainer.classList.add('visible')
    }
});
});