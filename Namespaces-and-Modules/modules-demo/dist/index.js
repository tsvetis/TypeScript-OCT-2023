"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const person_util_1 = require("./utils/person-util");
const person_util_2 = __importDefault(require("./utils/person-util"));
const person1 = { age: 22, name: "mitko" };
const person2 = { name: "mitko2" };
const personOneCapitalized = (0, person_util_1.nameCapitalizer)(person1);
console.log(person1);
console.log(personOneCapitalized);
const personTwoCapitalized = (0, person_util_1.nameCapitalizer)(person2);
console.log(person2);
console.log(personTwoCapitalized);
console.log((0, person_util_2.default)());
