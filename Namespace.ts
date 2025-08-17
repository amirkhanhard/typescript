// What is a Namespace?
// A namespace in TypeScript is a way to organize code into logical groups and prevent naming conflicts.
// It’s similar to modules but mainly used in older TypeScript projects (before ES6 modules were widely adopted).
// Think of it as a container for variables, functions, interfaces, and classes.

// 1. Basic Namespace Example
namespace MathUtils {
  export const PI = 3.14;

  export function add(a: number, b: number): number {
    return a + b;
  }

  export function areaOfCircle(radius: number): number {
    return PI * radius * radius;
  }
}

// Access with namespace name
console.log(MathUtils.add(10, 5));       // 15
console.log(MathUtils.areaOfCircle(5));  // 78.5


// We must use export inside a namespace so that members are visible outside.
// 2. Nested Namespaces

namespace Company {
  export namespace HR {
    export function hire(name: string) {
      return `${name} has been hired!`;
    }
  }

  export namespace IT {
    export function assignTask(task: string) {
      return `Task assigned: ${task}`;
    }
  }
}

console.log(Company.HR.hire("Alice"));     // Alice has been hired!
console.log(Company.IT.assignTask("Fix bugs")); // Task assigned: Fix bugs

// 3. Namespace with Class & Interface

namespace Shapes {
  export interface Shape {
    area(): number;
  }

  export class Circle implements Shape {
    constructor(public radius: number) {}
    area(): number {
      return Math.PI * this.radius * this.radius;
    }
  }
}

const c = new Shapes.Circle(5);
console.log(c.area()); // 78.54

// 4. Splitting Namespaces Across Files
// You can split a namespace into multiple files. TypeScript will merge them (like declaration merging).

// file1.ts

namespace Utils {
  export function greet(name: string) {
    return `Hello, ${name}`;
  }
}


// file2.ts

namespace Utils {
  export function farewell(name: string) {
    return `Goodbye, ${name}`;
  }
}


// main.ts

console.log(Utils.greet("Alice"));
console.log(Utils.farewell("Alice"));
