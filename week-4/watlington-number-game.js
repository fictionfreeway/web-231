/*
    Title: watlington-number-game.js
    Author: William Watlington
    Date: 4/9/2022
    Description: Script for watlington-number-game.html
 */


const submitButton = document.getElementById("btnSubmit");
const result = document.getElementById("result"); 
let rnd; //placeholder for random number


//generate random number
const getRndNum = function () {
    rnd = Math.floor((Math.random() * 10) + 1);
}

//check user input against random number, change innerHTML of result to show result
const compareNums = function () {
    let myNumber = document.getElementById("txtMyNumber").value;
    if (myNumber == rnd) {
        result.innerHTML = "Congratulations! You picked the correct number!";
    }
    else if (myNumber > rnd) {
        result.innerHTML = "The number is less than " + myNumber;
    }
    else if (myNumber < rnd) {
        result.innerHTML = "The number is more than " + myNumber;
    }
}

window.onload = getRndNum;

submitButton.onclick = compareNums;