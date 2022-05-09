/*
    Title: watlington-alphabet-game.js
    Author: William Watlington
    Date: 5/7/2022
    Description: Script for watlington-alphabet-game.html
 */

const alphabetArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let alphabetOutput = "";
const result = document.getElementById("result");
const alphabetElement = document.getElementById("alphabet");

for(const letter in alphabetArr) {
    alphabetOutput = alphabetArr.join(",");
}

// set the #alphabet elements value to the alphabet array
alphabetElement.innerHTML = alphabetOutput.toUpperCase();


// function called when find letter button is clicked, checks for index and returns error message if not found
function findLetter() {
    let pos = document.getElementById("txtPosition").value;
    let letter = alphabetArr[parseInt(pos)-1];
    if(letter == undefined) {
        result.innerHTML = "There are not " + pos + " letters in the alphabet";
    }
    else {
        result.innerHTML = letter.toUpperCase() + " is at position " + pos + " in the alphabet";
    }
}