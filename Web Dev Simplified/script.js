// //////console.log('hello from script file');
// // callback function
// function message(firstName, lastName, callback) {
//   const fullName = firstName + ' ' + lastName;
//   callback(fullName);
// }

// function sayHello(fullName) {
//   //////console.log(`Hello ${fullName}!`);
// }

// message('Aika', 'Marat', sayHello);

// // callback function example

// function printName(name) {
//   //////console.log(name);
// }

// function callFunction(x) {
//   //////console.log('before');
//   x('Kyle');
//   //////console.log('after');
// }

// callFunction(printName);

// // inner vs outer function

// function outer(a) {
//   //////console.log('Outer in: ', 'here param:', a);
//   function inner(b) {
//     //////console.log('Inner in: ', 'here param b: ', b);
//     //////console.log(a);
//     //////console.log(b);
//   }
//   return inner;
// }

// const newFunc = outer(1);

// newFunc(2);

// //////console.log(newVarExample); //undefined

// var newVarExample = 'var example';

// {
//   //////console.log('inside block:', newVarExample);
// }

// function printVarExample() {
//   var newVarExample2 = 'var example2';

//   //////console.log('inside function: ', newVarExample);

//   {
//     //////console.log('inside block: ', newVarExample2);
//     //////console.log('inside function and block: ', newVarExample);
//   }
// }

// printVarExample();

// // coercion

// let coersionExample = '12asfr3';
// let coersionExample2 = 'as123fr3';

// //////console.log(coersionExample, parseInt(coersionExample));
// //////console.log(coersionExample2, parseInt(coersionExample2));
// //////console.log(coersionExample, parseFloat(coersionExample));

// //////console.log((12.3).toString());
// //////console.log(typeof (12.3).toString());

// const book = {
//   title: 'New Book',
//   author: {
//     firstName: 'Bulbul',
//     lastName: 'Kassymbek',
//   },
//   yearPublished: 2026,
//   // publish: (message) =>
//   //////console.log(message),
// };

// //////console.log(book);
// //////console.log(book.publish('Publishing new book!'));

// const config = {
//   timeout: 0, // We want to keep this 0!
//   debug: null, // This should get a default
// };

// // Using || (considers 0 as falsy)
// const timeout1 = config.timeout || 5000; // 5000 (❌)
// const debug1 = config.debug || true; // true (✅)

// // Using ?? (ONLY considers null/undefined as falsy)
// const timeout2 = config.timeout ?? 5000; // 0 (✅)
// const debug2 = config.debug ?? true; // true (✅)

// // ////console.log(timeout1, timeout2);

// const user = {
//   profile: {
//     settings: {
//       theme: 'dark',
//     },
//   },
// };

// // Old way with &&
// const theme1 = user && user.profile && user.profile.settings && user.profile.settings.theme;

// // New way with optional chaining
// const theme2 = user?.profile?.settings?.theme;

// // Works with methods too
// user?.notify?.();

// // foreach - loops through each elem in arr, runs function for each one
// const names = ['Yerjan', 'Nurjan', 'Guljan', 'Aijan'];
// // names.forEach((name) => ////console.log(name));
// // names.forEach((name, index) => ////console.log(`${index}-${name}`));

// // map - returns a new arr, transform each elem
// const numbers = [2, 45, 2, 3, 5, 3, 21];
// const doubled = numbers.map((number) => {
//   return number * 2;
// });
// // ////console.log(numbers, doubled);

// // filter - creates a new arr containing only the elems that pass a test (creates filtered new arr)

// const even = numbers.filter((number) => {
//   if (number % 2 === 0) {
//     return number;
//   }
// });

// // ////console.log(even);

// // // find - returns first match
// // ////console.log(
// //   numbers.find((num) => {
// //     return num > 2;
// //   }),
// // );

// // some - at least one math found then return TRUE
// // ////console.log(  numbers.some((num) => {    return num > 2;  }),);

// // every - every elem matches
// // ////console.log(  numbers.every((num) => {    return num > 1;  }),);

// // reduce - takes not only every elem alse "accumulator"
// // ////console.log(  numbers.reduce((acc, num) => {   return acc + num; }, 0),
// // 0 is starting value

// // acc = 0, then 0 + numbers[0]
// // acc = 2, then 2 + numbers[1]
// // acc = 47 ...
// // );

// // DOM - document object model
// // 2 objects in browser:
// // window - global object, available in every single page in browser,
// ////console.log('Hello'); //same as
// window.console.log('Hello');

// ////console.log(window);

// // const ////console = "3"
// // window.////console.log(////console)

