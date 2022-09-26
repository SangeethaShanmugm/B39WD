

//scope - lifetime of variable 
//let, const - block scope
// {} - block
// var - function scope

{
  let y1 = 10;
  var y2 = 20;
}

// console.log(y1);
console.log(y2);

// not defined (error)
// undefined (value)

//Lexical scope and hoisting 
//closure - own scope + lexical scope
// var price =  1000;

// function getPrice() {
//     console.log("The old price is: ", price); // 1000
//     // var price = 500;
//     console.log("The new price is: ", price); // 1000
// }

// getPrice();


//hoisting 

console.log(a); // undefined
// 1000 lines
var a =10;
console.log(a); // 10


// var a;
// console.log(a);
// var a =10;
// console.log(a); 

//JS  ->  Does compilation happens? YEs
// code ->  binary (byte code)
// JIT - Just in Time compilation


// 1. compilation phase

// console.log(a); // skip
// var a = 10;// JS - Do you know a? No || What is the value -> context - undefined
// console.log(a); // skip

// // 2. Execution phase

// console.log(a); // JS - Do you know a? yes || whats is the value? undefined
// var a = 10;//  JS - Do you know a? yes || note down -> context a -> 10
// console.log(a); // JS - Do you know a? yes || what is the value ? 10


// // 1. compilation phase

// console.log(a1); // skip
// let a1 = 50;// JS - Do you know aa? No || What is the value -> dont intialize 
// console.log(a1); // skip


// // 2. Execution phase

// console.log(a2); // JS - Do you know a2? Yes | what is value? Error
// let a2 = 50;// 
// console.log(a2); // 

//shadowing - same var name cannot access outside price in the function 
// outside guy lives in the shadow of inside guy 

var price =  1000; // pant

function getPrice() {
    console.log("The old price is: ", price); // undefined
    var price = 500; //MSD
    console.log("The new price is: ", price); // 500
}

getPrice();



//object destructuring 

// const avenger = 


// {
//     name: "Tony",
//     house: "🏠",
//     networth: "💰💰💰",
//     power: "🤖",
//     phrase: "💖 you 2022",
// };


const {
    name,    
    networth,
    power = "💸",
    skill = [ "genius", "billionaire", "happy person", "philanthropist"],
} = {
    name: "Tony",
    house: "🏠",
    networth: "💰💰💰",
    power: "🤖",
    phrase: "💖 you 2022",
};


console.log(networth, power, skill);

//array - index
// object - keys


const avg = {
    name: "Tony",
    house: "🏠",
    networth: "💰💰💰",
    power: "🤖",
    phrase: "💖 you 2022",
};


const avg1 = { ...avg,  nation: "US", power: "💸" };

console.log(avg1);