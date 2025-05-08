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




// 3.0 — Everyday Types: Union Types ( | = UNION TYPE OPERATOR in TS) creates flexibility in function inputs

// 3.1 Union type allows this function to have a value of number OR string. 
// TS expects VOID label if not using RETURN 
// If this function used a return, i would specify the return TYPE, like string or number instead of VOID
function printId(id: number | string): void { 
    console.log("Your ID is:", id);
  }
  
  printId(12345);   // practical way of printing id (numbers only), but what if an id had letters too...?
  printId("A567Z"); // using a string here is nice becuase it allows numbers AND letters
  






