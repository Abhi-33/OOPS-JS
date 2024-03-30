'use strict';
// re-create challenge 1 but 
// using ES6 Classes.


class Car {
    constructor( modelName ,currentSpeed ){
        this.modelName = modelName;
        this.currentSpeed = currentSpeed;
    }
    accelerate(){
        this.currentSpeed+=10;
       console.log(`${this.modelName} is going to ${this.currentSpeed} Km/h`);
    }
    brake(){
        this.currentSpeed -= 5;
        console.log(`${this.modelName} is slowing to ${this.currentSpeed} Km/h`);
    }
    get speedUS(){
        return this.currentSpeed / 1.6 + 'mi/h';
    }
    set speedUS(speed){
     this.currentSpeed  = currentSpeed * 1.60934 ;
      return this.currentSpeed * 0.621371 + 'mi/h' ;
    }

};

const Swift = new Car('Dzire' , 400);
Swift.accelerate();
Swift.brake();
Car.speedUS = 700 ;
console.log(Car.speedUS);
Swift.accelerate();
Swift.brake();