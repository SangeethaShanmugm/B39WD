//named import 
// import { printDetails3, double, Msg } from "./utils.js"

// console.log(printDetails3(student));

// console.log(double(10));

// console.log(Msg);

//default import 
// import printDetails3 from "./utils.js"
// console.log(printDetails3(student));


// //default renaming 
// import myFunction from "./utils.js";
// console.log(myFunction(student));

//named import 
 import { printDetails3 as provideInfo, double as multiplyFunc, Msg } from "./utils.js"


 const student  = {
    name: "Deeksha",
    age: 20,
    batch: "B39WD",
    score: 80,
};

console.log(provideInfo(student));
console.log(multiplyFunc(50));