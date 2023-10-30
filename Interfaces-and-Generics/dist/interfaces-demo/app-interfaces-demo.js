"use strict";
// Can be implemented by a class
class Person {
    constructor(firstName, lastName, legsCount, skinColor) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.legsCount = legsCount;
        this.skinColor = skinColor;
        this.fullName = this.firstName + " " + this.lastName;
    }
}
const personGosho = new Person("Gosho", "Kirilov", 2, "zelena");
// can be used as a type of a variable
const user = {
    firstName: "Tsveti",
    lastName: "Petrov",
};
const getName = (param1, param2) => {
    return "";
};
