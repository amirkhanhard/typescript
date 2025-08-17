
// Access modifiers control the visibility and accessibility of class members (properties & methods).

// 1. public (default)
// Accessible anywhere (inside class, subclass, and outside).
// If you don’t specify an access modifier, it’s public by default.


// 2. private
// Accessible only inside the class.
// Not accessible from outside or from subclasses.


// 3. protected
// Accessible inside the class and inside subclasses.
// Not accessible from outside.



// 1. 

class Person {
    public name: string; // explicitly public (but optional)
    age: number; // default is public
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  }
  
const p1 = new Person("Alice", 25);
console.log(p1.name); //  Accessible
console.log(p1.age);  //  Accessible



// 2. 

class BankAccount {
    private balance: number;
  
    constructor(balance: number) {
      this.balance = balance;
    }
  
    deposit(amount: number): void {
      this.balance += amount;
    }
  
    getBalance(): number {
      return this.balance;
    }
  }
  
  const account = new BankAccount(1000);
  account.deposit(500);
  console.log(account.getBalance()); //  1500
  // console.log(account.balance);  Error: Property 'balance' is private
  

// 3.

class Employee {
    protected salary: number;
  
    constructor(salary: number) {
      this.salary = salary;
    }
  }
  
  class Manager extends Employee {
    showSalary(): void {
      console.log(`Manager salary: ${this.salary}`); //  Accessible
    }
  }
  
  const mgr = new Manager(5000);
  mgr.showSalary();
  // console.log(mgr.salary);  Error: Property 'salary' is protected


//   4. 

class Car {
    readonly vin: string;
    public model: string;
  
    constructor(vin: string, model: string) {
      this.vin = vin;
      this.model = model;
    }
  }
  
  const car = new Car("1HGCM82633A123456", "Honda Civic");
  console.log(car.vin); //  Accessible
  // car.vin = "newVin";  Error: Cannot assign to 'vin'


//   5.  

class User {
    public username: string;       // accessible anywhere
    private password: string;      // only inside this class
    protected email: string;       // inside class + subclasses
    readonly id: number;           // cannot change after creation
  
    constructor(username: string, password: string, email: string, id: number) {
      this.username = username;
      this.password = password;
      this.email = email;
      this.id = id;
    }
  
    public showInfo() {
      console.log(`User: ${this.username}, Email: ${this.email}`);
    }
  }
  
  class Admin extends User {
    showAdminEmail() {
      console.log(`Admin email: ${this.email}`); //  because email is protected
    }
  }
  
  const user1 = new User("john_doe", "secret123", "john@example.com", 101);
  console.log(user1.username); //  public
//   user1.id = 5;//Cannot assign to 'id' because it is a read-only property.
  console.log(user1.id);       //  readonly | not accessible if "protected readonly"
  // console.log(user1.password);  private
  // console.log(user1.email);     protected

