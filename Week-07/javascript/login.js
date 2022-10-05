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
    feedbackEmail.classList.remove("feedback-div-success");
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
        return;
    };
    feedbackEmail.classList.add("feedback-div-success");
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
        if ((passwordTry[i].charCodeAt() > 32 && passwordTry[i].charCodeAt() < 48)
        || passwordTry[i] == " ") hasSpecialChar = true;
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
    feedbackPassword.classList.add("feedback-div-success");
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
        showModal(false, "All fields are required.");
        return;
    };
    if (!emailStatus && !passwordStatus) {
        fetch(url)
            .then(function (response){
                return response.json();
            })
            .then(function (data){
                if(!data.success) {
                    showModal(false, data.msg);
                    throw new Error("There was an error with the request")
                };
                showModal(true, data.msg);
            })
            .catch(function(error){
                console.log(error);
            })
    };
};
function showModal(status, msg) {
    var title =  document.getElementById("modal-title");
    if (!status) {
        title.classList.add("modal-title-error");
        title.innerText = "Error";
    }
    if (status) {
        title.classList.add("modal-title-success");
        title.innerText = "Success";
    }
    document.getElementById("modal-message").innerText = msg;
    var modal = document.getElementsByClassName("modal-alert")[0];
    document.getElementById("modal-submit").addEventListener("click", closeModal);
    modal.classList.remove("modal-hidden");
};
function closeModal() {
    var modal = document.getElementsByClassName("modal-alert")[0];
    var title =  document.getElementById("modal-title");
    title.classList = "modal-title";
    modal.classList.add("modal-hidden");
};