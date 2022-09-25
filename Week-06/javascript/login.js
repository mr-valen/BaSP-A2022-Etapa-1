window.onload = function () {
    var inputEmail = document.getElementById("email-input");
    inputEmail.addEventListener("blur", emailValidation);
    inputEmail.addEventListener("focus", emailReset);
    var inputPassword = document.getElementById("password-input");
    inputPassword.addEventListener("blur", passwordValidation);
    inputPassword.addEventListener("focus", passwordReset);
}
function emailValidation() {
    var inputEmail = document.getElementById("email-input");
    var feedbackEmail = document.getElementById("email-feedback");
    var feedbackP = document.createElement("p");
    var emailCondition = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    if (!emailCondition.test(inputEmail.value)) {
        feedbackP.innerText = "Invalid email.";
        feedbackP.classList.add("feedback-p-error");
        feedbackEmail.appendChild(feedbackP);
        feedbackEmail.classList.add("feedback-div-error");
    };
    if (inputEmail.value.length == 0) emailReset();
}
function emailReset() {
    var feedbackEmail = document.getElementById("email-feedback");
    feedbackEmail.innerHTML = "";
    feedbackEmail.classList.remove('feedback-div-error');
}
function passwordValidation() {
    var inputPassword = document.getElementById("password-input");
    var passwordTry = inputPassword.value;
    var feedbackPassword = document.getElementById("password-feedback");
    var feedbackP = document.createElement("p");
    var hasLetter = false;
    var hasNumber = false;
    var hasSpecialChar = false;
    for (var i = 0; i < passwordTry.length; i++) {
        if (isNaN(parseInt(passwordTry[i]))) hasLetter = true;
        if (!isNaN(parseInt(passwordTry[i]))) hasNumber = true;
        if ((passwordTry[i].charCodeAt() > 32 && passwordTry[i].charCodeAt() < 48)) hasSpecialChar = true;
    };
    if (!hasLetter) {
        feedbackP.innerText = "Password must contain at least a letter.";
        feedbackPassword.appendChild(feedbackP);
        feedbackPassword.classList.add("feedback-div-error");
    };
    if (!hasNumber) {
        feedbackP.innerText = "Password must contain at least a number.";
        feedbackPassword.appendChild(feedbackP);
        feedbackPassword.classList.add("feedback-div-error");
    };
    if (hasSpecialChar) {
        feedbackP.innerText = "Password mustn't contain special characters.";
        feedbackPassword.appendChild(feedbackP);
        feedbackPassword.classList.add("feedback-div-error");
    };
    if (inputPassword.value.length == 0) passwordReset();
}
function passwordReset() {
    var feedbackPassword = document.getElementById("password-feedback");
    feedbackPassword.innerHTML = "";
    feedbackPassword.classList.remove('feedback-div-error');
}

// function passwordValidation() {
//     var alertP = document.createElement("p");
//     var feedbackPassword = document.getElementById('password-feedback');
//     var passwordTry = inputPassword.value;
//     var hasLetter = false;
//     var hasNumber = false;
//     var hasSpecialChar = false;
//     for (var i = 0; i < passwordTry.length; i++) {
//     };  
// };
