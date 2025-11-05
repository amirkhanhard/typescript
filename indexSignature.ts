interface PropType {
  [index: string]: string;
  age?: string;
}

const obj: PropType = {
  asdf: "asdf",
  age: "5",
};

let prop: string = "asdf";
console.log(obj[prop]);

obj.asdfadf = "555"; // we can modify the object and introduce new property

console.log(Object.entries(obj));

for (let key in obj) {
  console.log(obj[key]);
}

////////////////////////////////////////

interface PropType2 {
  name: string;
  age?: string;
}

const obj2: PropType2 = {
  name: "asdf",
  age: "5",
};
// obj2.asdff=5; //Error asdff property does not exists.

for (let key in obj2) {
  console.log(obj2[key as keyof PropType2]);
}

for (let key in obj2) {
  console.log(obj2[key as keyof typeof obj2]);
}

////////////////////////////////////////

type Streams = 'salary' | 'bonus' | 'sidehustle'
type Incomes = Record<Streams, number|string>
const monthelyIncomes: Incomes = {
    salary:500,
    bonus:100,
    sidehustle:"250"
}
for(let key in monthelyIncomes) {
    console.log(monthelyIncomes[key as keyof Incomes ]);

}

////////////////////////////////////////

// Key Property (name: string;)
// This is a fixed, known property.
// The compiler knows it must exist in every Example object.
// Its type is specifically defined (string here).
// “There will always be a name key, and it must be a string.”

interface Example1 {
  name: string;             //  key property
  [key: string]: string;    //  index signature
}

const obj3: Example1 = {
  name: "Amir",
  city: "Delhi",
  country: "India",
  country1: "India",
};

console.log(obj3.name);     // "Amir"
console.log(obj3["city"]);  // "Delhi"
console.log(obj3);  // "Delhi"

////////////////////////////////////

// Index Signature ([index: number]: string)
// “We can use it for array like keys 0 1 2 etc,


interface Example3 {
    [index: number]: string; //  index signature
    name: string; //  key property
}

const obj4: Example3 = {
  name: "Amir",
  0: "asdf",
  1:"asdfff"
};

console.log(obj4.name); // "Amir"
console.log(obj4); // "Delhi"

//////////////////////////////////////

interface Example {
  name: string; //  key property
  [index: number]: string; //  index signature
  [key: string]: string;
}

const obj5: Example = {
  name: "Amir",
  city: "Delhi",
  country: "India",
  country1: "India",
  0: "asdf",
};
obj.name2="asdf"
console.log(obj5.name); // "Amir"
console.log(obj5["city"]); // "Delhi"
console.log(obj5); // "Delhi"
