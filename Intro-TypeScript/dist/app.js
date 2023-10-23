"use strict";
let greetingsMessage = "Hello";
greetingsMessage = "Ok";
greetingsMessage = `Ok (Updated) ${123}`;
// greetingsMessage = 11;
// console.log("string", greetingsMessage);
let numberOfHouses = 4;
numberOfHouses = 10100010111;
numberOfHouses = 7e3;
numberOfHouses = 3.14;
// numberOfHouses = "Pesho 123";
// console.log("number", numberOfHouses);
let isDog = true;
isDog = false;
isDog = 5 > 2;
isDog = [1, 2, 3, 4].some((e) => e === 1);
// 1/0 are not mapped to booleans true/false
// isDog = { name: "Kircho", breed: "nemska ovcharka" };
// console.log("boolean", isDog);
let uniqueSymbol = Symbol("myUniqueSymbol");
let anotherUniqueSymbol = Symbol("myUniqueSymbol");
const areEqual = uniqueSymbol === anotherUniqueSymbol;
// console.log("symbol - areEqual", areEqual);
let person;
// person = 123;
// console.log("undefinded", person);
let dogs = null;
// dogs = 123;
// console.log("null", dogs);
const arrOfNumbers = [1, 2, 3, 4];
// console.log("array of numbers", arrOfNumbers);
const arrOfRandomStrings = ["Pesho", "Dog", "Mice", "Card"];
// console.log("array of string", arrOfRandomStrings);
const arrOfBools = [true, false, true];
const arrOfObj = [
    { name: "Pesho2", age: 33 },
    { name: "Pesho1", age: 12 },
];
// console.log("array of objects", arrOfObj);
let numAndStrTuples = [18, "Pesho"];
//                key value
numAndStrTuples = [1, "Mitko"];
// console.log("number and string tuples ", numAndStrTuples);
// enum DaysOfWorkWeek {
//   Monday, // 0
//   Tuesday, // 1
//   Wednesday, // 2
//   Thursday, // 3
//   Friday, // 4
// }
// console.log("enum", DaysOfWorkWeek.Wednesday);
var DaysOfWorkWeek;
(function (DaysOfWorkWeek) {
    DaysOfWorkWeek[DaysOfWorkWeek["Monday"] = 1200] = "Monday";
    DaysOfWorkWeek["Tuesday"] = "Kuche";
    DaysOfWorkWeek[DaysOfWorkWeek["Wednesday"] = 300] = "Wednesday";
    DaysOfWorkWeek[DaysOfWorkWeek["Thursday"] = 4] = "Thursday";
    DaysOfWorkWeek[DaysOfWorkWeek["Friday"] = 5] = "Friday";
})(DaysOfWorkWeek || (DaysOfWorkWeek = {}));
// console.log("enum", DaysOfWorkWeek.Monday);
// console.log("enum", DaysOfWorkWeek.Tuesday);
// console.log("enum", DaysOfWorkWeek.Wednesday);
let a = 5;
a = "Poker";
a = { name: "Gosho" };
a = [{ name: "Gosho" }, { name: "Gosho2" }];
a = null;
// console.log("any", a);
let b = 5;
b = "Poker";
b = { name: "Gosho" };
b = [{ name: "Gosho" }, { name: "Gosho2" }];
b = null;
// console.log("unknown", b);
function greetings(name) {
    console.log(`Hello, ${name}! This is 'void' example in TS!`);
}
// greetings("Pesho");
function printPersonDetail(name, age) {
    //   if (typeof age !== "undefined") {
    return `Hello ${name}! You are ${age} y/o.`;
    //   }
    //   return "Hello " + name;
}
// console.log(printPersonDetail("Mitko"));
// console.log(printPersonDetail("Pesho", 18));
// let personsArray: string[] | null = null;
// function fetchPersons() {
//   personsArray = ["Mitko", "Pesho", "Kiro"];
// }
// console.log("personArray before", personsArray);
// fetchPersons();
// console.log("personArray after", personsArray);
let test = 1;
test = [1, 2, 3];
const obj = { name: " Pesho", fullName: "Pesho Todorv" };
// console.log("intersection", obj);
let statusMsg;
statusMsg = "success";
statusMsg = "error";
const catPesho = {
    breed: "ulichna",
    weigth: 12,
    name: "Pesho",
    age: 3,
};
const point = { x: 22, y: -12 };
const newPoint = {};
Object.keys(point).forEach((key) => {
    newPoint[key] = point[key] * 10;
});
// console.log("demo keyof ", newPoint);
// type TreeNode {
//     value: number;
//     left?: TreeNode;
//     right?: TreeNode
// }
// Recursive Types
//# sourceMappingURL=app.js.map