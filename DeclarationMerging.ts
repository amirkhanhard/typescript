// What is Declaration Merging?
// In TypeScript, if you declare the same interface (or namespace) multiple times, the compiler will merge them into a single definition.
// This allows you to extend types without reopening the original definition (very useful for libraries like Express, React, etc.).


// When is it Useful?
// Extending third-party library types without modifying them.
// Adding extra properties to existing interfaces.
// Overloading function signatures.
// Combining namespaces and classes for cleaner APIs.


// 1. Interface Declaration Merging


interface User {
  id: number;
  name: string;
}

// Declare the same interface again
interface User {
  email: string;
  isAdmin?: boolean;
}

const u1: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  isAdmin: true,
};
console.log(u1);

// 2. Function Overloading via Declaration Merging
// You can merge function signatures:

interface AddFn {
  (a: number, b: number): number;
}

interface AddFn {
  (a: string, b: string): string;
}

const add: AddFn = (a: any, b: any) => a + b;

console.log(add(5, 3));        // 8
console.log(add("Hello ", "TS")); // Hello TS


// 3. Namespace Declaration Merging
// Namespaces can merge with themselves:

namespace MyNamespace {
  export const version = "1.0";
}

namespace MyNamespace {
  export function greet(name: string) {
    return `Hello, ${name}!`;
  }
}

console.log(MyNamespace.version);  // 1.0
console.log(MyNamespace.greet("TS")); // Hello, TS!


// 4. Class + Interface Merging
// A class can merge with an interface of the same name:

class Person {
  constructor(public name: string) {}
}

// Merge with interface
interface Person {
  age: number;
}

const p: Person = { name: "Alice", age: 25 };
console.log(p);

