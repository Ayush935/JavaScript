let score = "33"
let s = "abc"

console.log(typeof score)
console.log(typeof (score))

let valueInNumber = Number(score)
let valueInNumber1 = Number(s)

console.log(typeof valueInNumber)
console.log(typeof valueInNumber1)   // number

console.log(valueInNumber1)  // NaN

let a = ""// 5=>true 0=>false string " "=>true  string "" => false  string "dd" =>true
let p = Boolean(a)
console.log(p)

let z=5
let x= String(z)
console.log(x)
console.log(typeof x)


// ******************************* Operations

let value = 3 
let negVale = -value
console.log(negVale)

// concatenate
// operations + * / % 

console.log("1"+"2")
console.log("a"+"b")
console.log("a"+"1"+2+3)
console.log(2+3+"c")

let count = 5
count++  // prefix operation ++count  postfix operation count++
console.log(count)
