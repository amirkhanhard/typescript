// const stringEcho = (arg:string):string =>arg;
// console.log(stringEcho("asdf"));

const stringEcho = <T>(arg: T): T => arg;
console.log(stringEcho(1));

const isObj = <T>(arg: T): boolean => {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};
console.log(isObj("asdf"));
console.log(isObj(12345));
console.log(isObj(true));
console.log(isObj([1, 2, 3, 4]));
console.log(isObj({ name: "asdf" }));
console.log(isObj(null));

const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
  if (Array.isArray(arg) && !arg.length) {
    return { arg, is: false };
  }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { arg, is: false };
  }
  return { arg, is: !!arg };
};

console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue("Dave"));
console.log(isTrue(""));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({}));
console.log(isTrue({ name: "dave" }));
console.log(isTrue([]));
console.log(isTrue([1, 2, 3]));
console.log(isTrue(NaN));
console.log(isTrue(-0));

interface BooleanCheck<T> {
  value: T;
  is: boolean;
}

const checkBoolValue = <T>(value: T): BooleanCheck<T> => {
  if (Array.isArray(value) && !value.length) {
    return { value, is: false };
  }
  if (isObj(value) && !Object.keys(value as keyof T).length) {
    return { value, is: false };
  }
  return { value, is: !!value };
};
console.log(checkBoolValue(123));

//////////////////////////////

interface HashId {
  id: number;
}
const processUser = <T extends HashId>(user: T): T => {
  return user;
};
console.log(processUser({ id: 1, name: "asdf" }));
// console.log(processUser({name:"asdf"})); // Error
console.log(processUser({ id: 2 }));

//////////////////////////////

const getUsersProperty = <T extends HashId, K extends keyof T>(
  users: T[],
  key: K
): T[K][] => {
  return users.map((user) => user[key]);
};
const object1 = [
  {
    name: "amirkhan",
    id: 123,
    email: "asdf@ss.ss",
    address: { name: "asdf", label: "asdf" },
  },
  {
    name: "amirkhan2",
    id: 124,
    email: "asdf2@ss.ss",
    address: { name: "asdf", label: "asdf" },
  },
];
console.log(getUsersProperty(object1, "address"));
console.log(getUsersProperty(object1, "name"));
console.log(getUsersProperty(object1, "email"));

///////////////////////////////////////

class StateObject<T>{
    private data:T;
    constructor(value:T) {
        this.data=value;

    }
    get state():T {
        return this.data
    }
    set state(value:T) {
        this.data = value
    }
}
const store = new StateObject("John") //inferred
console.log(store.state);

store.state = "asdf"
// store.state = 123; //Error
console.log(store.state);


const store1 = new StateObject<number>(123) //inferred
console.log(store1.state);

// store1.state = "asdf" //Error
store1.state = 2345; 
console.log(store1.state);


const store2 = new StateObject<number|string>(123) //inferred
console.log(store2.state);

store2.state = "asdf"
store2.state = 2345; 
// store2.state = true;  //Error
console.log(store2.state);


////////////////////////////////////////////////
