class Project {
  budget: number = 900;

  @withBudget(10)
  writeTest() {
    console.log("Test are important!");
  }

  @withBudget(500)
  fixBugInProduction() {
    console.log("Fixing bug in production is expensive!");
  }
}

const project = new Project();
project.writeTest();
project.fixBugInProduction();
project.fixBugInProduction();
project.writeTest();
project.writeTest();
project.writeTest();
console.log(project.budget);

type WithBudget = {
  budget: number;
};

function withBudget(actionBudget: number) {
  return function <T extends WithBudget>(
    target: Function,
    context: ClassMethodDecoratorContext<T>
  ) {
    return function (...args: any) {
      //                      cast the type
      const instance = this as T; // T -> our decorated class

      if (instance.budget > actionBudget) {
        instance.budget -= actionBudget;
        target.apply(instance, args); // call our method for instance with args
      } else {
        console.log(
          `Insufficient funds for ${context.name.toString()}. Required ${actionBudget}, availble ${
            instance.budget
          }!`
        );
      }
    };
  };
}
