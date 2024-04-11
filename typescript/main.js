"use strict";
function myName(naame, surname) {
    let complete = naame + " " + surname;
    console.log(complete);
}
let naame = "Kelly";
let surname = "Almeida";
myName(naame, surname);
let multilinea = `Línea 1
Línea 2
Línea 3`;
console.log(multilinea);
// ej 2
function calculator(num1, num2) {
    let plus = num1 + num2;
    let multiply = num1 * num2;
    let divide = num1 / num2;
    console.log("suma= " + plus);
    console.log("multiplicación= " + multiply);
    console.log("división= " + divide);
}
let num1 = 34;
let num2 = 15;
calculator(num1, num2);
