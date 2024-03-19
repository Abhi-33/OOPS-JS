'use strict';
// Constructor Functions
const Person = function(firstName,birthYear){
this.firstName = firstName;
this.birthYear = birthYear;

// never do this - Never create an method inside a 
// constructor function this is a bad practice
// but instead to solve this problem you can use prototypes
// and protypal inheritance
// this.calcAge = function() {
    // console.log(2024 - this.birthYear);
// }
}
const Abhishek = new Person('Abhishek' , 2004);
console.log(Abhishek);
//What exactly happens when we call a function
// using new operator like above :-
//1. New {} is created
//2. function is called , this={}
//3. {} is linked to prototype
//4. function automatically return {}. 
const bhanu = new Person("Bhanu" , 2002);
const kanika = new Person("Kanika" , 2001);
console.log(bhanu , kanika);
console.log(bhanu instanceof Person);
//"instanceof" - An operator to check whether a variable is an instance of a 
// constructor function(class) or not 
