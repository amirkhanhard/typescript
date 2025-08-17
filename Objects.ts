// An object in typescript is a structured data type that represents a collection of properties each with
//  a key and an associated value the properties of an object can have specific types and the object itself 
//  can be annotated with a type often defined using an interface or a type alias. typescript uses structural 
//  typing meaning that the shape of an object(its structure or properties ) is what matters for type compatibility)


// 1. Basic Object Type
// You can annotate objects using inline type annotations.


let person: { name: string; age: number } = {
    name: "Alice",
    age: 25,
  };
  
console.log(person.name); // Alice


// 2. Optional Properties
// Use ? if a property may or may not exist.

let user: { id: number; email?: string } = {
    id: 1,
  };
  
  console.log(user); //{ id: 1 }


// 3. Readonly Properties
// Use readonly to prevent modifications.


let car: { readonly brand: string; model: string } = {
    brand: "Toyota",
    model: "Corolla",
  };
  
//   car.brand = "Honda";  //Error: Cannot assign to 'brand' because it is a read-only property
  
// 4. Using type for Objects or type aliases for object
// Instead of repeating inline object types, define a reusable type.

type Product = {
    id: number;
    name: string;
    price: number;
  };
  
let item: Product = {
    id: 101,
    name: "Laptop",
    price: 75000,
};
console.log(item);


// 5. Using interface
// Interfaces are another way to define object types.

interface Employee {
    id: number;
    name: string;
    department: string;
  }
  
  let emp: Employee = {
    id: 1,
    name: "John",
    department: "HR",
  };

  console.log(emp); //{ id: 1, name: 'John', department: 'HR



//   6. Index Signatures (Dynamic Keys)
//   Use this when you don’t know the property names in advance.

let salaries: { [key: string]: number } = {
    Alice: 50000,
    Bob: 60000,
};
  
console.log(salaries["Alice"]); // 50000

  
// 7. Nested Objects
// Objects can be nested inside each other.

type Address = {
    city: string;
    zip: number;
  };
  
  type Student = {
    name: string;
    age: number;
    address: Address;
  };
  
  let student: Student = {
    name: "Sara",
    age: 20,
    address: {
      city: "Delhi",
      zip: 110001,
    },
  };

console.log(student);

