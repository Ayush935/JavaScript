" use strict"; // treat all JS code as newer version

// alert(3+3)   // we are using nodejs , not browser

let age = 20
let name = "Ayush"
let isLogged = false

// number (range 2 to power 53)
// bigint for very big number
// string => ""
// symbol => unique => we use in figma
// null => object
// undefined => undefined
// boolean => true/false


console.log(typeof undefined)
console.log(typeof null)
console.log(typeof age)
console.log(typeof name)
console.log(typeof isLogged)


// primmitive and non-primitive datatypes   // in js they there are two types of datatype

//primmitive
// call by value , copy is made and given to u
// 7 types:  String, Number, Boolean, null, undefined, Symbol, BigInt


// is js dynamic or static ?
// js 


// Symbol 
const id = Symbol('21')
const anotherId = Symbol('21')
console.log(id === anotherId)

// Reference (Non-primitive)
// memory allocate the reference 
// array, objects , functions

const bigNumber = 1564646496464886464n

const heroes = ["spiderman", "Batman", "Superman"]
let myObj = {
    name: "Ayush",
    age: 18,
}

//  all the primitive datatypes are stored in stack memory and all non-primitive datatype are stored in heap memory 
// (reference  myObj in satck  ----------->   refrece in heap )

let myObj1 = myObj

myObj1.age = 20

console.log(myObj1.age)
console.log(myObj.age)


const myFunction = function(){
     console.log("Hello World");
}

console.log(typeof bigNumber)

myFunction();

console.log(myObj)
console.log(heroes)