"use strict"
const Player = require('./player');
const Human = require('./human');
const AI = require('./ai');
const prompt = require('prompt-sync')();

class Game {
    constructor(){
        this.playerOne;
        this.playerTwo;

        this.gesture = [];

        this.gesture.push('rock');
        this.gesture.push('paper');
        this.gesture.push('scissors');
        this.gesture.push('lizard');
        this.gesture.push('spock');
    }

    runGame(){ //"main"
        this.displayRules();
        this.playerOne = new Human(this.userName());
        console.log(this.playerOne.name);
        this.pickOpponent();
        console.log(this.playerTwo);
        let playerOneGesture = this.playerOne.chooseGesture();
        console.log(this.playerOne.name + ' has picked ' + playerOneGesture + '!');
        let playerTwoGesture = this.playerTwo.chooseGesture();
        console.log(this.playerTwo.name + ' has picked ' + playerTwoGesture + '!');
    }

    userName(){
        console.log('What is your name?');
        let userName = prompt();
        let test = false;
        while(test === false){
            test = this.userValidation(userName, 'Please input a name');
            console.log(test);
            if (test === false){
                userName = prompt();
            }
        }return userName;
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
            test = this.userValidation(userOpponentChoice, 'Please choose between human or AI');
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
                this.playerTwo = new Human(prompt());
                console.log(this.playerTwo.name);
                break;
            case 'ai':
                console.log('You picked your opponent to be an AI. Good luck!');
                this.playerTwo = new AI('AI');
                console.log(this.playerTwo.name);
                break;
            default: {
                console.log('Pick human or Ai.');
                return this.pickOpponent();
            }
        }return userOpponentChoice;
    }

    //Check if the user input is all characters
    userValidation(userOppChoice, validationMessage){
        var letterCheck = /^[A-Za-z]+$/;
        if (userOppChoice==null || userOppChoice=="")
        {
            console.log(validationMessage);
            return false;
        }
        else if (!userOppChoice.match(letterCheck))
        {
            console.log("Choice must contain letters only!");
            console.log(validationMessage);
            return false;
        }
        else {
            return true;
        }
    }
}

module.exports = Game;