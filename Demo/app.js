"use strict";
//1. Template sting features
//   To include variables 
//var f1name ="Foo";
//console.log(`Hello ${f1name}`);
exports.__esModule = true;
// 2. Block scoping 
//   use let to restrict the scope of the variables in the block
//   If we use var, even if the variable is used before defining, 
//     it will show as undefined at while run time 
//   If we use let instead of var, it will show it as error
// function demo(arr){
//     if(arr.length >2 )
//     {
//          let load = "Loading" 
//          console.log(load);
//      }
//     else 
//     { let flash = "Flashing"  }
// }
//demo(["one","two","three"])
//3. Destructing objects & arrays
// let myObject = {
//     drawCircle : function(i) { console.log(i*i) },
//     printtext : function(text) { console.log(text)}
// }
//myObject.drawCircle(3);  // Traditional way of calling
// let {drawCircle,printtext} = myObject; // 3.1New way of calling
// printtext('Hi')
// for(let k in myObject)
// {
//     //console.log(myObject[k]); not working
// }
//3.2
// let arr = ["one","two","three"];
// let[arr1,arr3] = arr;
// console.log(arr3);
// //3.3
// for(let item in arr)
// {
//    // console.log(item);
// }
//4.Rest and Spread operators  (like params[] in C#)
// used when the number of parameters are not known
// rest should always be the last parameter
// Rest
// function sample(firstparam,...params)
// {
//     console.log(params[0])
// }
// sample(2,"too")
// let ar1 = [11,12,13]
// let ar2 = [9,10,...arr,14,15] // Spread operator
//5. Arrow funtions -> to create lambda expression
// var user ={
//     firstname : "L",
//     lastname : "S",
//     getfullname : function(){
//         return () => this.firstname + " " + this.lastname;
//     }   
// }
// console.log(user.getfullname());
// Tradtional way
// let numbers = [1,2,3];
// var nn = numbers.map(function(q){
//     return q*q;
// })
// Arrow functions
//var nnn = numbers.map(x => x*x);
//console.log(nnn);
//6. Classes
//there is no constructor overloading
//npm install -g typescript 
//tsc app.ts // compile
//node app.js // run
// export class Student{
//     private fname : string;
//     private lname : string;
//     constructor(firname :string,lasname:string){
//          this.fname = firname;
//          this.lname = lasname
//      }
//      getfull() : string {
//          return this.fname + " " + this.lname;
//      }      
//  }
var Student_1 = require("./Student");
var newPerson = {
    firstName: "Hello", lastName: "World", age: 40
};
var obj1 = new Student_1.Student(newPerson);
console.log(obj1.getfull());
//console.log("Hi");
