console.log ("Exercise 05: For");
var array = ["perro", "gato", "pato", "manatí", "elefante"];
for (var i = 0; i < array.length; i++) {
    alert(array[i]);
};
for (var i = 0; i < array.length; i++) {
    var word = array[i];
    word = word.substring(0, 1).toUpperCase() + word.substring(1, word.length);
    array[i] = word;
    alert(array[i]);
};
var array = [];
for (var i = 0; i < 10; i++) {
    array.push(i);
};
console.log(array);