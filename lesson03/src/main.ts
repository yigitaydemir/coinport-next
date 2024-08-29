// let myName: string = "Yiğit";

// const sum = (a: number, b: number) => {
//   return a + b;
// };

// let myNumber: string | number;
// myNumber = "05324008090"

// let re: RegExp = /\w+/g

// let stringArr: string[] = ["deneme", "test", "main"]

// let guitars: (string | number)[] = ["strat", "les Paul", 5150]

// let mixedData: any[] = ["abc", 123, true, false, {test: "test"}]

// stringArr[0] = "mehmet"
// stringArr.push("yiğit")

// console.log(stringArr)

// tuple
let myTuple: [string, number, boolean] = ["yiğit", 123, true];

//obj

let myObj: object;

myObj = [];

console.log(typeof myObj);

const exampleObj = {
  prop1: "yiğit",
  prop2: "25",
};

interface Guitarist {
  name?: string;
  active?: boolean;
  albums: (number | string)[];
}

let evh: Guitarist = {
  name: "eddie",
  active: false,
  albums: [1984, "test"],
};

const greetArtist = (artis: Guitarist) => {
  if (artis.name) {
    return `Hello ${artis.name.toUpperCase()}!`;
  }

  return "Hello!";
};

console.log(greetArtist(evh));

// enums - unlike most typescript features, enums
// are not a type-level addition to javascript but
// something added to the language and runtime

enum Grade {
  VF,
  FF,
  DD,
  DC,
  CC,
  CB,
  BB,
  BA,
  AA,
}

console.log(Grade.FF);

// type aliases

type stringOrNumber = string | number;

type stringOrNumberArray = (string | Number)[];

type artist = {
  name?: "yiğit";
  active: boolean;
  albums: stringOrNumberArray;
};

type userId = stringOrNumber;

// literal types
let myName: "dave";

let userName: "dave" | "john" | "amy";
userName = "dave";

// void -> functions that dont return anything
const logMsg = (message: any): void => {
  console.log(message);
};

logMsg("my func");

type mathFunction = (a: number, b: number) => number;

// interface mathFunction {
//     (a: number, b: number): number
// }

let multiply: mathFunction = function (c, d) {
  return c * d;
};

// optional parameters
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }

  return a + b;
};

// default parameters
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
  return a + b + c;
};

logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
logMsg(sumAll(undefined, 3));

// rest parameters
const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, current) => prev + current);
};

logMsg(total(1, 2, 3, 4, 5, 6));

// type assertion - type casting
