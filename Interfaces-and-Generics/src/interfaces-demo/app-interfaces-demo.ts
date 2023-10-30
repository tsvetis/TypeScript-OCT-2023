// Contract
interface UserDetails {
  firstName: "Tsveti" | "Gosho" | "Kaloyan";
  lastName: string;
}

interface Human {
  legsCount: number;
  skinColor: string;
}

interface PersonDetails extends UserDetails, Human {
  fullName: string;
}

// Can be implemented by a class
class Person implements PersonDetails {
  firstName: "Tsveti" | "Gosho" | "Kaloyan";
  lastName: string;
  legsCount: number;
  skinColor: string;
  fullName: string;

  constructor(
    firstName: "Tsveti" | "Gosho" | "Kaloyan",
    lastName: string,
    legsCount: number,
    skinColor: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.legsCount = legsCount;
    this.skinColor = skinColor;

    this.fullName = this.firstName + " " + this.lastName;
  }
}

const personGosho = new Person("Gosho", "Kirilov", 2, "zelena");

// can be used as a type of a variable
const user: UserDetails = {
  firstName: "Tsveti",
  lastName: "Petrov",
};

// can be used as a return type
// function getUsers(): UserDetails[] {
//   return [
//     {
//       firstName: "Pesho",
//       lastName: "Petrov",
//     },
//     {
//       firstName: "Ivan",
//       lastName: "Ivanov",
//     },
//     {
//       firstName: "Mitko",
//       lastName: "Georgiev",
//     },
//   ];
// }

// const users = getUsers();

interface GetNameFunction {
  (param1: number, param2: string): string;
}

const getName: GetNameFunction = (param1: number, param2: string) => {
  return "";
};
