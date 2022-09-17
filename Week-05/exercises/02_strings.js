console.log("Exercise 02: Strings.");
var stringA = "Do you want to log in?";
console.log(stringA.toUpperCase());
var stringB = "I can't finish this sentence.";
console.log(stringB.substring(0, 5));
var stringC = "something.js";
console.log(stringC.substring(stringC.length - 3, stringC.length));
var stringD = "the first lEtter of a Sentence must ALWAYS be capitalized."
console.log(stringD.substring(0, 1).toUpperCase() + stringD.substring(1, stringD.length).toLowerCase());
var stringE = "it's between";
console.log(stringE.indexOf(" "));
var stringF = "galileo galilei";
var spaceIndexF = stringF.indexOf(" ");
var firstWordF = stringF.substring(0, spaceIndexF);
var secondWordF = stringF.substring(spaceIndexF + 1, stringF.length);
firstWordF = firstWordF[0].toUpperCase() + firstWordF.substring(1, firstWordF.length).toLowerCase();
secondWordF = secondWordF[0].toUpperCase() + secondWordF.substring(1, secondWordF.length).toLowerCase();
console.log(firstWordF + " " + secondWordF);