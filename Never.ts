// What is never?
// In TypeScript, the never type represents values that never occur.
// A function that has never as a return type means:
// It never returns normally (because it either throws an error or runs forever).


// Difference from void
// void → Function returns nothing (but still returns implicitly).
// never → Function never returns at all.



// Function that always throws
function throwError(message: string): never {
    throw new Error(message);
}

// Function with an infinite loop
function infiniteLoop(): never {
    while (true) {
      console.log("Running forever...");
    }
}

// type Shape = "circle" | "square" | "triangle";

// function getArea(shape: Shape): number {
//   switch (shape) {
//     case "circle":
//       return Math.PI * 5 * 5;
//     case "square":
//       return 5 * 5;
//     default:
//       // if a new shape is added later, TypeScript will catch it here
//       const _exhaustiveCheck: never = shape;
//       return _exhaustiveCheck;
//   }
// }
// getArea("triangle"); // Type '"triangle"' is not assignable to type 'never'.



function logMessage(msg: string): void {
    console.log(msg); // returns nothing
  }
  
  function crash(): never {
    throw new Error("App crashed"); // never returns
  }
  console.log(logMessage("asdf")); //returns undefined
  
//   console.log(crash()); // throws an error and never returned.