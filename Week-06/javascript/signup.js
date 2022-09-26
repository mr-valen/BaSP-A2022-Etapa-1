window.onload = function() {
    var firstNameInput = document.getElementById("firstname-input");
    firstNameInput.addEventListener("blur", firstNameValidation);
    firstNameInput.addEventListener("focus", firstNameReset);
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
        return;
    };
    for (var i = 0; i < firstNameTry.length; i++) {
        if (!isNaN(parseInt(firstNameTry[i])) || (firstNameTry[i].charCodeAt() > 32 && firstNameTry[i].charCodeAt() < 48)) {
            feedbackP.innerText = "First name must contain only letters.";
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
}