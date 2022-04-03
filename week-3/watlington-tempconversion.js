/*
    Title: watlington-temp-conversion.js
    Author: William Watlington
    Date: 4/3/2022
    Description: Script for the watlington-temp-conversion.html file 
        to convert fahrenheit to celsius
 */


let tempInput = document.getElementById("txtFahrenheit"); //text input from html
let conversionResult = document.getElementById("result"); //<p> from html to hold conversion result
let convertButton = document.getElementById("convertButton"); //button from html to assign onclick to


// function that converts user entered contents of text input to celsius then changes inner html of result to the formula's result
const convertToC = function() {
    let fahrenheit = tempInput.value;
    conversionResult.innerHTML = String(((parseFloat(fahrenheit) - 32) / 1.8).toFixed(2));
    
}

convertButton.onclick = convertToC;

