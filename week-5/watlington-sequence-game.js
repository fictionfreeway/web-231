/*
    Title: watlington-sequence-game.js
    Author: William Watlington
    Date: 4/16/2022
    Description: Script for watlington-sequence-game.html
 */


//function to be called when btnDisplaySequence is clicked, shows chosen sequence 
function displaySequence() {
    let dropDownMenu = document.getElementById("sequence");
    let chosenSequence = dropDownMenu.options[dropDownMenu.selectedIndex].value;
    let result = document.getElementById("result");

    let sequence = [];

    if(chosenSequence == "fibonacci") {
        let firstNum = 0;
        let secondNum = 1;
        sequence.push(0);
        while(secondNum <=40) {
            let newNum = firstNum + secondNum;
            if (newNum < 40) {
                sequence.push(newNum);
            }
            firstNum = secondNum;
            secondNum = newNum;
        }

    } else if(chosenSequence == "even") {
        let currentNum = 0;
        do {
            sequence.push(currentNum);
            currentNum+=2;
        } while (currentNum < 19);
    } else if (chosenSequence == "odd") {
        for(i=0; i<20; i++) {
            if(i&1) {
                sequence.push(i);
            }
        }
    } else {
        alert("Invalid selection, please try again!");
    }

    result.innerHTML = sequence.join(", ");
}