// What is a Union Type?

// A union type allows a value to be one of several types, using the | operator.
// It’s like saying: “This variable can be either X or Y (or more)”.



// Example 1: Basic Union

let value: string | number;

value = "Hello";  // string is allowed
console.log(value); // Hello
value = 100;      // number is allowed
console.log(value); // 100
// value = true;  // Error: not assignable to string | number



// Example 2: Function with Union Parameters

function printId(id: string | number) {
    console.log("ID:", id);
  }
  
printId(101);         //ID: 101 number
printId("ABC123");    //ID: ABC123 string


//   Example 3: Array with Union

let data: (string | number)[] = ["Alice", 42, "Bob", 99];
console.log(data);


// Example 4: Narrowing Unions
// TypeScript often needs type narrowing before accessing type-specific methods.


function format(value: string | number) {
    if (typeof value === "string") {
      return value.toUpperCase(); // safe for string
    } else {
      return value.toFixed(2);    // safe for number
    }
  }
  
  console.log(format("hello")); // HELLO
  console.log(format(3.14159)); // 3.14

  

//   Example 5: Union with Literal Types (Discriminated Union)

type Shape =  | { kind: "circle"; radius: number } | { kind: "square"; side: number };

function area(shape: Shape): number {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  } else {
    return shape.side * shape.side;
  }
}

console.log(area({ kind: "circle", radius: 10 })); // 314.15...
console.log(area({ kind: "square", side: 5 }));    // 25
