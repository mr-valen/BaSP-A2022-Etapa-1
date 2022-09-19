console.log ("Exercise 06: Functions");
function suma(a, b) {
    return a + b;
};
var resultado = suma(2, 5);
console.log(resultado);
var test = validateInteger(2.444);
function suma(a, b) {
    if (isNaN(a) || isNaN(b) || typeof a !== 'number' || typeof b !== 'number') {
        alert("All inputs must be numbers.");
        return NaN;
    };
    return a + b;
};
function validateInteger(a) {
    return (parseFloat(a) | 0) === parseFloat(a);
};
function suma(a, b) {
    if (isNaN(a) || isNaN(b) || typeof a !== 'number' || typeof b !== 'number') {
        alert("All inputs must be numbers.");
        return NaN;
    };
    if (!validateInteger(a)) {
        alert("First number is not an integer.");
        return Math.round(a);
    };
    if (!validateInteger(b)) {
        alert("Second number is not an integer.");
        return Math.round(b);
    };
    return a + b;
};
function suma(a, b) {
    if (isNaN(a) || isNaN(b) || typeof a !== 'number' || typeof b !== 'number') {
        alert("All inputs must be numbers.");
        return NaN;
    };
    var isInvalid = validation(a, b);
    if (isInvalid) {
        return isInvalid;
    };
    return a + b;
};
function validation(a, b) {
    if (!validateInteger(a)) {
        alert("First number is not an integer.");
        return Math.round(a);
    };
    if (!validateInteger(b)) {
        alert("Second number is not an integer.");
        return Math.round(b);
    };
};