class Person {
    constructor(name) {
      this._name = name;
    }
    get name() {
      return this._name;
    }
    greet(name) {
      return `Hello ${name}, my name is ${this._name}`;
    }
}