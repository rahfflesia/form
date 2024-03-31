let passInput = document.querySelector('.password');
let confirmInput = document.querySelector('.confirm-password');
let parentDiv = document.querySelector('#parent');

function match(){
    passInput.style.backgroundColor = "lightgreen";
    passInput.style.border = "1px solid green";
    confirmInput.style.backgroundColor = "lightgreen";
    confirmInput.style.border = "1px solid green";
}

function doNotMatch(){
    passInput.style.backgroundColor = "rgb(253, 177, 177)";
    passInput.style.border = "thin solid rgb(255, 51, 51)";
    confirmInput.style.backgroundColor = "rgb(253, 177, 177)";
    confirmInput.style.border = "thin solid rgb(255, 51, 51)";

}

function validatePassword() {
    if(confirmInput.value.length > 0 && passInput.value.length > 0){
        if(passInput.value === confirmInput.value && (passInput.value.length > 0 && confirmInput.value.length > 0)){
            match();
            if(parentDiv.querySelector('.error-text')){
                document.querySelector('.error-text').parentNode.removeChild(document.querySelector('.error-text'));
            }
        }
        else {
            // Si el mensaje de error ya existe, no lo vuelvas a crear
            if (!parentDiv.querySelector('.error-text')) {
                let div = document.createElement('div'); // Nuevo elemento de bloque
                let span = document.createElement('span');
                span.classList.add('error-text');
                span.style.color = "red";
                span.textContent = "Passwords do not match";
                div.appendChild(span); // Añadir el span al div
                parentDiv.appendChild(div); // Añadir el div al contenedor
            }
            doNotMatch();
        }
    }
}


confirmInput.addEventListener('blur', validatePassword);
passInput.addEventListener('blur', validatePassword);




