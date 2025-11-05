interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified: boolean;
}
const updAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment>
): Assignment => {
  return { ...assign, ...propsToUpdate };
};

let obj = { studentId: "123", title: "Leader", grade: 123, verified: true };

const myUpd: Assignment = updAssignment(obj, { studentId: "456" });
console.log(myUpd);

//////////////////////////////////////

const updAssignment2 = (
  assign: Assignment,
  propsToUpdate: Required<Assignment> // all properties are required
): Assignment => {
  return { ...assign, ...propsToUpdate };
};

let obj2 = { studentId: "123", title: "Leader", grade: 123, verified: true };

const myUpd2: Assignment = updAssignment2(obj2, {
  studentId: "456",
  title: "sadf",
  grade: 12345,
  verified: false,
});
console.log(myUpd2);

//////////////////////////////////////

const myUpd3: Readonly<Assignment> = {
  studentId: "456",
  title: "sadf",
  grade: 12345,
  verified: false,
};
// myUpd3.grade = 555; //Error readonly
console.log(myUpd3);

//////////////////////////////////////

//Record<All keys types, All possible values types>

const color: Record<string, string> = {
  red: "FF0000",
  greeen: "00FF00",
  blue: "0000FF",
};

console.log(color);

type Students = "sara" | "kelly";
type Grade = "A" | "B" | "C" | "D" | "E";

const result: Record<Students, Grade> = {
  sara: "A",
  kelly: "A",
};

console.log(result);
// here the sara: A | B | C | D | E or
// kelly : A | B | C | D | E

interface Grades {
  assign1: number;
  assign2: number;
}
const result2: Record<Students, Grades> = {
  sara: { assign1: 1, assign2: 2 },
  kelly: { assign1: 10, assign2: 9 },
};

console.log(result2);

////////////////////////////////////////////

type AssignmentResult = Pick<Assignment, "studentId"|"verified">
const result3 :AssignmentResult = {
    studentId:"123",
    verified:true
} 
console.log(result3);

type AssignmentResult2 = Omit<Assignment, "title">
const result4 :AssignmentResult2 = {
    studentId:"123",
    verified:true,
    grade:123

} 
console.log(result4);

////////////////////////////////////////////

type AdjustGrade = Exclude<Grade, "D">
type HighGrades = Extract<Grade, "D" | "E">


const myObj:AdjustGrade = "C"
console.log(myObj);

// const myObj2:AdjustGrade = "D"  //Error

const myObj2:HighGrades = "E"
console.log(myObj2);



////////////////////////////////////////////

// Non nullable

type AllPossibleGrades = "Dave" | "John" | null | undefined

type NamesOnly = NonNullable<AllPossibleGrades>



////////////////////////////////////////////
// Return Type

type newAssign = {title:string, points:number}
const createNewAssign = (title:string, points:number):newAssign => {
    return {title,points}
}

const tsAssign:newAssign = createNewAssign("asdf",5)
console.log(tsAssign);


const createNewAssign2 = (title:string, points:number) => {
    return {title,points,name:123}
}
type NewAssign2 = ReturnType<typeof createNewAssign2>;

const tsAssign2:NewAssign2 = createNewAssign2("asdf",5)
console.log(tsAssign2);

////////////////////////////////////////////

// Parameters

const createNewAssign3 = (title:string, points:number) => {
    return {title,points,name:123}
}
type NewAssign = ReturnType<typeof createNewAssign3>;
type NewParams = Parameters<typeof createNewAssign3>;

const myParams: NewParams = ["asdf",5]
const tsAssign3:NewAssign = createNewAssign3(...myParams)
console.log(tsAssign3);


////////////////////////////////

interface User {
    id:number;
    name:string;
    username:string;
    email:string;
}

const fetchUsers = async ():Promise<User[]> => {
    const data = await fetch(
        'https://jsonplaceholder.typicode.com/users'
    ).then(res => {
        return res.json()
    }).catch(err => {
        if(err instanceof Error) {
            console.log(err.message);
        }
    })
    return data;
}

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>
const user:FetchUsersReturnType = await fetchUsers()
// console.log(user);
