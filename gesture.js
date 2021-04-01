"use strict"
class Gesture{
    constructor(name){
        this.name = name
    }
}

class Rock extends Gesture{
    constructor(name){
        super(name);
    }

    compare(gesturePlayerTwo){
        if (gesturePlayerTwo.name === 'scissors' || gesturePlayerTwo.name === 'lizard'){
            return 1;
        }
        else if (gesturePlayerTwo.name === 'paper' || gesturePlayerTwo.name === 'spock'){
            return -1;
        }
        else {
            console.log('This round was a tie!');
            return 0;
        }
    }
}

class Paper extends Gesture{
    constructor(name){
        super(name);
    }

    compare(gesturePlayerTwo){
        if (gesturePlayerTwo === 'rock' || gesturePlayerTwo === 'spock'){
            console.log(this.playerOne.name + ' wins this round!');
            return 1;
        }
        else if (gesturePlayerTwo === 'scissors' || gesturePlayerTwo === 'lizard'){
            console.log(this.playerTwo.name + ' beat ' + this.playerOne.name + ' this round!');
            return -1;
        }
        else {
            console.log('This round was a tie!');
            return 0;
        }
    }
}

class Scissors extends Gesture{
    constructor(name){
        super(name);
    }

    compare(gesturePlayerTwo){
        if (gesturePlayerTwo === 'paper' || gesturePlayerTwo === 'lizard'){
            console.log(this.playerOne.name + ' wins this round!');
            return 1;
        }
        else if (gesturePlayerTwo === 'rock' || gesturePlayerTwo === 'spock'){
            console.log(this.playerTwo.name + ' beat ' + this.playerOne.name + ' this round!');
            return -1;
        }
        else {
            console.log('This round was a tie!');
            return 0;
        }
    }
}

class Lizard extends Gesture{
    constructor(name){
        super(name);
    }

    compare(gesturePlayerTwo){
        if (gesturePlayerTwo === 'spock' || gesturePlayerTwo === 'paper'){
            console.log(this.playerOne.name + ' wins this round!');
            return 1;
        }
        else if (gesturePlayerTwo === 'rock' || gesturePlayerTwo === 'scissors'){
            console.log(this.playerTwo.name + ' beat ' + this.playerOne.name + ' this round!');
            return -1;
        }
        else {
            console.log('This round was a tie!');
            return 0;
        }
    }
}

class Spock extends Gesture{
    constructor(name){
        super(name);
    }

    compare(gesturePlayerTwo){
        if (gesturePlayerTwo === 'scissors' || gesturePlayerTwo === 'rock'){
            console.log(this.playerOne.name + ' wins this round!');
            return 1;
        }
        else if (gesturePlayerTwo === 'lizard' || gesturePlayerTwo === 'paper'){
            console.log(this.playerTwo.name + ' beat ' + this.playerOne.name + ' this round!');
            return -1;
        }
        else {
            console.log('This round was a tie!');
            return 0;
        }
    }
}

module.exports ={
    Rock: Rock,
    Paper: Paper,
    Scissors: Scissors,
    Lizard: Lizard,
    Spock: Spock
} 