// What is an Enum?

// An Enum (short for enumeration) is a special TypeScript feature that allows you to define a set of named constants.
// It makes code more readable and helps you restrict values to predefined options (similar to literal types, but with extra features).


// Numeric Enums (default)
// By default, enums assign numeric values starting from 0.

enum Direction {
  North,   // 0
  East,    // 1
  South,   // 2
  West     // 3
}

let move: Direction = Direction.North;
console.log(move);           // 0
console.log(Direction.West); // 3


//  You can also set custom starting values:

enum Status {
  Success = 1,
  Failure,   // 2
  Pending    // 3
}

console.log(Status.Pending); // 3

// 2. String Enums
// Values are string constants instead of numbers.

enum TrafficLight {
  Red = "RED",
  Yellow = "YELLOW",
  Green = "GREEN"
}

let signal: TrafficLight = TrafficLight.Red;
console.log(signal); // "RED"

// 3. Heterogeneous Enums (mix numbers & strings — not recommended)
enum Mixed {
  No = 0,
  Yes = "YES"
}

console.log(Mixed.No);  // 0
console.log(Mixed.Yes); // "YES"

// 4. Const Enums (more optimized for performance)

// Used when you want enums inlined at compile-time (removed from JS output).
// They are faster but cannot be computed dynamically.

const enum Direction2 {
  Up,
  Down,
  Left,
  Right
}

let dir = Direction2.Left; 
console.log(dir); // 2

// 5. Enum Reverse Mapping (only for numeric enums)
enum Role {
  User = 5,
  Admin,
  SuperAdmin
}

console.log(Role.User);   // 5
console.log(Role[6]);     // "Admin" (reverse lookup)
console.log(Role[7]);     // "SuperAdmin" (reverse lookup)

