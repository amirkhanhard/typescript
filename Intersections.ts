// What is an Intersection Type?

// An intersection type combines multiple types into one using the & operator.
// The new type must satisfy all combined types.


// type A = string & number; // impossible




type Person = {
    name: string;
};

type Address = {
    city: string;
    country: string;
};
  
type Contact = {
    email: string;
    phone: string;
};
  
type User = Person & Address & Contact;

let user: User = {
    name: "Bob",
    city: "Delhi",
    country: "India",
    email: "bob@example.com",
    phone: "9876543210",
};
console.log(user);

// {
//     name: 'Bob',
//     city: 'Delhi',
//     country: 'India',
//     email: 'bob@example.com',
//     phone: '9876543210'
//   }


interface Developer {
    skills: string[];
}
  
interface Manager {
    teamSize: number;
}
  
type TechLead = Developer & Manager;
  
let lead: TechLead = {
    skills: ["TypeScript", "Node.js"],
    teamSize: 5,
};
console.log(lead);

// { skills: [ 'TypeScript', 'Node.js' ], teamSize: 5 }
