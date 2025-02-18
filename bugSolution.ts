function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];

//Solution 1: Accessing the array elements individually
console.log(greeter(user[0])); // Greets Jane
console.log(greeter(user[1])); // Greets Doe

//Solution 2: Joining array elements into a single string
let userName = user.join(" ");
console.log(greeter(userName));// Greets Jane Doe

//Solution 3:  Overload the function to handle string arrays
function greeter(person: string): string;
function greeter(person: string[]): string;
function greeter(person: string | string[]): string {
  if (typeof person === 'string') {
    return "Hello, " + person;
  } else {
    return "Hello, " + person.join(" ");
  }
}

console.log(greeter(user)); // Greets Jane Doe
console.log(greeter("John")); // Greets John