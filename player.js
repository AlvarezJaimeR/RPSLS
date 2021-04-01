"use strict"
const {Rock, Paper, Scissors, Lizard, Spock} = require('./gesture');

class Player {
    constructor(name){
        this.score = 0;
        this.name = name;
        this.gestures = [new Rock("rock"), new Paper("paper"), new Scissors('scissors'), new Lizard('lizard'), new Spock('spock')];
    }
}

module.exports = Player;