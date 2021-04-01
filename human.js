"use strict"
const Player = require('./player');
const prompt = require('prompt-sync')();

class Human extends Player{
    constructor (name){
        super(name); 
    }

    chooseGesture(){
        console.log(this.name + ' please pick a gesture: 1 - Rock, 2 - Paper, 3 - Scissors, 4 - Lizard, or 5 - Spock');
        let check = false;
        let gesturePick = parseInt(prompt()); 
        while (check == false){
            check = this.isInt(gesturePick);
            if (check == true && gesturePick <= 5){
                check = true;
            }
            if (check == false || gesturePick > 5 || gesturePick == 0){
                console.log(this.name + ' please pick a gesture: 1 - Rock, 2 - Paper, 3 - Scissors, 4 - Lizard, or 5 - Spock');
                gesturePick = prompt();
                check = false;
            }
        }
        let humanGesture = this.gestures[gesturePick-1];
        //console.log(humanGesture.name);
        return humanGesture;
    }

    //Check if the user input is all integers
    isInt(userNumberChoice){
        let numberCheck = /^-?[0-9]+$/;
        let intCheck = numberCheck.test(userNumberChoice);
        if (intCheck == true){
            return true;
        }
        else{
            console.log('Please enter a number.');
            return false;
        }
    }
}

module.exports = Human;