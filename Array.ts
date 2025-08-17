
// 1. Basic Array Types
// a) Using type[]

let numbers: number[] = [1, 2, 3, 4];
let strings: string[] = ["apple", "banana", "cherry"];
// numbers.push("asdf"); // Argument of type 'string' is not assignable to parameter of type 'number'
// strings.push(55); // Argument of type 'number' is not assignable to parameter of type 'string'
console.log(numbers, strings);

// b) Using Array<type>

let numbers2: Array<number> = [10, 20, 30];
let strings2: Array<string> = ["dog", "cat", "cow"];
console.log(numbers2, strings2);


// 2. Mixed Type Arrays
let mixed: (string | number)[] = ["apple", 42, "banana"];//[true] not allowed
console.log(mixed);


// 3. Readonly Arrays
let readonlyNumbers: readonly number[] = [1, 2, 3];
console.log(readonlyNumbers);
// readonlyNumbers.push(4);  //Error: cannot modify readonly array


// 4. Array of Objects
type User = { id: number; name: string };


let users: User[] = [
  { id: 1, name: "Alice"}, // New keylike {age:50} etc not allowed
  { id: 2, name: "Bob"}
];
console.log(users); //[ { id: 1, name: 'Alice' }, { id: 2, name: 'Bob' } ]



// 5. Multidimensional Arrays
let matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
  ];
console.log(matrix);//[ [ 1, 2, 3 ], [ 4, 5, 6 ] ]
  
let tripleDimensional: number[][][] = [[[1,2,3,4,5]]];
console.log(tripleDimensional);  // Output: [[[1, 2, 3,]]]

// 6. Tuples (Fixed-Length Arrays)

let user: [number, string] = [1, "Alice"];
console.log(user);//[ 1, 'Alice' ]


// 7. Any Type Array
let anything: any[] = [1, "hello", true, { id: 5 }];

console.log(anything);//[ 1, 'hello', true, { id: 5 } ]

