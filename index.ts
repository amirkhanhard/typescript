// STRING
let myString: string = "Hello, TypeScript!";
// myString = 1; //Type 'number' is not assignable to type 'string'.
console.log("string:", myString);

// NUMBER
let myNumber: number = 42;
console.log("number:", myNumber);

// BOOLEAN
let myBool: boolean = true;
console.log("boolean:", myBool);

// ARRAY
let myArray: number[] = [1, 2, 3, 4];
console.log("array:", myArray);

// TUPLE (fixed length, fixed types)
let myTuple: [string, number] = ["Age", 25];
console.log("tuple:", myTuple);

// ENUM
enum Colors {
  Red,
  Green,
  Blue,
}
let myEnum: Colors = Colors.Green;
console.log("enum:", myEnum);

// ANY (can hold any type, not recommended usually)
let myAny: any = "I can be anything";
myAny = 123; // works fine
console.log("any:", myAny);

// VOID (usually return type for functions that don’t return anything)
function logMessage(): void {
  console.log("void: This function returns nothing");
}
logMessage();

// NULL
let myNull: null = null;
// myNull = 1;//Type '1' is not assignable to type 'null'.
console.log("null:", myNull);

// UNDEFINED
let myUndefined: undefined = undefined;
console.log("undefined:", myUndefined);

// OBJECT
let myObject: object = { name: "Amir", age: 30 };
console.log("object:", myObject);

let myObject1: {name:string; age:number} = { name: "Amir", age: 30 };
console.log("object:", myObject1);

let myObject2: {name:string; age:number}[] = [{ name: "Amir", age: 30 },{ name: "Amir", age: 30 }];
console.log("object:", myObject2);

// NEVER (function that never returns, e.g., throws an error)
function throwError(message: string): never {
  throw new Error(message);
}
// Uncommenting below will crash:
// throwError("Something went wrong!");

// UNKNOWN (like any, but safer — you must type check before using)
let myUnknown: unknown = "Could be anything";
// console.log(myUnknown.toUpperCase());  Error
if (typeof myUnknown === "string") {
  console.log("unknown (after check):", myUnknown.toUpperCase());
}
