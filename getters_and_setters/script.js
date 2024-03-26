'use strict';
//simple example 
const account = {
    owner: "Abhi",
    movements: [10, 20, 40, 70],

    get latest() {
        return this.movements.slice(-1).pop();
    },
    set latest(mov) {
        return this.movements.push(mov); //this pushes the value of mov to the movements array.
    },
};
console.log(account.latest);
account.latest = 100;
console.log(account.movements);

//  getters and setters in Classes 
class PersonCL {
    constructor(fullName, birthYear ) {
        this.fullName = fullName;
        this.birthYear = birthYear;
        console.log(`${this.firstName} Was born in  ${this.birthYear}`);
    }
    calcAge() {
        console.log(2024 - this.birthYear);
    }
    greet() {
        console.log(`Hey ! ${this.firstName} , How are you ?`);
    }
    get age() {
        return 2024 - this.birthYear;
    }
    // set a property that already exists
    set fullName(name){
        console.log(name);
        if(name.includes(' '))this._fullName = name;
        else alert(`${name} is not a full name!`);
    }

    get fullName(){
        return this._fullName;
    }
}

const Abhishek = new PersonCL("Abhishek Vashisth", 2004);
console.log(Abhishek);
// Abhishek.age = 34;

const Bhanu = new PersonCL("Bhanu" , 2003);
console.log(Bhanu);

// example practice of constructor making 
class Car {
    constructor(carName, carModel) {
        this.carName = carName;
        this.carModel = carModel;
    }
    check() {
        if (this.carModel < 2012) {
            console.log('Not Available right Now')
        }
        else if (this.carModel > 2012) {
            console.log('Available ! You can come tomorrow');
        }
        else if (this.carModel == 2012) {
            console.log('Car is Available but you have to pay a little extra to arrange spares for older model!');
        }
        else {
            console.log('come back later ');
        }
    }

}
const Swift = new Car('Swift', 2012);
console.log(Swift);
Swift.check();

// let hey = function(){
//     console.log('Hey there my name is Abhishek Vashisth 👏🏻');

// }

// hey();

Array.from(document.querySelectorAll('h1'));
//Array.from() is a static method in javascript 
//and we from() can only be used with the Array construtcor 
// only and not alone .