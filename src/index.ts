// Primitives: string, number, boolean
// string  = text like "hello world"
// number  = all numeric values (no separate int or float in JS)
// boolean = true or false values only

// Note from lesson: Capitalized versions (String, Number, Boolean) exist but are rarely used — stick to lowercase.

// 1.0 — Everyday Types: Primitives

// 1.1 Explicit type annotations
let username: string = "Alex"; // string = text inside "" - that represents username
let age: number = 33;          // number = integer - in this case representing my age 
let isEnrolled: boolean = true; // boolean = true or false - based on isEnrolled (is the user enrolled?)



// 1.2 Inferred types (TS infers the TYPE f/ the assigned value.)
let city = "Minneapolis"; // inferred as a string
let zip = 55401;          // inferred as a number or integer
let isVerified = false;   // inferred as a boolean (true/false)

// 1.3 Print to console 
console.log("Name:", username);
console.log("Age:", age);
console.log("Enrolled?", isEnrolled);
console.log("City:", city);
console.log("ZIP:", zip);
console.log("Verified:", isVerified);





// 2.0 — Everyday Types: arrays, unions, narrowing


// 2.1 Arrays — using type[]
let scores: number[] = [88, 92, 76, 95];         // im defining scores as an array of numbers
let names: string[] = ["Arya", "Bran", "Sansa"]; // im defining names as an array of strings

// printNames([]);











