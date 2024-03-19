'use strict';
// Constructor Functions
const Person = function(firstName,birthYear){
this.firstName = firstName;
this.birthYear = birthYear;
}
const Abhishek = new Person('Abhishek' , 2004);
console.log(Abhishek);
//What exactly happens when we call a function
// using new operator like above :-
//1. New {} is created
//2. function is called , this={}
//3. {} is linked to prototype
//4. function automatically return {}. 