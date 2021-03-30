"use strict"
const Player = require('./player');
const prompt = require('prompt-sync')();

class Game {
    constructor(){

    }

    runGame(){ //"main"
        this.displayRules();
        this.pickOpponent();
    }

    displayRules(){
        console.log("Welcome to Rock Paper Scissors Lizard Spock!");
        console.log('Best of three will decide the winner.');
        console.log('You may decide to vs another human or AI.');
    }

    pickOpponent(){
        console.log('Would you like to vs another Human or an AI?:');
        let userOpponentChoice = prompt().toLowerCase();
        let pass = this.userOpponentValidation(userOpponentChoice);
        console.log(pass);
    }

    userOpponentValidation(userOppChoice){
        var letterCheck = /^[A-Za-z]+$/;
        if (userOppChoice==null || userOppChoice=="")
        {
            console.log('Please input your choice of human or AI');
            return false;
        }
        else if (!userOppChoice.match(letterCheck))
        {
            console.log("Choice must contain letters only!");
            return false;
        }
        else {
        return true;
        }
    }
}

module.exports = Game;