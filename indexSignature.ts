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