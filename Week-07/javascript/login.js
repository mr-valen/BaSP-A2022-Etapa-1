window.onload = function() {
    document.getElementsByClassName("login-input");
    var emailInput = document.getElementById("email-input");
    emailInput.addEventListener("blur", emailValidation);
    emailInput.addEventListener("focus", reset);
    var passwordInput = document.getElementById("password-input");
    passwordInput.addEventListener("blur", passwordValidation);
    passwordInput.addEventListener("focus", reset);
    var submitButton = document.getElementById("submit-button");
    submitButton.addEventListener("click", submitForm);
};
function reset(e) {
    var feedbackEmail = e.path[2].getElementsByClassName("feedback-div")[0];
    feedbackEmail.innerHTML = "";
    feedbackEmail.classList.remove("feedback-div-error");
};
function emailValidation() {
    var emailInput = document.getElementById("email-input");
    var feedbackEmail = document.getElementById("email-feedback");
    var feedbackP = document.createElement("p");
    var emailCondition = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    if (emailInput.value.length == 0) {
        return;
    };
    if (!emailCondition.test(emailInput.value)) {
        feedbackP.innerText = "Invalid email.";
        feedbackP.classList.add("feedback-p-error");
        feedbackEmail.appendChild(feedbackP);
        feedbackEmail.classList.add("feedback-div-error");
    };
};
function passwordValidation() {
    var passwordInput = document.getElementById("password-input");
    var passwordTry = passwordInput.value;
    var feedbackPassword = document.getElementById("password-feedback");
    var feedbackP = document.createElement("p");
    if (passwordTry.length == 0) {
        return;
    };
    if (passwordTry.length < 8) {
        feedbackP.innerText = "Password must contain at least 8 characters.";
        feedbackPassword.appendChild(feedbackP);
        feedbackPassword.classList.add("feedback-div-error");
        return;
    };
    var hasLetter = false;
    var hasNumber = false;
    var hasSpecialChar = false;
    for (var i = 0; i < passwordTry.length; i++) {
        if (isNaN(parseInt(passwordTry[i]))) hasLetter = true;
        if (!isNaN(parseInt(passwordTry[i]))) hasNumber = true;
        if ((passwordTry[i].charCodeAt() > 32 && passwordTry[i].charCodeAt() < 48) || passwordTry[i] == " ") hasSpecialChar = true;
    };
    if (!hasLetter) {
        feedbackP.innerText = "Password must contain at least a letter.";
        feedbackPassword.appendChild(feedbackP);
        feedbackPassword.classList.add("feedback-div-error");
        return;
    };
    if (!hasNumber) {
        feedbackP.innerText = "Password must contain at least a number.";
        feedbackPassword.appendChild(feedbackP);
        feedbackPassword.classList.add("feedback-div-error");
        return;
    };
    if (hasSpecialChar) {
        feedbackP.innerText = "Password mustn't contain special characters.";
        feedbackPassword.appendChild(feedbackP);
        feedbackPassword.classList.add("feedback-div-error");
        return;
    };
};
function submitForm(e) {
    e.preventDefault();
    var email = document.getElementById("email-input").value;
    var password = document.getElementById("password-input").value;
    var url = "https://basp-m2022-api-rest-server.herokuapp.com/login?email="
    + email + "&password=" + password;
    var emailStatus = document.getElementById("email-feedback").firstChild;
    var passwordStatus = document.getElementById("password-feedback").firstChild;
    if (!email || !password) {
        alert("ERROR: All fields are required.");
        return;
    };
    if (!emailStatus && !passwordStatus) {
        fetch(url)
            .then(function (response){
                return response.json();
            })
            .then(function (data){
                if(!data.success) {
                    alert(data.msg);
                    throw new Error("There was an error with the request")
                };
                alert(data.msg);
            })
            .catch(function(error){
                console.log(error);
            })
    };
};