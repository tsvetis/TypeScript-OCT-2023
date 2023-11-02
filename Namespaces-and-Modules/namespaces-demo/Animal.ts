namespace AnimalGroup {
  export class Animal {
    furColor: string;
    type: string;

    constructor(furColor: string, numberOfLegs: number, type: string) {
      this.furColor = furColor;
      this.type = type;
    }

    getDetails() {
      return `This animal is of type ${this.type} and it has fur in a color of ${this.furColor}`;
    }
  }
}

namespace HumanGroup {
  export class Human {
    constructor() {}

    greetings() {
      return `Hi I am a human`;
    }
  }
}
