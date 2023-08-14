## Introduction to JavaScript

JavaScript is a high-level, interpreted programming language that is used to add interactivity and dynamic content to websites. It is primarily used for client-side scripting, meaning it runs on the user's browser.

### 1. Variables and Data Types

```javascript
// Variables can be declared using 'let', 'const', or 'var' (older way)
let age = 25;
const name = "John";
var isStudent = true;

// Data types: Number, String, Boolean, Array, Object, null, undefined
let num = 42;
let message = "Hello, World!";
let fruits = ["Apple", "Banana", "Orange"];
let person = { name: "Alice", age: 30 };
let emptyValue = null;
let notDefined = undefined;
```

### 2. Functions

```javascript
// Defining a function
function greet(name) {
  return "Hello, " + name + "!";
}

// Invoking a function
let greeting = greet("John"); // greeting will be "Hello, John!"
```

### 3. Conditionals

```javascript
let age = 18;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}
```

### 4. Loops

```javascript
// For loop
for (let i = 0; i < 5; i++) {
  console.log("Iteration: " + i);
}

// While loop
let count = 0;
while (count < 3) {
  console.log("Count: " + count);
  count++;
}
```

### 5. Arrays

```javascript
let fruits = ["Apple", "Banana", "Orange"];

// Accessing elements
let firstFruit = fruits[0]; // "Apple"

// Adding elements
fruits.push("Grapes"); // Adds "Grapes" at the end of the array

// Removing elements
fruits.pop(); // Removes the last element ("Grapes" in this case)

// Looping through an array
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

### 6. Objects

```javascript
let person = {
  name: "Alice",
  age: 30,
  isStudent: false,
};

// Accessing object properties
console.log(person.name); // "Alice"
console.log(person.age); // 30

// Modifying properties
person.isStudent = true;

// Adding new properties
person.location = "New York";
```
