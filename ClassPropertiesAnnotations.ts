// What are Class Property Annotations?

// In TypeScript, annotations let you explicitly declare the type of class properties (fields/attributes) so the compiler knows what type of data each property should hold.

// This improves:
// Readability (self-documenting code)
// Type safety (compiler errors if wrong type is assigned)



// 1. Besic class properties annotations.

class Person {
    name: string;   // property annotation
    age: number;    // property annotation
    isMarried: boolean; // property annotation
  
    constructor(name: string, age: number, isMarried: boolean) {
      this.name = name;
      this.age = age;
      this.isMarried = isMarried;
    }
  
    greet(): void {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  const p1 = new Person("Alice", 30, false);
  p1.greet();


// Example 2: Optional Properties
// Use ? to mark properties as optional.

class Employee {
    id: number;
    department?: string|undefined; // optional
  
    constructor(id: number, department?: string) {
      this.id = id;
      this.department = department;
    }
  }
  
const emp1 = new Employee(101);
console.log(emp1.department); // undefined
  

// Example 3: Readonly Properties
// Use readonly if a property should not be changed after initialization.


class Car {
    readonly vin: string; // cannot be reassigned
    model: string;
  
    constructor(vin: string, model: string) {
      this.vin = vin;
      this.model = model;
    }
}
  
const myCar = new Car("1HGCM82633A123456", "Honda Civic");
// myCar.vin = "newVin";  //Error: Cannot assign to 'vin'
console.log(myCar); // Car { vin: 'newVin', model: 'Honda Civic' }


// Example 4: Default Property Values
// You can also initialize properties directly.


class Product {
    name: string = "Unknown";
    price: number = 0;
  }
  
  const item = new Product();
  console.log(item.name);  // "Unknown"
  console.log(item.price); // 0


//   Example 5: Using Union / Literal / Enum with Properties

enum Role {
    User,
    Admin,
    SuperAdmin
}

class Account {
    username: string;
    role: Role; // enum type
    status: "active" | "inactive" | "banned"; // literal type
  
    constructor(username: string, role: Role, status: "active" | "inactive" | "banned") {
      this.username = username;
      this.role = role;
      this.status = status;
    }
}
  
const acc = new Account("john_doe", Role.Admin, "active"); //
// const acc = new Account("john_doe", Role.Admin, "active1"); // Argument of type '"active1"' is not assignable to parameter of type '"active" | "inactive" | "banned"'.
console.log(acc); //Account { username: 'john_doe', role: 1, status: 'active' }



// Example 6: Private & Protected with Annotations

class BankAccount {
    private balance: number; // only accessible inside class
    protected accountType: string; // accessible inside class + subclasses

    constructor(balance: number, accountType: string) {
        this.balance = balance;
        this.accountType = accountType;
    }
}

class SavingsAccount extends BankAccount {
    constructor(balance: number) {
      super(balance, "Savings");
      console.log(this.accountType); // Allowed
      // console.log(this.balance); // Error
    }
}

let savAcc = new SavingsAccount(500);
console.log(savAcc);//SavingsAccount { balance: 500, accountType: 'Savings' }


