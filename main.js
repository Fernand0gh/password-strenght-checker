document.getElementById("get_password").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar recargar la página al enviar el formulario
    main();
    console.log("Main called");
});

function isSpecialChar(char) {
    let format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    return format.test(char);
}

function checkPassword(password) {
    let hasUpper = false;
    let hasLower = false;
    let hasNumber = false;
    let hasSpecial = false;

    password.split("").forEach(char => {
        if (char === char.toUpperCase()) hasUpper = true;
        if (char === char.toLowerCase()) hasLower = true;
        if (!isNaN(char)) hasNumber = true;
        if (isSpecialChar(char)) hasSpecial = true;
    });

    if (!hasUpper) {
        writeAdvice("Your password must contain at least one uppercase letter");
    }
    if (!hasLower) {
        writeAdvice("Your password must contain at least one lowercase letter");
    }
    if (!hasNumber) {
        writeAdvice("Your password must contain at least one number");
    }
    if (!hasSpecial) {
        writeAdvice("Your password must contain at least one special character");
    }
    if (password.length < 8) {
        writeAdvice("Your password is too short");
    }
    if(hasUpper && hasLower && hasNumber && hasSpecial && password.length >= 8){
        writeAdvice("Your password is strong enough :D");
    }
}

function writeAdvice(message) {
    console.log("Write advice called");
    let h2 = document.createElement("h2");
    h2.className = "green-box";
    h2.innerHTML = message;
    
    let container = document.getElementById("advices");
    container.appendChild(h2);
}

function main() {
    let password = document.getElementById("password").value;
    checkPassword(password);
}