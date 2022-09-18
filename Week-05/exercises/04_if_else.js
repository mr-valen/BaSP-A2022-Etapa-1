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
} else if (age < 12) {
    alert("Niño");
} else if (age < 20) {
    alert("Adolescente");
} else if (age < 31) {
    alert("Joven");
} else if (age < 61) {
    alert("Adulto");
} else if (age < 75) {
    alert("Adulto mayor");
} else {
    alert("Anciano");
};