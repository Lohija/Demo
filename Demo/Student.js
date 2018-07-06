"use strict";
exports.__esModule = true;
var Student = /** @class */ (function () {
    function Student(user) {
        this.fname = user.firstName;
        this.lname = user.lastName;
    }
    Student.prototype.getfull = function () {
        return this.fname + " " + this.lname;
    };
    return Student;
}());
exports.Student = Student;
var Secondclass = /** @class */ (function () {
    function Secondclass() {
    }
    return Secondclass;
}());
exports.Secondclass = Secondclass;
