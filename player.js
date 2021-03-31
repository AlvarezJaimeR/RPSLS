"use strict"
class Player {
    constructor(name){
        this.score = 0;
        this.name = name;
        this.gestures = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    }
}

module.exports = Player;