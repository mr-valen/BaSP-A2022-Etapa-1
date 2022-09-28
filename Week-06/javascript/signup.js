window.onload = function() {
    var firstNameInput = document.getElementById("firstname-input");
    firstNameInput.addEventListener("blur", firstNameValidation);
    firstNameInput.addEventListener("focus", firstNameReset);
    var lastNameInput = document.getElementById("lastname-input");
    lastNameInput.addEventListener("blur", lastNameValidation);
    lastNameInput.addEventListener("focus", lastNameReset);
    var dniInput = document.getElementById("dni-input");
    dniInput.addEventListener("blur", dniValidation);
    dniInput.addEventListener("focus", dniReset);
    var birthDateInput = document.getElementById("birthdate-input");
    birthDateInput.addEventListener("blur", birthDateValidation);
    birthDateInput.addEventListener("focus", birthDateReset);
    var phoneInput = document.getElementById("phone-input");
    phoneInput.addEventListener("blur", phoneValidation);
    phoneInput.addEventListener("focus", phoneReset);
    var addressInput = document.getElementById("address-input");
    addressInput.addEventListener("blur", addressValidation);
    addressInput.addEventListener("focus", addressReset);
    var localityInput = document.getElementById("locality-input");
    localityInput.addEventListener("blur", localityValidation);
    localityInput.addEventListener("focus", localityReset);
    var postalInput = document.getElementById("postal-input");
    postalInput.addEventListener("blur", postalValidation);
    postalInput.addEventListener("focus", postalReset);
    var emailInput = document.getElementById("email-input");
    emailInput.addEventListener("blur", emailValidation);
    emailInput.addEventListener("focus", emailReset);
    var repeatEmailInput = document.getElementById("repeatemail-input");
    repeatEmailInput.addEventListener("blur", repeatEmailValidation);
    repeatEmailInput.addEventListener("focus", repeatEmailReset);
    var passwordInput = document.getElementById("password-input");
    passwordInput.addEventListener("blur", passwordValidation);
    passwordInput.addEventListener("focus", passwordReset);
    var repeatPasswordInput = document.getElementById("repeatpassword-input");
    repeatPasswordInput.addEventListener("blur", repeatPasswordValidation);
    repeatPasswordInput.addEventListener("focus", repeatPasswordReset);
    var submitButton = document.getElementById("submit-button");
    submitButton.addEventListener("click", submitAlert);
};
function firstNameValidation() {
    var firstNameInput = document.getElementById("firstname-input");
    var firstNameTry = firstNameInput.value;
    var feedbackFirstName = document.getElementById("firstname-feedback");
    var feedbackP = document.createElement("p");
    if (firstNameTry.length == 0) {
        return;
    };
    if (firstNameTry.length < 3) {
        feedbackP.innerText = "It must contain at least 3 characters.";
        feedbackP.classList.add("feedback-p-error");
        feedbackFirstName.appendChild(feedbackP);
        firstNameInput.classList.add("input-error");
    };
    for (var i = 0; i < firstNameTry.length; i++) {
        if (!isNaN(parseInt(firstNameTry[i])) || (firstNameTry[i].charCodeAt() > 32 && firstNameTry[i].charCodeAt() < 48)) {
            feedbackP.innerText = "It must contain only letters.";
            feedbackP.classList.add("feedback-p-error");
            feedbackFirstName.appendChild(feedbackP);
            firstNameInput.classList.add("input-error");
        };
    };
};
function firstNameReset() {
    var firstNameInput = document.getElementById("firstname-input");
    var feedbackFirstName = document.getElementById("firstname-feedback");
    feedbackFirstName.innerHTML = "";
    firstNameInput.classList.remove("input-error");
};
function lastNameValidation() {
    var lastNameInput = document.getElementById("lastname-input");
    var lastNameTry = lastNameInput.value;
    var feedbackLastName = document.getElementById("lastname-feedback");
    var feedbackP = document.createElement("p");
    if (lastNameTry.length == 0) {
        return;
    };
    if (lastNameTry.length < 3) {
        feedbackP.innerText = "It must contain at least 3 characters.";
        feedbackP.classList.add("feedback-p-error");
        feedbackLastName.appendChild(feedbackP);
        lastNameInput.classList.add("input-error");
        return;
    };
    for (var i = 0; i < lastNameTry.length; i++) {
        if (!isNaN(parseInt(lastNameTry[i])) || (lastNameTry[i].charCodeAt() > 32 && lastNameTry[i].charCodeAt() < 48)) {
            feedbackP.innerText = "It must contain only letters.";
            feedbackP.classList.add("feedback-p-error");
            feedbackLastName.appendChild(feedbackP);
            lastNameInput.classList.add("input-error");
        };
    };
};
function lastNameReset() {
    var lastNameInput = document.getElementById("lastname-input");
    var feedbackLastName = document.getElementById("lastname-feedback");
    feedbackLastName.innerHTML = "";
    lastNameInput.classList.remove("input-error");
};
function dniValidation() {
    var dniInput = document.getElementById("dni-input");
    var dniTry = dniInput.value;
    var feedbackDni = document.getElementById("dni-feedback");
    var feedbackP = document.createElement("p");
    if (dniTry.length == 0) {
        return;
    };
    if (dniTry.length <= 7) {
        feedbackP.innerText = "It must contain at least 8 numbers.";
        feedbackP.classList.add("feedback-p-error");
        feedbackDni.appendChild(feedbackP);
        dniInput.classList.add("input-error");
    };
    for (var i = 0; i < dniTry.length; i++) {
        if (isNaN(parseInt(dniTry[i]))) {
            feedbackP.innerText = "It must contain only numbers.";
            feedbackP.classList.add("feedback-p-error");
            feedbackDni.appendChild(feedbackP);
            dniInput.classList.add("input-error");
        };
    };
};
function dniReset() {
    var dniInput = document.getElementById("dni-input");
    var feedbackDni = document.getElementById("dni-feedback");
    feedbackDni.innerHTML = "";
    dniInput.classList.remove("input-error");
};
function birthDateValidation() {
    var birthDateInput = document.getElementById("birthdate-input");
    var birthDateTry = birthDateInput.value[0]+birthDateInput.value[1]+birthDateInput.value[2]+birthDateInput.value[3];
    var feedbackBirthDate = document.getElementById("birthdate-feedback");
    var feedbackP = document.createElement("p");
    if (parseInt(birthDateTry)>2007) {
        feedbackP.innerText = "You have to be over 16.";
        feedbackP.classList.add("feedback-p-error");
        feedbackBirthDate.appendChild(feedbackP);
        birthDateInput.classList.add("input-error");
    };
};
function birthDateReset() {
    var birthDateInput = document.getElementById("birthdate-input");
    var feedbackBirthDate = document.getElementById("birthdate-feedback");
    feedbackBirthDate.innerHTML = "";
    birthDateInput.classList.remove("input-error");
};
function phoneValidation() {
    var phoneInput = document.getElementById("phone-input");
    var phoneTry = phoneInput.value;
    var feedbackPhone = document.getElementById("phone-feedback");
    var feedbackP = document.createElement("p");
    if (phoneTry.length == 0) {
        return;
    };
    if (phoneTry.length != 10) {
        feedbackP.innerText = "It must contain 10 numbers.";
        feedbackP.classList.add("feedback-p-error");
        feedbackPhone.appendChild(feedbackP);
        phoneInput.classList.add("input-error");
    };
    for (var i = 0; i < phoneTry.length; i++) {
        if (isNaN(parseInt(phoneTry[i]))) {
            feedbackP.innerText = "It must contain only numbers.";
            feedbackP.classList.add("feedback-p-error");
            feedbackPhone.appendChild(feedbackP);
            phoneInput.classList.add("input-error");
        };
    };
};
function phoneReset() {
    var phoneInput = document.getElementById("phone-input");
    var feedbackPhone = document.getElementById("phone-feedback");
    feedbackPhone.innerHTML = "";
    phoneInput.classList.remove("input-error");
};
function addressValidation() {
    var addressInput = document.getElementById("address-input");
    var addressTry = addressInput.value;
    var lastSpace = addressTry.lastIndexOf(" ");
    var feedbackAddress = document.getElementById("address-feedback");
    var feedbackP = document.createElement("p");
    if (addressTry.length == 0) {
        return;
    };
    if (lastSpace < 4) {
        feedbackP.innerText = "It must have at least 5 letters.";
        feedbackP.classList.add("feedback-p-error");
        feedbackAddress.appendChild(feedbackP);
        addressInput.classList.add("input-error");
    };
    for (var i =0; i < lastSpace; i++) {
        if (!isNaN(parseInt(addressTry[i]))) {
            feedbackP.innerText = "It must start with only letters.";
            feedbackP.classList.add("feedback-p-error");
            feedbackAddress.appendChild(feedbackP);
            addressInput.classList.add("input-error");
        };
    };
    for (var i = addressTry.length-1; i > lastSpace; i--) {
        if (isNaN(parseInt(addressTry[i]))) {
            feedbackP.innerText = "It must end with only numbers.";
            feedbackP.classList.add("feedback-p-error");
            feedbackAddress.appendChild(feedbackP);
            addressInput.classList.add("input-error");
        };
    };
    if (lastSpace == -1) {
        feedbackP.innerText = "It must have a space between.";
        feedbackP.classList.add("feedback-p-error");
        feedbackAddress.appendChild(feedbackP);
        addressInput.classList.add("input-error");
    };
};
function addressReset() {
    var addressInput = document.getElementById("address-input");
    var feedbackAddress = document.getElementById("address-feedback");
    feedbackAddress.innerHTML = "";
    addressInput.classList.remove("input-error");
};
function localityValidation() {
    var localityInput = document.getElementById("locality-input");
    var localityTry = localityInput.value;
    var feedbackLocality = document.getElementById("locality-feedback");
    var feedbackP = document.createElement("p");
    if (localityTry.length == 0) {
        return;
    };
    if (localityTry.length <= 3) {
        feedbackP.innerText = "It must contain at least 4 characters.";
        feedbackP.classList.add("feedback-p-error");
        feedbackLocality.appendChild(feedbackP);
        localityInput.classList.add("input-error");
    };
    for (var i = 0; i < localityTry.length; i++) {
        if ((localityTry[i].charCodeAt() > 32 && localityTry[i].charCodeAt() < 48)) {
            feedbackP.innerText = "It must contain only letters or numbers.";
            feedbackP.classList.add("feedback-p-error");
            feedbackLocality.appendChild(feedbackP);
            localityInput.classList.add("input-error");
        };
    };

};
function localityReset() {
    var localityInput = document.getElementById("locality-input");
    var feedbackLocality = document.getElementById("locality-feedback");
    feedbackLocality.innerHTML = "";
    localityInput.classList.remove("input-error");
};
function postalValidation() {
    var postalInput = document.getElementById("postal-input");
    var postalTry = postalInput.value;
    var feedbackPostal = document.getElementById("postal-feedback");
    var feedbackP = document.createElement("p");
    if (postalTry.length == 0) {
        return;
    };
    if (postalTry.length != 4 && postalTry.length != 5) {
        feedbackP.innerText = "It must contain between 4 and 5 numbers.";
        feedbackP.classList.add("feedback-p-error");
        feedbackPostal.appendChild(feedbackP);
        postalInput.classList.add("input-error");
    };
    for (var i = 0; i < postalTry.length-1; i++) {
        if (isNaN(parseInt(postalTry[i]))) {
            feedbackP.innerText = "It must contain only numbers.";
            feedbackP.classList.add("feedback-p-error");
            feedbackPostal.appendChild(feedbackP);
            postalInput.classList.add("input-error");
        };
    };

};
function postalReset() {
    var postalInput = document.getElementById("postal-input");
    var feedbackPostal = document.getElementById("postal-feedback");
    feedbackPostal.innerHTML = "";
    postalInput.classList.remove("input-error");
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
        emailInput.classList.add("input-error");
    };
};
function emailReset() {
    var feedbackEmail = document.getElementById("email-feedback");
    var emailInput = document.getElementById("email-input");
    feedbackEmail.innerHTML = "";
    feedbackEmail.classList.remove("feedback-div-error");
    emailInput.classList.remove("input-error");
};
function repeatEmailValidation() {
    var emailInput = document.getElementById("email-input");
    var repeatEmailInput = document.getElementById("repeatemail-input");
    var feedbackRepeatEmail = document.getElementById("repeatemail-feedback");
    var feedbackP = document.createElement("p");
    if (repeatEmailInput.value.length == 0) {
        return;
    };
    if (emailInput.value != repeatEmailInput.value) {
        feedbackP.innerText = "It must match the email.";
        feedbackP.classList.add("feedback-p-error");
        feedbackRepeatEmail.appendChild(feedbackP);
        feedbackRepeatEmail.classList.add("feedback-div-error");
        repeatEmailInput.classList.add("input-error");
    }
};
function repeatEmailReset() {
    var feedbackRepeatEmail = document.getElementById("repeatemail-feedback");
    var repeatEmailInput = document.getElementById("repeatemail-input");
    feedbackRepeatEmail.innerHTML = "";
    feedbackRepeatEmail.classList.remove("feedback-div-error");
    repeatEmailInput.classList.remove("input-error");
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
        feedbackP.innerText = "It must contain at least 8 characters.";
        feedbackP.classList.add("feedback-p-error");
        feedbackPassword.appendChild(feedbackP);
        feedbackPassword.classList.add("feedback-div-error");
        passwordInput.classList.add("input-error");
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
        feedbackP.innerText = "It must contain at least a letter.";
        feedbackP.classList.add("feedback-p-error");
        feedbackPassword.appendChild(feedbackP);
        feedbackPassword.classList.add("feedback-div-error");
        passwordInput.classList.add("input-error");
        return;
    };
    if (!hasNumber) {
        feedbackP.innerText = "It must contain at least a number.";
        feedbackP.classList.add("feedback-p-error");
        feedbackPassword.appendChild(feedbackP);
        feedbackPassword.classList.add("feedback-div-error");
        passwordInput.classList.add("input-error");
        return;
    };
    if (hasSpecialChar) {
        feedbackP.innerText = "Password mustn't contain special characters.";
        feedbackP.classList.add("feedback-p-error");
        feedbackPassword.appendChild(feedbackP);
        feedbackPassword.classList.add("feedback-div-error");
        passwordInput.classList.add("input-error");
        return;
    };
};
function passwordReset() {
    var feedbackPassword = document.getElementById("password-feedback");
    var passwordInput = document.getElementById("password-input");
    feedbackPassword.innerHTML = "";
    feedbackPassword.classList.remove("feedback-div-error");
    passwordInput.classList.remove("input-error");
};
function repeatPasswordValidation() {
    var passwordInput = document.getElementById("password-input");
    var repeatPasswordInput = document.getElementById("repeatpassword-input");
    var feedbackRepeatPassword = document.getElementById("repeatpassword-feedback");
    var feedbackP = document.createElement("p");
    if (repeatPasswordInput.value.length == 0) {
        return;
    };
    if (passwordInput.value != repeatPasswordInput.value) {
        feedbackP.innerText = "It must match the password.";
        feedbackP.classList.add("feedback-p-error");
        feedbackRepeatPassword.appendChild(feedbackP);
        feedbackRepeatPassword.classList.add("feedback-div-error");
        repeatPasswordInput.classList.add("input-error");
    }
};
function repeatPasswordReset() {
    var feedbackRepeatPassword = document.getElementById("repeatpassword-feedback");
    var repeatPasswordInput = document.getElementById("repeatpassword-input");
    feedbackRepeatPassword.innerHTML = "";
    feedbackRepeatPassword.classList.remove("feedback-div-error");
    repeatPasswordInput.classList.remove("input-error");
};
function submitAlert(e) {
    e.preventDefault();
    var firstNameInput = document.getElementById("firstname-input");
    var firstNameStatus = document.getElementById("firstname-feedback").firstChild;
    var firstNameAnswer = "";
    firstNameStatus? firstNameAnswer = "ERROR: " + firstNameStatus.innerHTML : firstNameAnswer = firstNameInput.value;

    var lastNameInput = document.getElementById("lastname-input");
    var lastNameStatus = document.getElementById("lastname-feedback").firstChild;
    var lastNameAnswer = "";
    lastNameStatus? lastNameAnswer = "ERROR: " + lastNameStatus.innerHTML : lastNameAnswer = lastNameInput.value;

    var dniInput = document.getElementById("dni-input");
    var dniStatus = document.getElementById("dni-feedback").firstChild;
    var dniAnswer = "";
    dniStatus? dniAnswer = "ERROR: " + dniStatus.innerHTML : dniAnswer = dniInput.value;

    var birthDateInput = document.getElementById("birthdate-input");
    var birthDateStatus = document.getElementById("birthdate-feedback").firstChild;
    var birthDateAnswer = "";
    birthDateStatus? birthDateAnswer = "ERROR: " + birthDateStatus.innerHTML : birthDateAnswer = birthDateInput.value;

    var phoneInput = document.getElementById("phone-input");
    var phoneStatus = document.getElementById("phone-feedback").firstChild;
    var phoneAnswer = "";
    phoneStatus? phoneAnswer = "ERROR: " + phoneStatus.innerHTML : phoneAnswer = phoneInput.value;

    var addressInput = document.getElementById("address-input");
    var addressStatus = document.getElementById("address-feedback").firstChild;
    var addressAnswer = "";
    addressStatus? addressAnswer = "ERROR: " + addressStatus.innerHTML : addressAnswer = addressInput.value;

    var localityInput = document.getElementById("locality-input");
    var localityStatus = document.getElementById("locality-feedback").firstChild;
    var localityAnswer = "";
    localityStatus? localityAnswer = "ERROR: " + localityStatus.innerHTML : localityAnswer = localityInput.value;

    var postalInput = document.getElementById("postal-input");
    var postalStatus = document.getElementById("postal-feedback").firstChild;
    var postalAnswer = "";
    postalStatus? postalAnswer = "ERROR: " + postalStatus.innerHTML : postalAnswer = postalInput.value;

    var emailInput = document.getElementById("email-input");
    var emailStatus = document.getElementById("email-feedback").firstChild;
    var emailAnswer = "";
    emailStatus? emailAnswer = "ERROR: " + emailStatus.innerHTML : emailAnswer = emailInput.value;

    var repeatEmailInput = document.getElementById("repeatemail-input");
    var repeatEmailStatus = document.getElementById("repeatemail-feedback").firstChild;
    var repeatEmailAnswer = "";
    repeatEmailStatus? repeatEmailAnswer = "ERROR: " + repeatEmailStatus.innerHTML : repeatEmailAnswer = repeatEmailInput.value;

    var passwordInput = document.getElementById("password-input");
    var passwordStatus = document.getElementById("password-feedback").firstChild;
    var passwordAnswer = "";
    passwordStatus? passwordAnswer = "ERROR: " + passwordStatus.innerHTML : passwordAnswer = passwordInput.value;

    var repeatPasswordInput = document.getElementById("repeatpassword-input");
    var repeatPasswordStatus = document.getElementById("repeatpassword-feedback").firstChild;
    var repeatPasswordAnswer = "";
    repeatPasswordStatus? repeatPasswordAnswer = "ERROR: " + repeatPasswordStatus.innerHTML : repeatPasswordAnswer = repeatPasswordInput.value;

    if (!emailInput.value) emailAnswer = "ERROR: Empty email field.";
    if (!passwordInput.value) passwordAnswer = "ERROR: Empty password field.";
    var answer = emailAnswer + "\n" + passwordAnswer;
    alert(answer);
};