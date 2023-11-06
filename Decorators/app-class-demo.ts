@withEmploymentDateOnPrototype
@withEmployementDate
class Manager {
  task: string = "Simple task";
  project: string = "Simple project";

  constructor() {
    console.log("Manager class has initted!");
  }
}

const manager = new Manager();
console.log(manager);
console.log(manager.constructor.prototype);

function withEmploymentDateOnPrototype(
  value: Function,
  context: ClassDecoratorContext
) {
  value.prototype.employementDateOnPrototype = new Date().toISOString();
}

type Args = { new (...args: any[]): {} };
function withEmployementDate<T extends Args>(
  baseClass: T,
  context: ClassDecoratorContext
) {
  return class extends baseClass {
    employementDate = new Date().toISOString();

    constructor(...args: any[]) {
      super(...args);
      console.log("Adding employment date to " + baseClass.name);
    }
  };
}

function printDecoratorData(value: Function, context: ClassDecoratorContext) {
  console.log({ value });
  console.log({ context });

  context.addInitializer(() => {
    console.log("Class initialized: " + context.name);
  });
}

function seal(constructor: Function, context: ClassDecoratorContext) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}
