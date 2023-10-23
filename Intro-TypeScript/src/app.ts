let greetingsMessage: string = "Hello";
greetingsMessage = "Ok";
greetingsMessage = `Ok (Updated) ${123}`;
// greetingsMessage = 11;
// console.log("string", greetingsMessage);

let numberOfHouses: number = 4;
numberOfHouses = 10100010111;
numberOfHouses = 7e3;
numberOfHouses = 3.14;
// numberOfHouses = "Pesho 123";
// console.log("number", numberOfHouses);

let isDog: boolean = true;
isDog = false;
isDog = 5 > 2;
isDog = [1, 2, 3, 4].some((e) => e === 1);
// 1/0 are not mapped to booleans true/false
// isDog = { name: "Kircho", breed: "nemska ovcharka" };
// console.log("boolean", isDog);

let uniqueSymbol: Symbol = Symbol("myUniqueSymbol");
let anotherUniqueSymbol = Symbol("myUniqueSymbol");
const areEqual = uniqueSymbol === anotherUniqueSymbol;
// console.log("symbol - areEqual", areEqual);

let person: undefined;
// person = 123;
// console.log("undefinded", person);

let dogs: null = null;
// dogs = 123;
// console.log("null", dogs);

const arrOfNumbers: number[] = [1, 2, 3, 4];
// console.log("array of numbers", arrOfNumbers);
const arrOfRandomStrings: string[] = ["Pesho", "Dog", "Mice", "Card"];
// console.log("array of string", arrOfRandomStrings);
const arrOfBools: boolean[] = [true, false, true];
// console.log("array of boolean", arrOfBools);

type Person = {
  name: string;
  age: number;
};
const arrOfObj: Person[] = [
  { name: "Pesho2", age: 33 },
  { name: "Pesho1", age: 12 },
];
// console.log("array of objects", arrOfObj);

let numAndStrTuples: [number, string] = [18, "Pesho"];
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

enum DaysOfWorkWeek {
  Monday = 1200, //
  Tuesday = "Kuche", //
  Wednesday = 300, //
  Thursday = 4, //
  Friday = 5, //
}
// console.log("enum", DaysOfWorkWeek.Monday);
// console.log("enum", DaysOfWorkWeek.Tuesday);
// console.log("enum", DaysOfWorkWeek.Wednesday);

let a: any = 5;
a = "Poker";
a = { name: "Gosho" };
a = [{ name: "Gosho" }, { name: "Gosho2" }];
a = null;
// console.log("any", a);

let b: unknown = 5;
b = "Poker";
b = { name: "Gosho" };
b = [{ name: "Gosho" }, { name: "Gosho2" }];
b = null;
// console.log("unknown", b);

function greetings(name: string): void {
  console.log(`Hello, ${name}! This is 'void' example in TS!`);
}
// greetings("Pesho");

function printPersonDetail(name: string, age?: number): string | number {
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

let test: number | number[] = 1;
test = [1, 2, 3];
// console.log("union types", test);

// Aliases
type Dog = { name: string };
type Dog2 = { fullName: string };

const obj: Dog & Dog2 = { name: " Pesho", fullName: "Pesho Todorv" };
// console.log("intersection", obj);

let statusMsg: "success" | "error";
statusMsg = "success";
statusMsg = "error";
// console.log("literal msg", statusMsg);

type Age = number;

type Cat = {
  breed: string;
  weigth: number;
  name: string;
  age?: Age;
};

const catPesho: Cat = {
  breed: "ulichna",
  weigth: 12,
  name: "Pesho",
  age: 3,
};

// console.log("aliases", catPesho);

type Point = { x: number; y: number };

const point: Point = { x: 22, y: -12 };

const newPoint = {} as Point;
Object.keys(point).forEach((key) => {
  newPoint[key as keyof Point] = point[key as keyof Point] * 10;
});

// console.log("demo keyof ", newPoint);

// type TreeNode {
//     value: number;
//     left?: TreeNode;
//     right?: TreeNode
// }
// Recursive Types
