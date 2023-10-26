"use strict";
// PROCEDURAL PROGRAMMING
// const baseSalary = 30000;
// const overtime = 10;
// function getWage(baseSalary: number, overtime: number) {
//   return baseSalary + overtime * 1.5;
// }
// console.log(getWage(baseSalary, overtime));
// // OBJECT-ORIENTED WAY
// const employee = {
//   baseSalary: 30000,
//   overtime: 10,
//   // Unlce Bob -> the best function is the function with no parameters
//   getWage: function (): number {
//     return this.baseSalary + this.overtime * 1.5;
//   },
// };
// console.log(employee.getWage());
// const car = {
//   speedLimit: 120,
//   suspension: "air",
//   color: "green",
//   getColorSuspensionAndLimit: function () {
//     return this.color + this.speedLimit + this.suspension;
//   },
// };
// interface Details {
//   getDetails: () => void;
// }
// Encapsulation
// class Person implements Details {
//   // Abstraction
//   private eyeColor: string;
//   private skinColor: string;
//   constructor(eyeColor: string, skinColor: string) {
//     this.eyeColor = eyeColor;
//     this.skinColor = skinColor;
//   }
//   public getDetails(): void {
//     console.log(
//       `Hello, my eyes are ${this.eyeColor} and skin is ${this.skinColor}`
//     );
//   }
// }
// class Computer implements Details {
//   private color: string;
//   constructor(color: string) {
//     this.color = color;
//   }
//   public getDetails(): void {
//     console.log(`Hello, this computer is  ${this.color} color!`);
//   }
// }
// const person = new Person("grey", "grey");
// person.getDetails();
// const comp = new Computer("red");
// comp.getDetails();
/** SOLID */
// // Single Responsibility
// class StudentDemo {
//   studentId: number;
//   firstName: string;
//   lastName: string;
//   constructor(studentId: number, firstName: string, lastName: string) {
//     this.studentId = studentId;
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//   save(): void {
//     // save student record to database
//   }
//   email(): void {
//     // to send email from the student
//   }
//   enrol(): void {
//     // to enrol student in a course
//   }
// }
// class EmailService {
//   // email functionalty
// }
// class Student {
//   // details for the student : id, fname, lname
// }
// class EnrollmentService {
//   // enrollment function
// }
// class StudentRepository {
//   // CRUD => Crate, Read, Update, Delete
//   // Repository classes -> responsible for the DB communication
// }
// Open-Closed
// class Car {
//   protected color: string;
//   constructor(color: string) {
//     this.color = color;
//   }
//   getColor() {
//     return this.color;
//   }
// }
// class BMW extends Car {
//   private serialNumber: string;
//   constructor(color: string, serialNumber: string) {
//     super(color);
//     this.serialNumber = serialNumber;
//   }
//   getSerialDetails() {
//     console.log(this.color + " - " + this.serialNumber);
//   }
// }
// const moietoBMW = new BMW("red", "H@J#H@J#H@JH#Jdsds");
// console.log(moietoBMW.getColor());
// moietoBMW.getSerialDetails();
// Interface Segregation
// interface Geo {
//   lat: string;
//   lng: string;
// }
// interface Address {
//   street: string;
//   suite: string;
//   city: string;
//   zipcode: string;
//   geo: Geo;
// }
// interface Company {
//   name: string;
//   catchPhrase: string;
//   bs: string;
// }
// interface PersonDetails {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
//   phone: string;
// }
// interface User {
//   details: PersonDetails;
//   address: Address;
//   website: string;
//   company: Company;
// }
// class Person implements PersonDetails {
//   id: number = 0;
//   name: string = "";
//   username: string = "";
//   email: string = "";
//   phone: string = "";
// }
// // Dependency Inversion Principle
// class Wallet {
//   balance: number;
//   constructor(balance: number) {
//     this.balance = balance;
//   }
// }
// class User {
//   wallet: Wallet;
//   firsName: string;
//   constructor(firsName: string, wallet: Wallet) {
//     this.firsName = firsName;
//     this.wallet = wallet;
//   }
//   getWalletBalance() {
//     return `${this.firsName} has ${this.wallet.balance} in his pocket!`;
//   }
// }
// const ivansWallet = new Wallet(4000);
// const ivanUser = new User("Ivan", ivansWallet);
// console.log(ivanUser.getWalletBalance());
// const peshoWallet = new Wallet(2000);
// const peshoUser = new User("Pesho", peshoWallet);
// console.log(peshoUser.getWalletBalance());
// // blueprint
// class Person {
//   // properties
//   firstName: string;
//   age: number;
//   static count: number = 0;
//   // Object instanciation -> object creation
//   constructor(firstName: string, age: number) {
//     this.firstName = firstName;
//     this.age = age;
//   }
//   // methods -> behaviour
//   static greetinIncrementor(): number {
//     Person.count++;
//     return Person.count;
//   }
//   greeting() {
//     console.log(
//       "Hello from " +
//         this.firstName +
//         "! Greeting counter " +
//         Person.greetinIncrementor()
//     );
//   }
// }
// // instances of a class
// const personMaria = new Person("Maria", 10);
// personMaria.greeting();
// const personIvan = new Person("ivan", 33);
// personIvan.greeting();
// personIvan.greeting();
// const personKircho = new Person("Kircho", 13);
// personKircho.greeting();
// personKircho.greeting();
// personKircho.greeting();
// GETTER AND SETTERS
// class Employee {
//   private _firstName: string;
//   constructor(firstName: string) {
//     this._firstName = firstName;
//   }
//   public get firstName(): string {
//     return this._firstName;
//   }
//   public set firstName(newFirstName: string) {
//     if (newFirstName.length < 4) {
//       throw new Error("First name is less than 4 characters!");
//     }
//     this._firstName = newFirstName;
//   }
// }
// const employeeIvan = new Employee("Ivan");
// console.log("firstName", employeeIvan.firstName);
// employeeIvan.firstName = "Pokemon";
// console.log("firstName", employeeIvan.firstName);
// ACCESS MODIFIERS
// class Person {
//   protected name: string;
//   protected age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   protected getDetails(): void {
//     console.log(`My name is ${this.name} and I am ${this.age} y/o!`);
//   }
//   protected modifyAge(): void {
//     this.age += 1;
//   }
// }
// const mitkoPerson = new Person("Mitko", 15);
// mitkoPerson.modifyAge();
// mitkoPerson.modifyAge();
// mitkoPerson.modifyAge();
// mitkoPerson.modifyAge();
// mitkoPerson.getDetails();
// // !-- Abstract classes are used only for inheritance/extension
// abstract class Person {
//   protected name: string;
//   protected age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   protected getDetails(): void {
//     console.log(`My name is ${this.name} and I am ${this.age} y/o!`);
//   }
//   protected modifyAge(): void {
//     this.age += 1;
//   }
// }
// class Employee extends Person {
//   constructor(name: string, age: number) {
//     super(name, age);
//   }
//   getEmployeeDetail() {
//     return this.getDetails();
//   }
// }
// const employee = new Employee("Pesho", 32);
// employee.getEmployeeDetail();
// DP - Singleton -> Anti-Patterns
class Singleton {
    constructor() { }
    static getInstance() {
        if (this.instance === null) {
            this.instance = new Singleton();
        }
        return this.instance;
    }
    someMethod() {
        console.log("This is singleton method!");
    }
}
Singleton.instance = null;
const instance1 = Singleton.getInstance();
instance1.someMethod();
const instance2 = Singleton.getInstance();
instance2.someMethod();
const areInstancesTheSame = instance1 === instance2;
console.log("areInstancesTheSame: ", areInstancesTheSame);
//# sourceMappingURL=app.js.map