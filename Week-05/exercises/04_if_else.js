console.log ("Exercise 04: If Else");
var num = Math.random();
if (num > .5) {
    alert ("Greater than 0.5");
};
if (num < .5) {
    alert ("Lesser than 0.5");
};
console.log(num);
var age = Math.floor(Math.random()*101);
if (age < 2) {
    alert("Bebe");
};
if (age < 12 && age >= 2) {
    alert("Niño");
};
if (age < 20 && age >= 13) {
    alert("Adolescente");
};
if (age < 31 && age >= 20) {
    alert("Joven");
};
if (age < 61 && age >= 31) {
    alert("Adulto");
};
if (age < 75 && age >= 61) {
    alert("Adulto mayor");
};
if (age > 75) {
    alert("Anciano");
};