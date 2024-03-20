'use strict';
// class expression 

// class declaration 
class PersonCL {
    constructor(firstName , birthYear){
            this.firstName = firstName;
            this.birthYear = birthYear;
            console.log(`${this.firstName} Was born in  ${this.birthYear}`);
    }
    calcAge(){
        console.log( 2024 - this.birthYear );
    }
    greet(){
        console.log(`Hey ! ${this.firstName} , How are you ?`);
    }
}

const Abhishek = new PersonCL("Abhishek" , 2004);
Abhishek.calcAge();
console.log(Abhishek.__proto__ === PersonCL.prototype);
Abhishek.greet();
// PersonCL.prototype.greet = function(){
//     console.log(`Hey ${this.firstName}`);
// }

// Abhishek.greet();

// Important things about classes 
// 1 . Classes are not hoisted.
// 2 . Classes are first-class citizens . 
// 3 . Classes are executed in strict mode .