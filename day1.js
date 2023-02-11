// printing
console.log('Hello World')
console.log("Hello World")
console.log(44)


// javaScript is a Dynamically typed language & case sensitive (treat 'a' and 'A' differently)


// variable
let b=65
console.log(b)
b="Praduman"
console.log(b)


let n= 'Ram'
{
    let n= 'Shyam'
    console.log(n)
}
console.log(n)


const author='Jarvis'
console.log(author)


// let can be updated but can't be re-declared
// var can be updated and re-declared 
// const can't be updated and re-declared


// primitive data type 
let a=null
let c=453
let d=true
let e=BigInt("545")
let f="Harry"
let g=Symbol("I am a nice symbol")
let h=undefined

console.log(a, c, d, e, f, g, h)

// to check type of data we use 
console.log(typeof a)
console.log(typeof c)
console.log(typeof d)
console.log(typeof e)
console.log(typeof f)
console.log(typeof g)
console.log(typeof h)


//non-primitive data type
//objects in javaScript
const item= {
    "Hero": true,
    "Subh": false,
    "Jack": 54,
    "Rohan": undefined
}
console.log(item["Hero"])
console.log(item)
console.log(item.Jack)

// we can add an item in the object by this 
item['friend']= "Shubham"
console.log(item)
