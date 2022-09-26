window.onload = function() {
    var firstNameInput = document.getElementById("firstname-input");
    firstNameInput.addEventListener("blur", firstNameValidation);
    firstNameInput.addEventListener("focus", firstNameReset);
};
function firstNameValidation() {
    var firstNameInput = document.getElementById("firstname-input");
    console.log(firstNameInput);
}