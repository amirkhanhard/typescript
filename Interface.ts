// What is an Interface?
// An interface defines a contract (shape) for objects, functions, or classes.
// It tells what properties and methods must exist, but not how they are implemented.


// 1. Interface with Object
interface User {
  id: number;
  name: string;
  isAdmin?: boolean; // optional
}

const u1: User = { id: 1, name: "Alice" };
const u2: User = { id: 2, name: "Bob", isAdmin: true };

console.log(u1);
console.log(u2);

// 2. Interface with Function
// You can define a function type inside an interface.

interface MathOperation {
  (x: number, y: number): number;  // function signature
}

const add: MathOperation = (a, b) => a + b;
const multiply: MathOperation = (a, b) => a * b;

console.log(add(5, 3));      // 8
console.log(multiply(5, 3)); // 15


// 3. Interface with Class
// A class can implement an interface, meaning it must define all properties/methods.

interface Vehicle {
  brand: string;
  drive(): void;
}

class Car implements Vehicle {
  brand: string; // should be string only not 'number' or 'string | number'

  constructor(brand: string) {
    this.brand = brand;
  }

  drive(): void {
    console.log(`${this.brand} is driving...`);
  }
}

const car1 = new Car("Tesla");
car1.drive();  // Tesla is driving...


// 4. Interface Extending Another Interface
// Interfaces can extend each other.

interface Animal {
  name: string;
  sound(): void;
}

interface Dog extends Animal {
  breed: string;
}

const myDog: Dog = {
  name: "Buddy",
  breed: "Golden Retriever",
  sound: () => console.log("bark!"),
};

myDog.sound();  // bark!


// 5. Interface with Class Inheritance
// Class + Interface together:

interface Shape {
  area(): number;
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}

  area(): number {
    return this.width * this.height;
  }
}

const rect = new Rectangle(10, 5);
console.log(rect.area());  // 50


