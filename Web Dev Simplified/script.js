console.log('hello from script file');
// callback function
function message(firstName, lastName, callback) {
  const fullName = firstName + ' ' + lastName;
  callback(fullName);
}

function sayHello(fullName) {
  console.log(`Hello ${fullName}!`);
}

message('Aika', 'Marat', sayHello);

// callback function example

function printName(name) {
  console.log(name);
}

function callFunction(x) {
  console.log('before');
  x('Kyle');
  console.log('after');
}

callFunction(printName);

// inner vs outer function

function outer(a) {
  console.log('Outer in: ', 'here param:', a);
  function inner(b) {
    console.log('Inner in: ', 'here param b: ', b);
    console.log(a);
    console.log(b);
  }
  return inner;
}

const newFunc = outer(1);

newFunc(2);

console.log(newVarExample); //undefined

var newVarExample = 'var example';

{
  console.log('inside block:', newVarExample);
}

function printVarExample() {
  var newVarExample2 = 'var example2';

  console.log('inside function: ', newVarExample);

  {
    console.log('inside block: ', newVarExample2);
    console.log('inside function and block: ', newVarExample);
  }
}

printVarExample();

// coercion

let coersionExample = '12asfr3';
let coersionExample2 = 'as123fr3';

console.log(coersionExample, parseInt(coersionExample));
console.log(coersionExample2, parseInt(coersionExample2));
console.log(coersionExample, parseFloat(coersionExample));

console.log((12.3).toString());
console.log(typeof (12.3).toString());

const book = {
  title: 'New Book',
  author: {
    firstName: 'Bulbul',
    lastName: 'Kassymbek',
  },
  yearPublished: 2026,
  publish: (message) => console.log(message),
};

console.log(book);
console.log(book.publish('Publishing new book!'));
