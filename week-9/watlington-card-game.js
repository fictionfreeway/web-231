/*
    Title: watlington-card-game.js
    Author: William Watlington
    Date: 5/13/2022
    Description: Script for watlington-card-game.html
 */


// class to hold face and suit properties of cards
class Card {
    constructor(face, suit) {
        this.face = face;
        this.suit = suit;
    }
}

// class to hold all card objects and functions to create them and shuffle them
class Dealer {
    CARD_COUNT = 51
    cards = [];
    faces = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    suits = ["hearts", "diamonds", "clubs", "spades"];

    //adds all cards to the empty cards array
    getDeckOfCards() {
        for(let i=0; i < this.CARD_COUNT; i++) {
            this.cards[i] = new Card(this.faces[i % 13], this.suits[Math.floor(i / 13)]);
        }
    }

    // randomly switches each card with another until all have been shuffled
    shuffle() {
        for(let i=0; i < this.CARD_COUNT; i++) {
            let secondCard = this.cards[Math.floor(Math.random() * this.CARD_COUNT)];
            let tempCard = this.cards[i];
            this.cards[i] = secondCard;
            this.cards[secondCard] = tempCard;
        }
    }

    // creates html div that contains all info to display for each card and styles it
    buildPlayingCard (card, suitIcon, faceColor, suitColor) {
        return `<div class="card player-card">
        <div class="card-title" style="text-align:left; padding-left:10px; color:${faceColor}">${card.face}</div>
        <div class="card-content" style="font-size:28px; padding-bottom:25px">
        <span class="${suitIcon}" style="color:${suitColor}"></span>
        </div></div>`;
    }

    constructor(){   
        this.getDeckOfCards();
        const faces = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
        const suits = ["hearts", "diamonds", "clubs", "spades"];
    }
}


// creates new Dealer object, shuffles cards and passes results of each card to buildPlayingCard() function, then outputs full html for all 52 cards
function dealCards() {
    let dealer = new Dealer;
    dealer.shuffle();
    let cardOutputWithIcon = "";
    for(const i in dealer.cards) {
        switch (dealer.cards[i].suit) {
            case "hearts":
                cardOutputWithIcon += dealer.buildPlayingCard(dealer.cards[i], "mdi mdi-heart", "red", "red");
                break;
            case "diamonds":
                cardOutputWithIcon += dealer.buildPlayingCard(dealer.cards[i], "mdi mdi-cards-diamond", "red", "red");
                break;
            case "clubs":
                cardOutputWithIcon += dealer.buildPlayingCard(dealer.cards[i], "mdi mdi-cards-club", "black", "black");
                break;
            case "spades":
                cardOutputWithIcon += dealer.buildPlayingCard(dealer.cards[i], "mdi mdi-cards-spade", "black", "black");
                break;
        }
    }
    document.getElementById("player-card-container").innerHTML = cardOutputWithIcon;
}

