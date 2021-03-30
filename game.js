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
        let test = false;
        while (test === false){
            test = this.userOpponentValidation(userOpponentChoice);
            console.log(test);
            if (test === false){
                userOpponentChoice = prompt().toLowerCase();
            }
            else{
                break;
            }
        }
        switch (userOpponentChoice){
            case 'human':
                console.log('You picked your opponent to be another human. Please enter their name.');
                let playerTwoName = prompt();
                this.playerTwo = new Player(playerTwoName);
                console.log(playerTwo.name);
                break;
            case 'ai':
                console.log('You picked your opponent to be an AI. Good luck!');
                break;
            default: {
                console.log('Pick human or Ai.');
                return this.pickOpponent();
            }
        }return userOpponentChoice;
    }

    //Check if the user input is all characters
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
            console.log('Please choose between human or AI');
            return false;
        }
        else {
            return true;
        }
    }
}

module.exports = Game;