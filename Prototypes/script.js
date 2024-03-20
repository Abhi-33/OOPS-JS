'use strict';
const Person = function(firstName,birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
    
}    
const Abhishek  = new Person("Abhishek" , 2004);
const Bhanu = new Person("Bhanu" , 2002);
// console.log(Person.prototype);
//Prototypes
Person.prototype.calcAge = function(){
    // console.log(2024 - this.birthYear);
}
Abhishek.calcAge();
Bhanu.calcAge();
// console.log(Abhishek.__proto__);
// console.log(Abhishek.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(Abhishek));

Person.prototype.species = "Homo Sapiens";
// console.log(Abhishek , Bhanu);

console.log(Abhishek.__proto__);
//Object.prototype is top of prototype chain
console.log(Abhishek.__proto__.__proto__);
console.log(Abhishek.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [1,2,3,5 ,5,3,6];
console.log(arr.__proto__);

//create a new method in the array prototype 
Array.prototype.unique = function () {
    return [...new Set(this)];
}
console.log(arr.unique());
let Team = ['Abhi' , 'Abhi' , 'Bhanu' , 'Kanika' , 'Kanika'];
console.log(Team.unique()); 