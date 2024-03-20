'use strict';
 const Car = function(modelName , currentSpeed){
        this.modelName = modelName;
        this.currentSpeed = currentSpeed;
        console.log(`'${modelName}' is going at ${currentSpeed} km/h`);
 }
const Car1 =  new Car("BMW" , 120);
const Car2 = new Car("Scorpio" , 250);

 Car.prototype.accelerate = function () {
        this.currentSpeed+=10;    
    console.log(`${this.modelName} is going to ${this.currentSpeed } Km/h `);
}
Car1.accelerate();
Car2.accelerate();
Car.prototype.brake = function () {
    this.currentSpeed -=  5;
    console.log( `${this.modelName} is slowing to ${this.currentSpeed} Km/h `);
}
Car1.brake();
Car2.brake();
