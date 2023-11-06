type Task = {
  name: string;
  level: "low" | "medium" | "complicated";
};

class Employee {
  @withTask({ name: "Task1 ", level: "complicated" })
  tasks: Task[] = [];

  @withComplicatedTask()
  extraTasks: Task[] = [];
}

const employee = new Employee();
console.log(employee);

function withTask(task: Task) {
  return function <T, V extends Task[]>(
    target: undefined,
    context: ClassFieldDecoratorContext<T, V>
  ) {
    return function (args: V) {
      args.push(task);
      return args;
    };
  };
}

function withComplicatedTask() {
  return withTask({ name: "Some Other Task", level: "complicated" });
}
