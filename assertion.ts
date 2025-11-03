type One = string;
type Two = string | number;
type Three = "hello";

let a: One = "hello";
let b = a as Two;
let c = a as Three;
console.log(b);
console.log(c);

let year: HTMLElement | null = document.getElementById("year");
let thisyear = new Date().getFullYear().toString() as string;
if (year) {
  year.setAttribute("datetime", thisyear);
  year.textContent = thisyear;
}
