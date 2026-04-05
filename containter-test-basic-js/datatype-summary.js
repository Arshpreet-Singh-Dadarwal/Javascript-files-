//  Primitive(call by value)
// JavaScript is primarily a dynamic language, but it incorporates static features for specific object-oriented and organizational purposes
//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions(call by reference)

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++]
// stack(primitive) and Heap(non-primitive)

let user1="arshpreetsingh"
let user2=user1 //pass the copy of user1
console.table([user1,user2])
user2="kush"
console.table([user1,user2])

let myobj1={
    email:"kush@gmail.com",
    name:"kush"
}
let myobj2=myobj1 //pass by reference(if change in obj2 then change also occur in obj1)
myobj2.email="arshpreet@gmail.com"
console.log(myobj1.email)
console.log(myobj2.email)