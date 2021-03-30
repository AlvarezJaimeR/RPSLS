"use strict"
const Player = require('./player');

class Game {
    constructor(){

    }

    runGame(){ //"main"
        this.displayRules();
    }

    displayRules(){
        console.log("Welcome to Rock Paper Scissors Lizard Spock!");
    }
}

module.exports = Game;