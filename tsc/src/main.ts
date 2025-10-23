const sum = (a:any,b:any) => {
    console.log(a,b);
    return a+b;
}
const su = sum(1,2);

//=========================================

type retu<T> = {
    fname:T
}

const fun1 = <T>(fname:T):retu<T> => {
    return {fname};
}

console.log(fun1(2));
console.log(fun1("amir"));
console.log(fun1(true));
console.log(fun1<number>(2));
console.log(fun1<string>("asdf"));
// console.log(fun1<object>(null));  // error

console.log(fun1<retu<string>>({fname:"asdf"}));

//=========================================

interface ret<T,U>{
    fname:T
    age:U
} 
const u = <T,U>(fname:T,age:U):ret<T,U>=> {
    return {fname,age};
}

console.log(u(2,"asdf"))
console.log(u<string,string>("2","asdf"))
console.log(u<number,string>(2,"asdf"))

//=========================================


//=========================================



//=========================================