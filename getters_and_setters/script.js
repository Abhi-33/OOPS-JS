 'use strict';
 //simple example 
 const account = {
    owner : "Abhi" , 
    movements: [10,20,40,70],

    get latest(){
        return this.movements.slice(-1).pop();
    },
    set latest(mov){
        return this.movements.push(mov); //this pushes the value of mov to the movements array.
    },
 };
 console.log(account.latest);
 account.latest = 100;
 console.log(account.movements);

//  getters and setters in Classes 
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
    get age(){
        return 2024 - this.birthYear;
    }
    set age(value){
         this.birthYear = value;
    }
}

const Abhishek = new PersonCL("Abhishek" , 2004);
console.log(Abhishek.age);
Abhishek.age = 34;
console.log(Abhishek.age);