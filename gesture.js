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
        if (gesturePlayerTwo.name === 'rock' || gesturePlayerTwo.name === 'spock'){
            return 1;
        }
        else if (gesturePlayerTwo.name === 'scissors' || gesturePlayerTwo.name === 'lizard'){
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
        if (gesturePlayerTwo.name === 'paper' || gesturePlayerTwo.name === 'lizard'){
            return 1;
        }
        else if (gesturePlayerTwo.name === 'rock' || gesturePlayerTwo.name === 'spock'){
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
        if (gesturePlayerTwo.name === 'spock' || gesturePlayerTwo.name === 'paper'){
            return 1;
        }
        else if (gesturePlayerTwo.name === 'rock' || gesturePlayerTwo.name === 'scissors'){
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
        if (gesturePlayerTwo.name === 'scissors' || gesturePlayerTwo.name === 'rock'){
            return 1;
        }
        else if (gesturePlayerTwo.name === 'lizard' || gesturePlayerTwo.name === 'paper'){
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