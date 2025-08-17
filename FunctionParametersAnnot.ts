// What are Function Parameter Annotations?

// In TypeScript, you can specify the type of each function parameter.
// This ensures that the function is called with the correct argument types.

// Return annotations?
// We can specify the return type of the function as well.


//Regular Function
function incrementOne(x: number):number {
    return x + 1;
}

console.log(incrementOne(5));// 6
// console.log(incrementOne("5"));//Argument of type 'string' is not assignable to parameter of type 'number'.
// console.log(incrementOne("5", "6"));// Expected 1 arguments, but got 2.


// Arrow Function
const incrementTwo = (x: number):number => x+2;
console.log(incrementTwo(7)); // 9
// console.log(incrementTwo(5,7)); // Expected 1 arguments, but got 2.


// Arrow Function
const incrementThree = (x: number = 0):number => x+3;
console.log(incrementThree()); // 3
console.log(incrementThree(7)); // 10


// Arrow Function
const incrementCheck = (x: number = 0):string => `${x}`;
console.log(incrementCheck()); // 0
console.log(incrementCheck(7)); // 7


// Return annotations?
function anotherFunction(x:number,y:number):void {
    console.log(x, y);
    // return x+y; // Type 'number' is not assignable to type 'void'.
}
anotherFunction(1,2);


// Return annotations?
const anotherFunction2 = (x:number,y:number):void =>  {
    console.log(x, y);
    // return x+y; // Type 'number' is not assignable to type 'void'.
}
anotherFunction2(1,2);

