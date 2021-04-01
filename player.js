"use strict"
const {Rock, Paper, Scissors, Lizard, Spock} = require('./gesture');

class Player {
    constructor(name){
        this.score = 0;
        this.name = name;
        this.gestures = [Rock("rock"), Paper("paper"), Scissors('scissors'), Lizard('lizard'), Spock('spock')];
    }
}

module.exports = Player;