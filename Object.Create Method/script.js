'use strict';
const PersonProto=  {
calcAge(){
    console.log(2024-this.birthYear) ;    
},

init(firstName , birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
}
}
const steven = Object.create(PersonProto);
console.log(steven)
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__);

const Abhishek = Object.create(PersonProto);
console.log(Abhishek);
Abhishek.init('Abhishek Vashisth' , 2004);

const Bhanu = Object.create(PersonProto);
console.log(Bhanu);
Bhanu.init('Bhanu Vashisth' , 2002);