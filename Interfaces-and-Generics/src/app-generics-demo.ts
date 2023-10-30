// console.log(123);

// const getTestGenerics = <T>(paramId: T): T => {
//   return paramId;
// };

// const id1 = getTestGenerics<number>(1);
// const id2 = getTestGenerics<string>("ZXacsadsa123");
// const ids = getTestGenerics<number[]>([1, 2, 3]);

// type UserData<T> = {
//   name: string;
//   age: number;
//   address: string;
//   id: T;
// };

// const x = getTestGenerics<UserData<number>>({
//   name: "Mitko",
//   age: 12,
//   address: "Sofia, Bulgaria",
//   id: 1,
// });

// const y = getTestGenerics<UserData<string>>({
//   name: "Mitko",
//   age: 12,
//   address: "Sofia, Bulgaria",
//   id: "xyz123",
// });

// const generateAndAttachId = <T>(obj: T) => {
//   const objId = Math.random();
//   return { ...obj, id: objId };
// };

// type PersonObjectDetails = {
//   name: string;
//   age: number;
//   city: string;
// };

// const person: PersonObjectDetails = { name: "Mitko", age: 21, city: "Lovech" };
// const personWithId = generateAndAttachId<PersonObjectDetails>(person);
// console.log(personWithId);

// type AnimalObjectDetails = {
//   legsCount: number;
//   furColor: string;
//   name: string;
// };

// const animal: AnimalObjectDetails = {
//   legsCount: 4,
//   furColor: "blonde",
//   name: "fluffy",
// };
// const animalWithId = generateAndAttachId(animal);
// console.log(animalWithId);

// interface DocumentObject<T> {
//   id: number;
//   name: string;
//   data: T;
// }

// const doc1: DocumentObject<{ name: string }[]> = {
//   id: 1,
//   name: "flowers",
//   data: [{ name: "flower1" }, { name: "flower2" }],
// };

// const doc2: DocumentObject<{ name: string; age: number; address: string }> = {
//   id: 2,
//   name: "person",
//   data: { name: "Pesho", age: 12, address: "Bulgaira" },
// };

// const doc3: DocumentObject<number> = {
//   id: 3,
//   name: "testr",
//   data: 1,
// };

// function echo<T>(arg: T): T {
//   console.log(typeof arg);

//   return arg;
// }

// console.log("-----------------");
// echo(1);
// echo("string");
// echo(true);
// echo([1, 2, 3]);

// const takeLast = <T>(array: T[]): T => {
//   return array[array.length - 1];
// };

// console.log(takeLast([1, 2, 3, 4]));
// console.log(takeLast(["a", "b", "c", "d"]));
// console.log(takeLast([true, false, true]));
// console.log(takeLast([{ a: 1 }, { a: 2 }, { a: 3 }]));

// const obj = { a: 1, b: 2, c: 3 };
// console.log(Object.entries(obj));

// const makeTuples = <T, Z>(a: T, b: Z): (T | Z)[] => {
//   return [a, b];
// };

// console.log(makeTuples("a", true));
// console.log(makeTuples(1, "true"));

// type GenericConstructor<T, V> = {
//   (arg1: T, arg2: V): [T, V];
// };

// const generateFn: GenericConstructor<string, number> = <T, V>(
//   arg1: T,
//   arg2: V
// ) => {
//   return [arg1, arg2];
// };

// const output = generateFn("Hello", 55);
// console.log(output);

class Collection<T> {
  data: T[];

  constructor(...elements: T[]) {
    this.data = elements;
  }

  addElement(el: T) {
    this.data.push(el);
  }

  removeElemet(el: T) {
    const index = this.data.indexOf(el);
    if (index > -1) {
      this.data.splice(index, 1);
    }
  }
}

// const numberCollection = new Collection(1, 2, 3, 4);
// console.log(numberCollection.data);
// numberCollection.addElement(99);
// numberCollection.removeElemet(2);
// console.log(numberCollection.data);

// const stringCollection = new Collection("a", "b", "c", "d");
// console.log(stringCollection.data);
// stringCollection.addElement("Pokemon");
// stringCollection.removeElemet("c");
// console.log(stringCollection.data);

// class Test<F, S> {
//   first: F;
//   second: S;

//   constructor(first: F, second: S) {
//     this.first = first;
//     this.second = second;
//   }

//   getConcatinatedArguments() {
//     return `My first param: ${this.first} and my second param: ${this.second}`;
//   }
// }

// const test1 = new Test(1, "Gosho");
// console.log(test1.getConcatinatedArguments());
// const test2 = new Test("Zebra", { success: true });
// console.log(test2.getConcatinatedArguments());

// const person = {
//   age: 33,
//   addres: "Sofia, Bulgaria",
//   firstName: "Pesho",
//   lastName: "Ivanov",
// };

// interface FullName {
//   firstName: string;
//   lastName: string;
// }

// function fullName<T extends FullName>(obj: T) {
//   return `The full name of the user is ${obj.firstName} ${obj.lastName}!`;
// }

// console.log(fullName(person));

// class BankAccount {
//   private static id: number;
//   private balance: number = 0;
//   private interestRate: number = 0.02;

//   constructor() {
//     BankAccount.id += 1;
//   }

//   public setInterestRate(interestRate: number) {
//     this.interestRate = interestRate;
//   }

//   public getInterest(id: number, years: number) {
//     return this.interestRate;
//   }

//   public deposit(id: number, amount: number) {
//     this.balance = amount;
//   }
// }

//               to have for sure -> {age: number}
const getSmth = <T extends { username: string; password: string }>(obj: T) => {
  return obj;
};

getSmth({ username: "123", password: "123", a: 1, b: 2, c: 3 });
