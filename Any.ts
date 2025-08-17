// What is any in TypeScript?
// The any type is a special type that disables type checking.
// A variable of type any can hold any value (string, number, boolean, object, array, etc.).
// It basically tells TypeScript: “Don’t check this variable, treat it like JavaScript.”

let anyVar: any = 12345;
console.log(anyVar);
console.log(typeof anyVar);//number

anyVar = "asdf"
console.log(anyVar);
console.log(typeof anyVar);//string

anyVar = true
console.log(anyVar);
console.log(typeof anyVar);//boolean


anyVar = [1,2,3]
console.log(anyVar);
console.log(typeof anyVar);//object

anyVar = {a:1,b:2}
console.log(anyVar);
console.log(typeof anyVar);//object

// anyVar();//anyVar is not a function

