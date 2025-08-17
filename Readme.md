Typescript:-
TypeScript is an open-source, strongly typed, object-oriented superset of JavaScript developed and maintained by Microsoft.

It adds static typing and advanced features (like interfaces, enums, generics, and decorators) to JavaScript, making code more predictable, maintainable, and scalable.

At the end, TypeScript code compiles down to plain JavaScript, which runs anywhere JavaScript runs (browser, Node.js, etc.).

TypeScript = JavaScript + Type Safety + Extra Features, compiled back to JavaScript.



Annotations:-

A type annotation in TypeScript is a way of explicitly telling the compiler what type a variable, function parameter, or return value should have.



What is Type Inference?:-

Type inference means TypeScript can automatically figure out the type of a variable, function, or expression without you writing a type annotation. If value is assigned then type of the value is assign to the variable else any type is assigned.



What is any in TypeScript?

The any type is a special type that disables type checking.
A variable of type any can hold any value (string, number, boolean, object, array, etc.).
It basically tells TypeScript: “Don’t check this variable, treat it like JavaScript.”



What are Function Parameter Annotations?

In TypeScript, you can specify the type of each function parameter.
This ensures that the function is called with the correct argument types.



What is never?

In TypeScript, the never type represents values that never occur.
A function that has never as a return type means:
It never returns normally (because it either throws an error or runs forever).


Difference from void and never?

void → Function returns nothing (but still returns implicitly).
never → Function never returns at all.



Objects?

An object in typescript is a structured data type that represents a collection of properties each with
a key and an associated value the properties of an object can have specific types and the object itself 
can be annotated with a type often defined using an interface or a type alias. typescript uses structural 
typing meaning that the shape of an object(its structure or properties ) is what matters for type compatibility)



What is an Intersection Type?

An intersection type combines multiple types into one using the & operator.
The new type must satisfy all combined types.



What is a Union Type?

A union type allows a value to be one of several types, using the | operator.
It’s like saying: “This variable can be either X or Y (or more)”.



What is a Literal Type?

A literal type means a variable can hold only a specific value (not just the general type like string or number).
It uses the exact literal value ("yes", 42, true, etc.) as its type.



What is an Enum?

An Enum (short for enumeration) is a special TypeScript feature that allows you to define a set of named constants.
It makes code more readable and helps you restrict values to predefined options (similar to literal types, but with extra features).



What are Class Property Annotations?

In TypeScript, annotations let you explicitly declare the type of class properties (fields/attributes) so the compiler knows what type of data each property should hold.

This improves:
Readability (self-documenting code)
Type safety (compiler errors if wrong type is assigned)




Access modifiers control the visibility and accessibility of class members (properties & methods).

1. public (default)
Accessible anywhere (inside class, subclass, and outside).
If you don’t specify an access modifier, it’s public by default.


2. private
Accessible only inside the class.
Not accessible from outside or from subclasses.

3. protected
Accessible inside the class and inside subclasses.
Not accessible from outside.



Getters and Setters in TypeScript?
TypeScript (like modern JS/ES6) supports getters and setters to encapsulate class properties.
They allow controlled access to private/protected variables.

Syntax
get → defines a getter method (read-only access).
set → defines a setter method (write access).


What is an Interface?
An interface defines a contract (shape) for objects, functions, or classes.
It tells what properties and methods must exist, but not how they are implemented.


What is Declaration Merging?
In TypeScript, if you declare the same interface (or namespace) multiple times, the compiler will merge them into a single definition.
This allows you to extend types without reopening the original definition (very useful for libraries like Express, React, etc.).


What is a Namespace?
A namespace in TypeScript is a way to organize code into logical groups and prevent naming conflicts.
It’s similar to modules but mainly used in older TypeScript projects (before ES6 modules were widely adopted).
Think of it as a container for variables, functions, interfaces, and classes.


Namespace vs Module in TypeScript

1. Namespace
Purpose: Group related code inside one global scope.
Usage: Older style (before ES6 import/export).
Loading: Works in a single file or multiple merged files.
Syntax: Uses namespace keyword.

2. Module
Purpose: Organize and share code across multiple files.
Usage: Modern way (ES6 standard, recommended).
Loading: Uses file-based scope; you must import/export.
Syntax: Uses export and import.

