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





// 2.0 — Everyday Types: arrays

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
  




// 4.0 — Everyday Types: Type Narrowing

// 4.1 TS uses narrowing to safely operate on union types
function handleInput(input: number | string): void {
    // Narrowing using typeof — this tells TS we're in a string block
    if (typeof input === "string") {
      console.log("Uppercased input:", input.toUpperCase()); // valid on string
    } else {
      // If it's not a string, TS knows it must be a number
      console.log("Doubled input:", input * 2); // doubling the input number
    }
  }
  handleInput(10);      // number logic
  handleInput("hello"); // string logic

// 66-67 - if its a string, treatit like a string inside this block, then proceed with the uppercase
// 68-70 - if its a number, we can safely do a math operation like doubling, dividing, adding etc

// we wouldnt be able to DOUBLE a string or UPPERCASE a number, so this typeof only works on strings. 
// if its not a string, TS knows it must be a number




// 5.0 — Everyday Types: Type Aliases

// From The Lesson Notes: 
// its common to want to use the SAME type MORE than once and refer to it by a SINGLE name
// A type alias is exactly that - a name for any type.
// Below im giving a name to a SHAPE (in this case: Point)

// 5.1 A type alias lets you create a reusable name for a custom type
type Point = {
    x: number;
    y: number;
  };
  
  // 5.2 Use the alias in a function parameter
  function printCoord(pt: Point): void {
    console.log("X:", pt.x);
    console.log("Y:", pt.y);
  }
  
  // 5.3 Call the function using the custom type alias
  printCoord({ x: 100, y: 200 });
  



// 6.0 — Everyday Types: Interfaces

// From the Lesson Notes:
// An interface declaration is another way to name an object type. Just like ising alias above, works as if an anonymous obj type
// TypeScript is only concerned with the structure of the valuie bneing passed to printCoord, its only looking for the EXPECTED props


// 6.1 Interfaces define the shape of an object, just like type aliases
interface Coord {
    x: number;
    y: number;
  }
  
  // 6.2 You can use the interface in a function, just like a type alias
  function logCoord(coord: Coord): void {
    console.log("X value is:", coord.x);
    console.log("Y value is:", coord.y);
  }
  
  // 6.3 Call the function with a matching object
  logCoord({ x: 34, y: 72 });
  

  // Notes continued: ---- Differences Between Type Aliases and Interfaces ----
  // the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.

// extending an interface example BELOW
// interface Animal {
//     name: string;
//   }
  
//   interface Bear extends Animal {
//     honey: boolean;
//   }
  
//   const bear = getBear();
//   bear.name;
//   bear.honey;
          
// extending a type via INTERSECTIONS BELOW

// type Animal = {
//     name: string;
//   }
  
//   type Bear = Animal & { 
//     honey: boolean;
//   }
  
//   const bear = getBear();
//   bear.name;
//   bear.honey;
         

// 7.0 — Everyday Types: Optional Properties


// ? = an indication that this proptery might be missing
// 7.1 Interface with an optional property (last name may not always be present)
interface Person {
    first: string;
    last?: string; // optional property represented by ? - means the property might be missing
  }
  
  // 7.2 Function safely checks for the optional value
  function printName(person: Person): void {
    // Safe way to access an optional property using a check
    if (person.last !== undefined) {
      console.log("Full Name:", person.first, person.last.toUpperCase());
    } else {
      console.log("First Name Only:", person.first);
    }
  
    // Modern JS shortcut: optional chaining (safe & clean)
    console.log("Last (safe):", person.last?.toUpperCase());
  }
  
  // 7.3 Test with both forms
  printName({ first: "Jon" }); // no last name
  printName({ first: "Arya", last: "Stark" }); // full name
  