window.onload = function() {
    var firstNameInput = document.getElementById("firstname-input");
    var lastNameInput = document.getElementById("lastname-input");
    var dniInput = document.getElementById("dni-input");
    var dobInput = document.getElementById("dob-input");
    var phoneInput = document.getElementById("phone-input");
    var addressInput = document.getElementById("address-input");
    var cityInput = document.getElementById("city-input");
    var zipInput = document.getElementById("zip-input");
    var emailInput = document.getElementById("email-input");
    var repeatEmailInput = document.getElementById("repeatemail-input");
    var passwordInput = document.getElementById("password-input");
    var repeatPasswordInput = document.getElementById("repeatpassword-input");
    var submitButton = document.getElementById("submit-button");
    firstNameInput.addEventListener("blur", firstNameValidation);
    lastNameInput.addEventListener("blur", lastNameValidation);
    dniInput.addEventListener("blur", dniValidation);
    dobInput.addEventListener("blur", dobValidation);
    phoneInput.addEventListener("blur", phoneValidation);
    addressInput.addEventListener("blur", addressValidation);
    cityInput.addEventListener("blur", cityValidation);
    zipInput.addEventListener("blur", zipValidation);
    emailInput.addEventListener("blur", emailValidation);
    repeatEmailInput.addEventListener("blur", repeatEmailValidation);
    passwordInput.addEventListener("blur", passwordValidation);
    repeatPasswordInput.addEventListener("blur", repeatPasswordValidation);
    submitButton.addEventListener("click", submit);
    var inputs = document.getElementsByClassName("signup-input");
    for (var input of inputs) {
        input.addEventListener("focus", reset);
    };
    autocomplete();
};
function reset(e) {
    var input = e.path[0];
    var feedback = e.path[1].getElementsByClassName("feedback-div")[0];
    feedback.innerHTML = "";
    input.classList.remove("input-error");
};
function autocomplete() {
    var name = localStorage.getItem("name");
    var firstNameInput = document.getElementById("firstname-input");
    if (name) {
        firstNameInput.value = name;
    };
    var lastName = localStorage.getItem("lastName");
    var lastNameInput = document.getElementById("lastname-input");
    if (lastName) {
        lastNameInput.value = lastName;
    };
    var dni = localStorage.getItem("dni");
    var dniInput = document.getElementById("dni-input");
    if (dni) {
        dniInput.value = dni;
    };
    var dob = localStorage.getItem("dob");
    var dobInput = document.getElementById("dob-input");
    if (dob) {
        dob = dob.split("/");
        dob = dob[2] + "-" + dob[0] + "-" + dob[1];
        dobInput.value = dob;
    };
    var phone = localStorage.getItem("phone");
    var phoneInput = document.getElementById("phone-input");
    if (phone) {
        phoneInput.value = phone;
    };
    var address = localStorage.getItem("address");
    var addressInput = document.getElementById("address-input");
    if (address) {
        addressInput.value = address;
    };
    var city = localStorage.getItem("city");
    var cityInput = document.getElementById("city-input");
    if (city) {
        cityInput.value = city;
    };
    var zip = localStorage.getItem("zip");
    var zipInput = document.getElementById("zip-input");
    if (zip) {
        zipInput.value = zip;
    };
    var email = localStorage.getItem("email");
    var emailInput = document.getElementById("email-input");
    var repeatEmailInput = document.getElementById("repeatemail-input");
    if (email) {
        emailInput.value = email;
        repeatEmailInput.value = email;
    };
    var password = localStorage.getItem("password");
    var passwordInput = document.getElementById("password-input");
    var repeatPasswordInput = document.getElementById("repeatpassword-input");
    if (password) {
        passwordInput.value = password;
        repeatPasswordInput.value = password;
    };
}
function firstNameValidation() {
    var firstNameInput = document.getElementById("firstname-input");
    var firstNameTry = firstNameInput.value;
    var feedbackFirstName = document.getElementById("firstname-feedback");
    var feedbackP = document.createElement("p");
    if (firstNameTry.length === 0) {
        return;
    };
    if (firstNameTry.length < 3) {
        feedbackP.innerText = "It must contain at least 3 characters.";
        feedbackP.classList.add("feedback-p-error");
        feedbackFirstName.appendChild(feedbackP);
        firstNameInput.classList.add("input-error");
    };
    for (var i = 0; i < firstNameTry.length; i++) {
        if (!isNaN(parseInt(firstNameTry[i])) || (firstNameTry[i].charCodeAt() > 32
        && firstNameTry[i].charCodeAt() < 48)) {
            feedbackP.innerText = "It must contain only letters.";
            feedbackP.classList.add("feedback-p-error");
            feedbackFirstName.appendChild(feedbackP);
            firstNameInput.classList.add("input-error");
        };
    };
};
function lastNameValidation() {
    var lastNameInput = document.getElementById("lastname-input");
    var lastNameTry = lastNameInput.value;
    var feedbackLastName = document.getElementById("lastname-feedback");
    var feedbackP = document.createElement("p");
    if (lastNameTry.length === 0) {
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
        if (!isNaN(parseInt(lastNameTry[i])) || (lastNameTry[i].charCodeAt() > 32
        && lastNameTry[i].charCodeAt() < 48)) {
            feedbackP.innerText = "It must contain only letters.";
            feedbackP.classList.add("feedback-p-error");
            feedbackLastName.appendChild(feedbackP);
            lastNameInput.classList.add("input-error");
        };
    };
};
function dniValidation() {
    var dniInput = document.getElementById("dni-input");
    var dniTry = dniInput.value;
    var feedbackDni = document.getElementById("dni-feedback");
    var feedbackP = document.createElement("p");
    if (dniTry.length === 0) {
        return;
    };
    if (dniTry.length < 7 || dniTry.length > 8) {
        feedbackP.innerText = "It must contain at between 7 and 8 numbers.";
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
function dobValidation() {
    var dobInput = document.getElementById("dob-input");
    var dobTry = dobInput.value[0]+dobInput.value[1]+dobInput.value[2]+dobInput.value[3];
    var feedbackBirthDate = document.getElementById("dob-feedback");
    var feedbackP = document.createElement("p");
    if (parseInt(dobTry)>2007) {
        feedbackP.innerText = "You have to be over 16.";
        feedbackP.classList.add("feedback-p-error");
        feedbackBirthDate.appendChild(feedbackP);
        dobInput.classList.add("input-error");
    };
};
function phoneValidation() {
    var phoneInput = document.getElementById("phone-input");
    var phoneTry = phoneInput.value;
    var feedbackPhone = document.getElementById("phone-feedback");
    var feedbackP = document.createElement("p");
    if (phoneTry.length === 0) {
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
function addressValidation() {
    var addressInput = document.getElementById("address-input");
    var addressTry = addressInput.value;
    var lastSpace = addressTry.lastIndexOf(" ");
    var feedbackAddress = document.getElementById("address-feedback");
    var feedbackP = document.createElement("p");
    if (addressTry.length === 0) {
        return;
    };
    if (lastSpace < 4) {
        feedbackP.innerText = "It must have at least 5 letters.";
        feedbackP.classList.add("feedback-p-error");
        feedbackAddress.appendChild(feedbackP);
        addressInput.classList.add("input-error");
    };
    for (var i = 0; i < lastSpace; i++) {
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
    if (lastSpace === -1) {
        feedbackP.innerText = "It must have a space between.";
        feedbackP.classList.add("feedback-p-error");
        feedbackAddress.appendChild(feedbackP);
        addressInput.classList.add("input-error");
    };
    if (lastSpace === addressTry.length-1) {
        feedbackP.innerText = "It must end with numbers.";
        feedbackP.classList.add("feedback-p-error");
        feedbackAddress.appendChild(feedbackP);
        addressInput.classList.add("input-error");
    };
};
function cityValidation() {
    var cityInput = document.getElementById("city-input");
    var cityTry = cityInput.value;
    var feedbackLocality = document.getElementById("city-feedback");
    var feedbackP = document.createElement("p");
    if (cityTry.length === 0) {
        return;
    };
    if (cityTry.length <= 3) {
        feedbackP.innerText = "It must contain at least 4 characters.";
        feedbackP.classList.add("feedback-p-error");
        feedbackLocality.appendChild(feedbackP);
        cityInput.classList.add("input-error");
    };
    for (var i = 0; i < cityTry.length; i++) {
        if ((cityTry[i].charCodeAt() > 32 && cityTry[i].charCodeAt() < 48)) {
            feedbackP.innerText = "It must contain only letters or numbers.";
            feedbackP.classList.add("feedback-p-error");
            feedbackLocality.appendChild(feedbackP);
            cityInput.classList.add("input-error");
        };
    };

};
function zipValidation() {
    var zipInput = document.getElementById("zip-input");
    var zipTry = zipInput.value;
    var feedbackPostal = document.getElementById("zip-feedback");
    var feedbackP = document.createElement("p");
    if (zipTry.length === 0) {
        return;
    };
    if (zipTry.length != 4 && zipTry.length != 5) {
        feedbackP.innerText = "It must contain between 4 and 5 numbers.";
        feedbackP.classList.add("feedback-p-error");
        feedbackPostal.appendChild(feedbackP);
        zipInput.classList.add("input-error");
    };
    for (var i = 0; i < zipTry.length-1; i++) {
        if (isNaN(parseInt(zipTry[i]))) {
            feedbackP.innerText = "It must contain only numbers.";
            feedbackP.classList.add("feedback-p-error");
            feedbackPostal.appendChild(feedbackP);
            zipInput.classList.add("input-error");
        };
    };

};
function emailValidation() {
    var emailInput = document.getElementById("email-input");
    var feedbackEmail = document.getElementById("email-feedback");
    var feedbackP = document.createElement("p");
    var emailCondition = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    if (emailInput.value.length === 0) {
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
function repeatEmailValidation() {
    var emailInput = document.getElementById("email-input");
    var repeatEmailInput = document.getElementById("repeatemail-input");
    var feedbackRepeatEmail = document.getElementById("repeatemail-feedback");
    var feedbackP = document.createElement("p");
    if (repeatEmailInput.value.length === 0) {
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
function passwordValidation() {
    var passwordInput = document.getElementById("password-input");
    var passwordTry = passwordInput.value;
    var feedbackPassword = document.getElementById("password-feedback");
    var feedbackP = document.createElement("p");
    if (passwordTry.length === 0) {
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
        if ((passwordTry[i].charCodeAt() > 32 && passwordTry[i].charCodeAt() < 48)
        || passwordTry[i] === " ") hasSpecialChar = true;
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
function repeatPasswordValidation() {
    var passwordInput = document.getElementById("password-input");
    var repeatPasswordInput = document.getElementById("repeatpassword-input");
    var feedbackRepeatPassword = document.getElementById("repeatpassword-feedback");
    var feedbackP = document.createElement("p");
    if (repeatPasswordInput.value.length === 0) {
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
function submit(e) {
    e.preventDefault();
    var name = document.getElementById("firstname-input").value;
    var lastName = document.getElementById("lastname-input").value;
    var dni = document.getElementById("dni-input").value;
    var dob = document.getElementById("dob-input").value;
    dob = dob.split("-");
    dob = dob[1] + "/" + dob[2] + "/" + dob[0];
    var phone = document.getElementById("phone-input").value;
    var address = document.getElementById("address-input").value;
    var city = document.getElementById("city-input").value;
    var zip = document.getElementById("zip-input").value;
    var email = document.getElementById("email-input").value;
    var repeatEmail = document.getElementById("repeatemail-input").value;
    var password = document.getElementById("password-input").value;
    var repeatPassword = document.getElementById("repeatpassword-input").value;
    var url = "https://basp-m2022-api-rest-server.herokuapp.com/signup?name=" + name
    + "&lastName=" + lastName + "&dni=" + dni
    + "&dob=" + dob + "&phone=" + phone
    + "&address=" + address + "&city=" + city
    + "&zip=" + zip + "&email=" + email
    + "&password=" + password;
    var firstNameStatus = document.getElementById("firstname-feedback").firstChild;
    var lastNameStatus = document.getElementById("lastname-feedback").firstChild;
    var dniStatus = document.getElementById("dni-feedback").firstChild;
    var dobStatus = document.getElementById("dob-feedback").firstChild;
    var phoneStatus = document.getElementById("phone-feedback").firstChild;
    var addressStatus = document.getElementById("address-feedback").firstChild;
    var cityStatus = document.getElementById("city-feedback").firstChild;
    var zipStatus = document.getElementById("zip-feedback").firstChild;
    var emailStatus = document.getElementById("email-feedback").firstChild;
    var repeatEmailStatus = document.getElementById("repeatemail-feedback").firstChild;
    var passwordStatus = document.getElementById("password-feedback").firstChild;
    var repeatPasswordStatus = document.getElementById("repeatpassword-feedback").firstChild;
    if (!name || !lastName ||
        !dni || !dob ||
        !phone || !address ||
        !city || !zip ||
        !email || !password ||
        !repeatEmail || !repeatPassword) {
            alert("ERROR: All fields are required.");
            return;
    };
    if (!firstNameStatus && !lastNameStatus &&
        !dniStatus && !dobStatus &&
        !phoneStatus && !addressStatus &&
        !cityStatus && !zipStatus &&
        !emailStatus && !repeatEmailStatus &&
        !passwordStatus && !repeatPasswordStatus) {
            fetch(url)
            .then(function(res) {
                return res.json()
            })
            .then(function(data) {
                alert(data.msg);
                if (data.success) {
                    localStorage.setItem("name", name);
                    localStorage.setItem("lastName", lastName);
                    localStorage.setItem("dni", dni);
                    localStorage.setItem("dob", dob);
                    localStorage.setItem("phone", phone);
                    localStorage.setItem("address", address);
                    localStorage.setItem("city", city);
                    localStorage.setItem("zip", zip);
                    localStorage.setItem("email", email);
                    localStorage.setItem("password", password);
                } else {
                    var message = ""
                    for (var error of data.errors) {
                        message += "* " + error.msg + "\n"
                    }
                    alert("There is one or more errors: \n" + message)
                    throw new Error("There was an error with the request.");
                };
            })
            .catch(function(error) {
                console.log(error);
            })
    } else {
        var feedbacks = document.getElementsByClassName("feedback-div");
        var answer = "There is one or more errors: \n"
        for (const feedback of feedbacks) {
            if (feedback.innerText) {
                var title = feedback.parentElement.getElementsByTagName("legend")[0].innerText;
                answer += title + ": " + feedback.innerText + "\n";
            };
        };
        alert(answer);
    }
};
    // var firstNameAnswer = "";
    // firstNameStatus? firstNameAnswer = "ERROR: " + firstNameStatus.innerHTML : firstNameAnswer = firstNameInput.value;

    // var lastNameAnswer = "";
    // lastNameStatus? lastNameAnswer = "ERROR: " + lastNameStatus.innerHTML : lastNameAnswer = lastNameInput.value;

    // var dniAnswer = "";
    // dniStatus? dniAnswer = "ERROR: " + dniStatus.innerHTML : dniAnswer = dniInput.value;

    // var birthDateAnswer = "";
    // birthDateStatus? birthDateAnswer = "ERROR: " + birthDateStatus.innerHTML : birthDateAnswer = birthDateInput.value;

    // var phoneAnswer = "";
    // phoneStatus? phoneAnswer = "ERROR: " + phoneStatus.innerHTML : phoneAnswer = phoneInput.value;

    // var addressAnswer = "";
    // addressStatus? addressAnswer = "ERROR: " + addressStatus.innerHTML : addressAnswer = addressInput.value;

    // var localityAnswer = "";
    // localityStatus? localityAnswer = "ERROR: " + localityStatus.innerHTML : localityAnswer = localityInput.value;

    // var postalAnswer = "";
    // postalStatus? postalAnswer = "ERROR: " + postalStatus.innerHTML : postalAnswer = postalInput.value;

    // var emailAnswer = "";
    // emailStatus? emailAnswer = "ERROR: " + emailStatus.innerHTML : emailAnswer = emailInput.value;

    // var repeatEmailInput = document.getElementById("repeatemail-input");
    // var repeatEmailAnswer = "";
    // repeatEmailStatus? repeatEmailAnswer = "ERROR: " + repeatEmailStatus.innerHTML : repeatEmailAnswer = repeatEmailInput.value;

    // var passwordAnswer = "";
    // passwordStatus? passwordAnswer = "ERROR: " + passwordStatus.innerHTML : passwordAnswer = passwordInput.value;

    // var repeatPasswordInput = document.getElementById("repeatpassword-input");
    // var repeatPasswordAnswer = "";
    // repeatPasswordStatus? repeatPasswordAnswer = "ERROR: " + repeatPasswordStatus.innerHTML : repeatPasswordAnswer = repeatPasswordInput.value;

    // if (!firstNameInput.value) firstNameAnswer = "ERROR: Empty first name field.";
    // if (!lastNameInput.value) lastNameAnswer = "ERROR: Empty last name field.";
    // if (!dniInput.value) dniAnswer = "ERROR: Empty DNI field.";
    // if (!birthDateInput.value) birthDateAnswer = "ERROR: Empty birth date field.";
    // if (!phoneInput.value) phoneAnswer = "ERROR: Empty phone field.";
    // if (!addressInput.value) addressAnswer = "ERROR: Empty address field.";
    // if (!localityInput.value) localityAnswer = "ERROR: Empty locality field.";
    // if (!postalInput.value) postalAnswer = "ERROR: Empty postal field.";
    // if (!emailInput.value) emailAnswer = "ERROR: Empty email field.";
    // if (!repeatEmailInput.value) repeatEmailAnswer = "ERROR: Empty repetead email field.";
    // if (!passwordInput.value) passwordAnswer = "ERROR: Empty password field.";
    // if (!passwordInput.value) repeatPasswordAnswer = "ERROR: Empty repeated password field.";
    // var answer = firstNameAnswer + "\n" + lastNameAnswer + "\n" + dniAnswer + "\n" + birthDateAnswer + "\n" + phoneAnswer + "\n" + addressAnswer + "\n" + localityAnswer + "\n" + postalAnswer + "\n" + emailAnswer + "\n" + repeatEmailAnswer + "\n" + passwordAnswer + "\n" + repeatPasswordAnswer;
    // alert(answer);