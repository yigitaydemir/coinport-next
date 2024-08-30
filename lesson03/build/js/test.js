"use strict";
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
let myTuple = ["yiğit", 123, true];
//obj
let myObj;
myObj = [];
console.log(typeof myObj);
const exampleObj = {
    prop1: "yiğit",
    prop2: "25",
};
let evh = {
    name: "eddie",
    active: false,
    albums: [1984, "test"],
};
const greetArtist = (artis) => {
    if (artis.name) {
        return `Hello ${artis.name.toUpperCase()}!`;
    }
    return "Hello!";
};
console.log(greetArtist(evh));
// enums - unlike most typescript features, enums
// are not a type-level addition to javascript but
// something added to the language and runtime
var Grade;
(function (Grade) {
    Grade[Grade["VF"] = 0] = "VF";
    Grade[Grade["FF"] = 1] = "FF";
    Grade[Grade["DD"] = 2] = "DD";
    Grade[Grade["DC"] = 3] = "DC";
    Grade[Grade["CC"] = 4] = "CC";
    Grade[Grade["CB"] = 5] = "CB";
    Grade[Grade["BB"] = 6] = "BB";
    Grade[Grade["BA"] = 7] = "BA";
    Grade[Grade["AA"] = 8] = "AA";
})(Grade || (Grade = {}));
console.log(Grade.FF);
// literal types
let myName;
let userName;
userName = "dave";
// void -> functions that dont return anything
const logMsg = (message) => {
    console.log(message);
};
logMsg("my func");
// interface mathFunction {
//     (a: number, b: number): number
// }
let multiply = function (c, d) {
    return c * d;
};
// optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
// default parameters
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
logMsg(sumAll(undefined, 3));
// rest parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, current) => prev + current);
};
logMsg(total(1, 2, 3, 4, 5, 6));
// type assertion - type casting
