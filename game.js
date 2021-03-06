"use strict"
const Human = require('./human');
const AI = require('./ai');
const prompt = require('prompt-sync')();

class Game {
    constructor(){
        this.playerOne;
        this.playerTwo;
    }

    runGame(){ //"main"
        this.displayRules();
        this.playerOne = new Human(this.userName());
        this.pickOpponent();
        let round = 1;

        while (this.playerOne.score < 3 && this.playerTwo.score < 3){
        let playerOneGesture = this.playerOne.chooseGesture();
        console.log(this.playerOne.name + ' has picked ' + playerOneGesture.name + '!');
        let playerTwoGesture = this.playerTwo.chooseGesture();
        console.log(this.playerTwo.name + ' has picked ' + playerTwoGesture.name + '!');
        let result = this.gestureRules(playerOneGesture, playerTwoGesture);
        this.pointToTheWinner(result);
        console.log('After round ' + round + ' ' + this.playerOne.name + "'s current score:" + this.playerOne.score 
                        + ' & ' + this.playerTwo.name + "'s current score:" + this.playerTwo.score);
        round ++;
        }

        this.displayGameWinner();
    }

    userName(){
        console.log('What is your name?');
        let userName = prompt();
        let test = false;
        while(test === false){
            test = this.userValidation(userName, 'Please input a name');
            if (test === false){
                userName = prompt();
            }
        }return userName;
    }

    displayRules(){
        console.log("Welcome to Rock Paper Scissors Lizard Spock!");
        console.log('Win three rounds to win the game!');
        console.log('You may decide to vs another human or an AI.');
    }

    pickOpponent(){
        console.log('Would you like to vs another Human or an AI?:');
        let userOpponentChoice = prompt().toLowerCase();
        let test = false;
        while (test === false){
            test = this.userValidation(userOpponentChoice, 'Please choose between human or AI');
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
                break;
            case 'ai':
                console.log('You picked your opponent to be an AI. Good luck!');
                this.playerTwo = new AI('AI');
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

    gestureRules(gesturePlayerOne, gesturePlayerTwo){
        let result = gesturePlayerOne.compare(gesturePlayerTwo);
        return result;
    }

    pointToTheWinner(result){
        if(result == 1){
            console.log(this.playerOne.name + ' wins this round!');
            this.playerOne.score ++;
        }
        else if (result == -1){
            console.log(this.playerTwo.name + ' beat ' + this.playerOne.name + ' this round!');
            this.playerTwo.score ++;
        }
    }

    displayGameWinner(){
        if (this.playerOne.score > this.playerTwo.score){
            console.log(this.playerOne.name + ' is the winner of this game!');
        }
        else {
            console.log(this.playerTwo.name + ' wins this game!');
        }
    }
}

module.exports = Game;