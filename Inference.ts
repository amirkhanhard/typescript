// What is Type Inference?:-
// Type inference means TypeScript can automatically figure out the type of a variable, function, or expression without you writing a type annotation. If value is assigned then type of the value is assign to the variable else any type is assigned.


let a = "asdf";
let b = 12345;
let c = true;
let d: any = "asdf";
let e: RegExp = /^[a-z]$/

console.log(a,b,c);
console.log( typeof a);//string
console.log( typeof b);//number
console.log( typeof c);//bolean
console.log( typeof d);//string


// a = 5;  // Type 'number' is not assignable to type 'string'.
// b = "asdf" // Type 'string' is not assignable to type 'number'.
// c = 123 // Type 'number' is not assignable to type 'boolean'.

let f;
console.log(typeof f);// undefined
f = 55;

