// Getters and Setters in TypeScript?
// TypeScript (like modern JS/ES6) supports getters and setters to encapsulate class properties.
// They allow controlled access to private/protected variables.

// Syntax
// get → defines a getter method (read-only access).
// set → defines a setter method (write access).

// Example 1: Basic Getter and Setter
class Person {
    private name1: string;
  
    constructor(name1: string) {
      this.name1 = name1;
    }
  
    // Getter
    get name(): string {
      return this.name1;
    }
  
    // Setter
    set name(newName: string) {
      if (newName.length < 3) {
        throw new Error("Name must be at least 3 characters long");
      }
      this.name1 = newName;
    }
  }
  
  const p1 = new Person("Alice");
  console.log(p1.name);   //  Getter called -> Alice
  
  p1.name = "Bob";        //  Setter called
  console.log(p1.name);   // Bob
  
  // p1.name = "Al";  Error: Name must be at least 3 characters

  
//   Example 2: Getter Only (Read-only property)
class Circle {
    private radius: number;
  
    constructor(radius: number) {
      this.radius = radius;
    }
  
    // Read-only getter
    get area(): number {
      return Math.PI * this.radius * this.radius;
    }
}
  
  const c = new Circle(5);
  console.log(c.area); //  78.54
  // c.area = 100;  Error: Cannot assign to 'area' because it only has a getter

  
//   Example 3: Setter with Validation
class BankAccount {
    private _balance: number = 0;
  
    get balance(): number {
      return this._balance;
    }
  
    set balance(amount: number) {
      if (amount < 0) {
        throw new Error("Balance cannot be negative");
      }
      this._balance = amount;
    }
  }
  
  const account = new BankAccount();
  account.balance = 1000;   //  Calls setter
  console.log(account.balance); //  Calls getter -> 1000

  
//   Example 4: Using Getter/Setter with readonly + Encapsulation  
class User {
    private _password: string;
    readonly username: string;
  
    constructor(username: string, password: string) {
      this.username = username;
      this._password = password;
    }
  
    get password(): string {
      return "****"; // hide real password
    }
  
    set password(newPassword: string) {
      if (newPassword.length < 6) {
        throw new Error("Password must be at least 6 characters");
      }
      this._password = newPassword;
    }
  }
  
  const u1 = new User("john_doe", "secret123");
  console.log(u1.username); //  public readonly
  console.log(u1.password); // ****
  
  u1.password = "newpass123"; //  updates password via setter

  
//   Getter & Setter with private
//   private means only the class itself can directly access the property.
//   We expose it via getter & setter.

class Employee {
    private _salary: number;
  
    constructor(salary: number) {
      this._salary = salary;
    }
  
    // Getter
    get salary(): number {
      return this._salary;
    }
  
    // Setter with validation
    set salary(amount: number) {
      if (amount < 0) {
        throw new Error("Salary cannot be negative");
      }
      this._salary = amount;
    }
  }
  
  const emp = new Employee(5000);
  console.log(emp.salary);  //  5000
  emp.salary = 7000;        //  Calls setter
  console.log(emp.salary);  // 7000


//   Getter & Setter with protected and Inheritance
//   protected means the property is accessible inside the class and its subclasses.
//   We can extend a class and still use the getter/setter.


class Person1 {
    protected _age: number;
  
    constructor(age: number) {
      this._age = age;
    }
  
    get age(): number {
      return this._age;
    }
  
    set age(value: number) {
      if (value < 0) throw new Error("Age cannot be negative");
      this._age = value;
    }
  }
  
  class Student extends Person1 {
    get isAdult(): boolean {
      return this._age >= 18;  //  can access because it's protected
    }
  }
  
  const s1 = new Student(20);
  console.log(s1.age);     //  20 (getter from parent)
  s1.age = 22;             //  setter from parent
  console.log(s1.isAdult); //  true
  