console.log ("Exercise 06: Functions");
function suma(a, b) {
    return a + b;
};
var resultado = suma(2, 5);
console.log(resultado);
function suma(a, b) {
    if (typeof a !== 'number' || Number.isNaN(a) || typeof b !== 'number' || Number.isNaN(b)) {
        alert("All inputs must be numbers.");
        return NaN;
    };
    return a + b;
};
function validateInteger(a) {
    return (Number.isInteger(a));
};
function suma(a, b) {
    if (typeof a !== 'number' || Number.isNaN(a) || typeof b !== 'number' || Number.isNaN(b)) {
        alert("All inputs must be numbers.");
        return NaN;
    };
    if (!validateInteger(a) || !validateInteger(b)) {
        alert("Some numbers are not integers.");
        return Math.round(a + b);
    }
    return a + b;
};
function suma(a, b) {
    validation(a, b);
    return Math.round(a + b);
};
function validation(a, b) {
    if (typeof a !== 'number' || Number.isNaN(a) || typeof b !== 'number' || Number.isNaN(b)) {
        alert("All inputs must be numbers.");
        return NaN;
    };
    if (!validateInteger(a) || !validateInteger(b)) {
        alert("Some numbers are not integers.");
    }
};