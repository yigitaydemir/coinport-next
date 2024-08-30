// TypeScript is JavaScript with added syntax for types.

// What is TypeScript?
// TypeScript is a syntactic superset of JavaScript which adds static typing.

// This basically means that TypeScript adds syntax on top of JavaScript, allowing developers to add types.

// TypeScript being a "Syntactic Superset" means that it shares the same base syntax as JavaScript, but adds something to it.

// Why should I use TypeScript?
// JavaScript is a loosely typed language. It can be difficult to understand what types of data are being passed around in JavaScript.

// In JavaScript, function parameters and variables don't have any information! So developers need to look at documentation, or guess based on the implementation.

// TypeScript allows specifying the types of data being passed around within the code, and has the ability to report errors when the types don't match.

// For example, TypeScript will report an error when passing a string into a function that expects a number. JavaScript will not.

// TypeScript uses compile time type checking. Which means it checks if the specified types match before running the code, not while running the code.

// Type Assignment
// When creating a variable, there are two main ways TypeScript assigns a type:

// Explicit
// Implicit
// In both examples below firstName is of type string

// Explicit - writing out the type:

// let firstName: string = "Dylan";
// Explicit type assignment are easier to read and more intentional.

// Implicit - TypeScript will "guess" the type, based on the assigned value:

// let firstName = "Dylan";
// Note: Having TypeScript "guess" the type of a value is called infer.

// Implicit assignment forces TypeScript to infer the value.

// Implicit type assignment are shorter, faster to type, and often used when developing and testing.

// Unable to Infer
// TypeScript may not always properly infer what the type of a variable may be. In such cases, it will set the type to any which disables type checking.

// TypeScript has special types that may not refer to any specific type of data.

// Type: any
// any is a type that disables type checking and effectively allows all types to be used.

// any can be a useful way to get past errors since it disables type checking, but TypeScript will not be able provide type safety, and tools which rely on type data, such as auto completion, will not work. Remember, it should be avoided at "any" cost...

// Type: unknown
// unknown is a similar, but safer alternative to any.

// TypeScript will prevent unknown types from being used, as shown in the below example:

// unknown is best used when you don't know the type of data being typed. To add a type later, you'll need to cast it.

// Casting is when we use the "as" keyword to say property or variable is of the casted type.

// Type: never
// never effectively throws an error whenever it is defined.

// let x: never = true; // Error: Type 'boolean' is not assignable to type 'never'.

// never is rarely used, especially by itself, its primary use is in advanced generics.

// Type: undefined & null
// undefined and null are types that refer to the JavaScript primitives undefined and null respectively.

// let y: undefined = undefined;
// let z: null = null;

// TypeScript Arrays
// const names: string[] = [];
// names.push("Dylan"); // no error
// // names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

// Readonly
// The readonly keyword can prevent arrays from being changed.

// Example
// const names: readonly string[] = ["Dylan"];
// names.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.

// Type Inference
// TypeScript can infer the type of an array if it has values.

// Example
// const numbers = [1, 2, 3]; // inferred to type number[]
// numbers.push(4); // no error
// // comment line below out to see the successful assignment
// numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
// let head: number = numbers[0]; // no error

// TypeScript Tuples

// Typed Arrays
// A tuple is a typed array with a pre-defined length and types for each index.

// Tuples are great because they allow each element in the array to be a known type of value.

// To define a tuple, specify the type of each element in the array:

// // define our tuple
// let ourTuple: [number, boolean, string];

// // initialize correctly
// ourTuple = [5, false, 'Coding God was here'];

// Readonly Tuple
// A good practice is to make your tuple readonly.

// Tuples only have strongly defined types for the initial values:

// // define our readonly tuple
// const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
// // throws error as it is readonly.
// ourReadonlyTuple.push('Coding God took a day off');

// Named Tuples
// Named tuples allow us to provide context for our values at each index.

// Example
// const graph: [x: number, y: number] = [55.2, 41.3];
// Named tuples provide more context for what our index values represent.

// Destructuring Tuples
// Since tuples are arrays we can also destructure them.

// Example
// const graph: [number, number] = [55.2, 41.3];
// const [x, y] = graph;

// TypeScript Object Types
// TypeScript has a specific syntax for typing objects.

// const car: { type: string, model: string, year: number } = {
//     type: "Toyota",
//     model: "Corolla",
//     year: 2009
//   };
  
// Optional Properties
// Optional properties are properties that don't have to be defined in the object definition.

// Example with an optional property
// const car: { type: string, mileage?: number } = { // no error
//   type: "Toyota"
// };
// car.mileage = 2000;

// TypeScript Enums

// An enum is a special "class" that represents a group of constants (unchangeable variables).

// Enums come in two flavors string and numeric. Lets start with numeric.

// Numeric Enums - Default
// By default, enums will initialize the first value to 0 and add 1 to each additional value:

// Example
// enum CardinalDirections {
//     North,
//     East,
//     South,
//     West
//   }
//   let currentDirection = CardinalDirections.North;
//   // logs 0
//   console.log(currentDirection);
//   // throws error as 'North' is not a valid enum
//   currentDirection = 'North'; // Error: "North" is not assignable to type 'CardinalDirections'.
  
//   Numeric Enums - Initialized
// You can set the value of the first numeric enum and have it auto increment from that:

// Example
// enum CardinalDirections {
//   North = 1,
//   East,
//   South,
//   West
// }
// // logs 1
// console.log(CardinalDirections.North);
// // logs 4
// console.log(CardinalDirections.West);

// Numeric Enums - Fully Initialized
// You can assign unique number values for each enum value. Then the values will not incremented automatically:

// Example
// enum StatusCodes {
//   NotFound = 404,
//   Success = 200,
//   Accepted = 202,
//   BadRequest = 400
// }
// // logs 404
// console.log(StatusCodes.NotFound);
// // logs 200
// console.log(StatusCodes.Success);

// String Enums
// Enums can also contain strings. This is more common than numeric enums, because of their readability and intent.

// Example
// enum CardinalDirections {
//   North = 'North',
//   East = "East",
//   South = "South",
//   West = "West"
// };
// // logs "North"
// console.log(CardinalDirections.North);
// // logs "West"
// console.log(CardinalDirections.West);

// Technically, you can mix and match string and numeric enum values, but it is recommended not to do so.