// // document - object represents HTML doc loaded in the window
// ////console.log(document);
// ////console.log(document.documentElement); //the <html> elem
// ////console.log(document.getElementById('ex')); //<div id="ex">Example</div>

// const contentDivs = document.getElementsByClassName('content');

// // HTMLCollections looks like arr but do not have all arr methods
// const contentArray = Array.from(contentDivs);
// contentArray.forEach((div) => {
//   div.style.color = 'green';
// });

// const submitButton = document.querySelector('[data-action="submit"]');
// ////console.log(submitButton); // <button data-action="submit">Submit</button>

// // The querySelectorAll method returns all matching elements as a NodeList.

// const header = document.querySelector('#main-header');
// header.textContent = 'Welcome!';

// document.querySelectorAll('p').forEach((p) => {
//   p.style.color = 'blue';
// });

// document.querySelector('p:last-child').style.display = 'none';

// document.querySelectorAll('.required').forEach((i) => {
//   i.style.border = '4px solid red';
// });

// const button = document.querySelector('button');

// button.addEventListener('click', (e) => {
//   // The element that triggered the event
//   ////console.log(e.target); // The button element
//   // The element the listener is attached to
//   ////console.log(e.currentTarget); // The button element
//   // Mouse position (for mouse events)
//   ////console.log(e.clientX, e.clientY); // X and Y coordinates
//   // Modifier keys
//   ////console.log(e.ctrlKey); // true if Ctrl was held
//   ////console.log(e.shiftKey); // true if Shift was held
//   ////console.log(e.altKey); // true if Alt was held
// });

// window.addEventListener('click', (e) => {
//   //console.log(e.target); // The specific element clicked
//   //console.log(e.currentTarget); // Always the document
// });

// // event.target is the element that triggered the event, while event.currentTarget is the element the listener is attached to

// // Syntax Errors: Mistakes in the code that prevent it from running at all.
// // Runtime Errors: Problems that occur while the code is running, causing it to stop.
// // Logical Errors (Bugs): The code runs without crashing, but it doesn't produce the expected results.

// // "ReferenceError: variable is not defined"
// // → You're using a variable that hasn't been declared

// // "TypeError: Cannot read property 'X' of undefined"
// // → You're trying to access a property on undefined/null

// // "TypeError: X is not a function"
// // → You're trying to call something that isn't a function

// // "SyntaxError: Unexpected token"
// // → There's a typo or missing punctuation in your code

// // "RangeError: Maximum call stack size exceeded"
// // → You have infinite recursion

// //console.info('This is info method');
// //console.warn('This is warn method');
// //console.error('This is error method');
// //console.debug('this is debug method');

// //console.group('User Authentication');
// //console.log('Checking credentials...');
// //console.log('Username: Kyle');

// //console.group('Database Connection');
// //console.log('Connecting to database...');
// //console.log('Connection successful');
// //console.groupEnd(); // Ends the Database Connection group

// //console.log('Authentication complete');
// //console.groupEnd(); // Ends the User Authentication group

// //console.groupCollapsed('API Response Details');
// //console.log('Status: 200');
// //console.log('Headers: None');
// //console.log("Data: { name: 'Kyle' }");
// //console.groupEnd();

// const users = [
//   { id: 1, name: 'Alice', age: 25, city: 'New York' },
//   { id: 2, name: 'Bob', age: 30, city: 'Los Angeles' },
//   { id: 3, name: 'Charlie', age: 35, city: 'Chicago' },
// ];

// // Display as a table
// //console.table(users);
// // Display only specific columns
// //console.table(users, ['name', 'age']);

// const assExample = 12;
// //console.assert(assExample > 13, 'Err');

// //console.time('for');
// for (let i = 0; i <= 12000; i++) {}
// //console.timeEnd('for');

// // debugger
// const user112 = 'kyle';

// console.log(user112);

// // debugging

// function compCalculation(a, b) {
//   // debugger;
//   const result1 = multiply(a);
//   const result2 = math(b);
//   return result1 + result2;
// }

// function multiply(value) {
//   return value * 2;
// }

// function math(value) {
//   const doubled = value * 2;
//   const squared = doubled * doubled;
//   return squared;
// }

// compCalculation(3, 4);

// // debugger;
// setTimeout(() => console.log('Inside'), 1000);

// console.log('After');

window.globalVar = "I'm Global";
const scriptVar = "I'm script";
function outerFunction(param1) {
  const outerVar = "I'm in outer";

  function innerFunction(param2) {
    const innerVar = "I'm in inner";

    debugger;

    return param1 + param2 + outerVar + innerVar + globalVar;
  }
}
