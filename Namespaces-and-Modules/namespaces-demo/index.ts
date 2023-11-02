namespace PersonUtils {
  interface PersonDetails {
    name: string;
  }

  export class Person implements PersonDetails {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    getName() {
      return this.name;
    }
  }
}

class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

const p1 = new Person("Pesho1");
const p2 = new PersonUtils.Person("Pesho2");

/// <reference path="Animal.ts" />
namespace AnimalGroup {
  export class Dog extends Animal {
    constructor(furColor: string, numberOfLegs: number, type: string) {
      super(furColor, numberOfLegs, type);
    }

    getStuff() {
      const h = new HumanGroup.Human();
    }
  }

  export interface PersonTest {}

  const P = 1;
  const x = () => 1;
}

const dogPenny = new AnimalGroup.Dog("brown", 4, "Penny");

namespace LibraryUtil {
  export namespace ReadFiles {
    export class AsyncRead {}
  }

  export namespace WriteFiles {
    export class AsyncWrite {}
  }
}
