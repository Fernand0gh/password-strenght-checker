document.getElementById("get_password").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the page from reloading when submitting the form
    main();
});

function isSpecialChar(char) { 
    let format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/; //Define some common special characters
    return format.test(char); //Check if the character is a special character
}

function isCommonPassword(password){
    let commonPasswords = ["12345","123456", "123456789", "test1", "password"
    ,"12345678", "zinch", "g_czechout", "asdf", "qwerty", "1234567890", "1234567",
    "Aa123456", "iloveyou", "1234", "abc123", "111111", "123123", "dubsmash", "test",
    "princess", "qwertyuiop", "sunshine", "BvtTest123", "11111", "ashley", "00000",
    "000000", "password1", "monkey", "livetest", "55555", "soccer", "charlie", "asdfghjkl",
    "654321", "family", "michael", "123321", "football", "baseball", "q1w2e3r4t5y6", "nicole", 
    "jessica", "purple", "shadow", "hannah", "chocolate", "michelle", "daniel", "maggie", "qwerty123",
    "hello", "112233", "jordan", "tigger", "666666", "987654321", "superman", "12345678910", "summer",
    "1q2w3e4r5t", "fitness", "bailey", "zxcvbnm", "fuckyou", "121212", "buster", "butterfly",
    "dragon", "jennifer", "amanda", "justin", "cookie", "basketball", "shopping", "pepper",
    "joshua", "hunter", "ginger", "matthew", "abcd1234", "taylor", "samantha", "whatever",
    "andrew", "1qaz2wsx3edc", "thomas", "jasmine", "animoto", "madison", "0987654321",
    "54321", "flower", "Password", "maria", "babygirl", "lovely", "sophie", "Cheeg123"] //List top 100 common passwords

    return commonPasswords.includes(password)
}

function checkPassword(password) {
    let hasUpper = false;
    let hasLower = false;
    let hasNumber = false;
    let hasSpecial = false;
    let isCommon = false;

    password.split("").forEach(char => { //Split the password into an array of chars
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
    if(isCommonPassword(password)){
        writeAdvice("Your password is too common");
        isCommon = true;
    }
    if(hasUpper && hasLower && hasNumber && hasSpecial && !isCommon && password.length >= 8){
        writeAdvice("Your password is strong enough :D");
    }
}

function writeAdvice(message) {
    let h2 = document.createElement("h2"); //Create a new h2
    if(message === "Your password is strong enough :D"){
        h2.className = "green-box";
    }else{
        h2.className = "red-box";
    }
    h2.innerHTML = message; //Set the text of the h2
    
    let container = document.getElementById("advices");
    container.appendChild(h2); //Add the h2 to the container
}

function deletePreviousAdvices() {
    let container = document.getElementById("advices"); 
    while (container.firstChild) { //While the container has a first child, delete it
        container.removeChild(container.firstChild);
    }
}

function main() {
    deletePreviousAdvices(); //Clear the screen
    let password = document.getElementById("password").value; //Get the password from the input
    checkPassword(password); //Check the password and write the new advices
}