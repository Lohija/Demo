import {person} from './person';
export class Student{
    private fname : string;
    private lname : string;
    constructor(user :person){
         this.fname = user.firstName;
         this.lname = user.lastName;
     }
     getfull() : string {
         return this.fname + " " + this.lname;
        
     }      
 }

 export class Secondclass {
     
 }