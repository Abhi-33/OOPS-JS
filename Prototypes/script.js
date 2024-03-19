'use strict';
const Person = function(firstName,birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
    
}    
const Abhishek  = new Person("Abhishek" , 2004);
const Bhanu = new Person("Bhanu" , 2002);
console.log(Person.prototype);
//Prototypes
Person.prototype.calcAge = function(){
    console.log(2024 - this.birthYear);
}
Abhishek.calcAge();
Bhanu.calcAge();
console.log(Abhishek.__proto__);
console.log(Abhishek.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(Abhishek));

Person.prototype.species = "Homo Sapiens";
console.log(Abhishek , Bhanu);