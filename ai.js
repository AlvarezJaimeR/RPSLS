"use strict"
const Player = require('./player');

class AI extends Player{
    constructor(name){
    super(name);
    }

    chooseGesture(){
        return this.gestures[Math.floor(Math.random()*this.gestures.length)];
    }
}

module.exports.AI = AI;