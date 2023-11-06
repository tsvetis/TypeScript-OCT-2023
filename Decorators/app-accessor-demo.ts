class Person {
  @watchChange
  // Auto-accessor, unlike regular fields, define getters and setter on the class prototype
  accessor project: string = "Simple Project";
}

const person = new Person();
console.log(person.project);
person.project = "More complex project!";

type Accessor<T, V> = {
  get: (this: T) => V;
  set: (this: T, value: V) => void;
};

function watchChange<T, V>(
  accessor: Accessor<T, V>,
  context: ClassAccessorDecoratorContext
) {
  return {
    get: function (this: T) {
      return accessor.get.call(this);
    },
    set: function (this: T, value: V) {
      console.log(`Set "${context.name.toString()}" to "${value}"`);
      accessor.set.call(this, value);
    },
  };
}
