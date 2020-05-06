// This is comment section
console.log("This is Raj's Console...");

// Variables 

let name = 'Raju';
console.log(name);
// Variable can not be a reserved keyword
// Should be meaningful
// Can not start with a number (1name)
// Can not contain a space or hyphen ( - )
// Are case sensitive

let firstName = 'Raj', lastName = 'Kumar';
let thirdName = 'Kanishk';
let fourthName = 'Vasishk';

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

// Constants 
/*
const interestrate = 0.4;
interestrate = 1; // We can not reassign to the constant value.
console.log(interestrate);
*/
// Primitive Types / Value TYpes and othertypes are Reference Types
// Primitive Types : String, Number, Boolean, undefined, null

let pet_name = 'Oscar'; // String Literal
let age = 6; // Number Literal
let isApproved = true; // Boolean Literal
let fifthName = undefined; // undefined literal --> typeof is 'undefined'
let selectedColor = null; // null literal --> typeof is 'object'

// Dynamic Typing

// Reference Types : Object, Array, Function
// OBJECTS ...
// {} --> curly brackets are object literal in JavaScript
// below person object can have one or more value-pairs
let person = {
    name: 'Raju',
    age: 42
};
console.log(person);
// change the object value-pair value with two different ways
// 1. Dot Notation
person.name = 'Kumar';
console.log(person.name);

// 2. Bracket Notation
// person[' '] or use double quotes : person[ " "]
person['name'] = 'Kiran';
console.log(person.name);
// sometimes we access properies at the runtime so we can use like below
let selection = 'name';
person[selection] = 'maye';
console.log(person.name);

// ARRAYS ...
// [] --> square brackets are the empty Array Literal
// length of arrays as well as typeof objects we have in an array is dynamic

let selectedColors = ['red', 'blue'];
console.log(selectedColors);
console.log(selectedColors[0]);

selectedColors[2] = 'green';
console.log(selectedColors);
// objects in the array as well as size of the array are the dynamic
selectedColors[3] = 9;
console.log(selectedColors);
// array is an object in javascript
console.log(selectedColors.length);
// array is datatype that is used to represents a list of items.

// Functions
function greet(name) { // name --> parameter
    console.log('Hello ' + name);
}
greet('Kanibeta'); // Kanibeta --> argument
greet('Vasibeta'); // Vasibeta --> argument

// Performing a task
function brother(brother_1, brother_2) {
    console.log('Hello ' + brother_1 + ' and ' + brother_2);
}
brother('Kanishk Raj', 'Vasishk Raj');

// TYPES OF FUNCTIONS --> 1. performs a task or 2. calculates a value
// Caculate a value and returns it
function square(number) {
    return number * number;
}
// square(3); --> it does not work then you have assign this value to another variable
let result = square(9);
console.log(result);
// OR
console.log(square(8)); // function calls the value and it is returns to console_value.
// you can pass in console.log()
// either 'hello'--> an argument OR square(8)--> an expression

// OPERATORS
// we use these operators along with variables and constants
// to create an expressions with this expressions we can create
// logic and algorithms.
// Arithmetic, Assignment, Comparision, Logical, Bitwise operators.
// ARITHMETIC OPERATORS.

let x = 10;
let y = 6;
// console.log(x + y); // an expression is that produces a value
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y); // reminder of division
// console.log(x ** y); // exponensation
// Ctrl + Shift + Slash --> To get the comment lines for statements

// INCREMENT OPERATORS (++)
console.log(++x); // increments first then shows on console
console.log(x++); // shows on console first then increments
console.log(x); // the above incremented result is here

// DECREMENT OPERATORS (--)
console.log(--x); // decrements first then shows on console
console.log(x--); // shows on console first then decrements
console.log(x); // the above decremented result is here

// ASSIGNMENT OPERATORS
// let x = 10;
// x++ ==> x = x + 1; --> using this assignment operator assign x+1 value to x
// x = x + 5 ==> x += 5; --> both are same expressions
console.log(x *= 5); // both expressions are same 
console.log(x = x * 5);

// COMPARISON OPERATORS OR RELATIONAL OPERATORS
// let x = 1
console.log(x > 0); // true
// the result of an expression which includes a comparison operator
// is a boolean
console.log(x >= 10); // true
console.log(x < 0); // false
console.log(x <= 250); // true

// EQUALITY OPERATORS OR COMPARISON OPERATORS
console.log(x === 250); // 
console.log(x !== 250); // 
console.log('----------------------------------');

// STRICT EQUALITY OPERATOR ( same type + same value )
console.log(1 === 1);
console.log('1' === 1); // types are not match so result is false


// LOOSE EQUALITY OPERATOR ( only checks value or equal)
console.log(1 == 1);
console.log('1' == 1); // converts rightside operand's type to leftside operand 
console.log(true == 1) // the same like above comment

// TERNARY OPERATORS
// if customer has more than 100 points,
// they are 'gold' customers, otherwise,
// they are 'silver' customers.
let points = 110;
let type = points > 100 ? 'gold' : 'silver'; // ternary or conditional operator
console.log(type);

//LOGICAL OPERATORS
console.log('----------------------------------');
// Logican AND ( && )
// Returns TRUE if both operands are TRUE
console.log(true && true); // true
console.log(false && true); // false
// let highIncome = true;
// let goodCreditScore = true;
// let eligibleForLoan = highIncome && goodCreditScore;
// console.log(eligibleForLoan); // true

// Logical OR ( || )
// Returns TRUE if one of the operands is TRUE
// let highIncome = true;
// let goodCreditScore = false;
// let eligibleForLoan = highIncome || goodCreditScore;
// console.log('Eligible', eligibleForLoan); // true

// Logical NOT ( ! )
let highIncome = false;
let goodCreditScore = false;
let eligibleForLoan = highIncome || goodCreditScore;
console.log('Eligible', eligibleForLoan); // false;
let applicationRefused = !eligibleForLoan;
console.log('Application Refused', applicationRefused);

// LOGICAL OPERATORS WITH NON-BOOLEAN
// Falsy (false)
// undefined
// null
// 0
// false
// ''
// NaN
// Anything that is not Falsy --> Truthy // false || 'raj' --> raj
// Short-circuiting  // false || 1 || 2 --> 1
let userColor = undefined; // if it is 'red' --> result is 'red'
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor);

// BITWISE OPERATORS
// 1 = 00000001
// 2 = 00000010
// Result below is (3) i.e. = 00000011
console.log(1 | 2); // Bitwise OR
// Result below is (0) i.e. = 00000000
console.log(1 & 2); // Bitwise AND
// Read, Write, Execute permissions we can use like this also
// 00000100 --> Read
// 00000010 --> Write
// 00000001 --> Execute

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;
let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;
console.log(myPermission);

let message = (myPermission & readPermission) ? 'yes' : 'no';
console.log(message);

// Swapping Variables
let a = 'red';
let b = 'blue';

// After Swapping
let c = b;
b = a;
a = c;
console.log(a);
console.log(b);

// CONTROL FLOW
// Conditional Statements
// Hour
// If hour is between 6am and 12pm: Good Morning!
// If it is between 12pm and 6pm: Good Afternoon!
// Otherwise: Good Evening!

let hour = 19;

if (hour >= 6 && hour < 12)
    console.log('Good Morning!');
else if (hour >= 12 && hour < 18)
    console.log('Good Afternoon!!');
else
    console.log('Good Evening!!!');

// SWITCH STATEMENT
let role = 'moderator';

switch (role) {
    case 'guest':
        console.log('Guest User');
        break;
    case 'moderator':
        console.log('Moderator User');
        break;
    default:
        console.log('Unknown User');
}

// The same above with if-else statements
if (role === 'guest') console.log('Guest User');
else if (role === 'moderator') console.log('Moderator User');
else console.log('Unknown User');

// LOOPS - 
// For, While, Do..While, For..in, For..of loops
for (let i = 1; i <= 5; i++) {
    if (i % 2 !== 0) console.log('It is odd number', i);
}
for (let j = 5; j >= 1; j--) {
    if (j % 2 !== 0) console.log(j);
}

// While Loop
let k = 0;
while (k <= 5) {
    if (k % 2 === 0) console.log('it is even number', k);
    k++;
}

// do .. while loop
let l = 0;
do {
    if (l % 2 !== 0) console.log(l);
    l++;
} while (l <= 5);

// type 1 - infinite loops
// let m = 0;
// while (m <= 5) {
//     console.log(m);
//     // m++; // goes to infinite loop here
// }

// type 2 - infinite loop
// while (true) {

// }

// // type 3 - infinite loop
// do {

// } while (true);

// // type 4 - inifinite loop
// let n = 0;
// do {
//     // n++
// } while (n < 5);

// // type 5 - inifinite loop
// for (let p = 0; p > 0; p++) {

// }

// // type 6 - inifinite loop
// for (let q = 0; q < 10;) {

// }

// for..in loop
const human = {
    peru: 'RAJ',
    old: 39
};
for (let keey in human)
    //console.log(keey); --> prints only peru, old
    console.log(keey, human[keey]);

// Dot notation
console.log(human.peru);
// Bracket notation
console.log(human['old']);

const colors = ['red', 'green', 'blue'];
for (index in colors)
    console.log(index, colors[index]);

// for .. of loop --> it is introduced in ES6 onwards
for (let color of colors)
    console.log(color);

// break - continue statements
let r = 0;
while (r <= 10) {
    // if (r === 5) break;

    if (r % 2 === 0) {
        r++;
        continue;
    }
    console.log(r);
    r++;
}

// Exercise
// Write a function that takes two numbers
// and returns the maximum of the two.
console.log('--------------------------------------');
let number = max(8, 9);
console.log(number);

function max(a, b) {
    // if (a > b) return a;
    // in this case the control goes out of the loop after found a.
    // else return b; // so this line of code we can write as below also.
    //  return b;

    // the above code is also be written with conditional operation
    return (a > b) ? a : b;
}

// Landscape of the Portrait.

console.log(isLandscape(400, 600));
function isLandscape(width, height) {
    return (width > height);
}

// FizzBuzz program
// Divisable by 3 --> Fizz
// Divisable by 5 --> Buzz
// Divisable by both 3 and 5 --> FizzBuzz
// Not divisable by 3 or 5 --> input
// Not a number --> 'Not a number'

const output = fizzBuzz(true);
console.log(output);

function fizzBuzz(input) {
    if (typeof input !== 'number')
        //return 'Not a number';
        return NaN;

    if ((input % 3 === 0) && (input % 5 === 0))
        return 'FizzBuzz';

    if (input % 3 === 0)
        return 'Fizz';

    if (input % 5 === 0)
        return 'Buzz';

    return input;
}

console.log('------------------------------------------------');
// Speed Limit exercise
// Speed Limit = 70
// 5 KM --> 1 point
// Math.floor(1.3)
// more than 12 points --> license is suspended
checkSpeed(130);

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    // if (speed < speedLimit + kmPerPoint)
    //     console.log('Ok');
    // else {
    //     const points = Math.floor((speed - speedLimit) / kmPerPoint);
    //     if (points >= 12)
    //         console.log('License Suspended');
    //     else
    //         console.log('Points: ', points);
    // We can write this above code like this in good way...

    if (speed < speedLimit + kmPerPoint) {
        console.log('Ok');
        return;
    }

    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12)
        console.log('License Suspended');
    else
        console.log('Points: ', points);
}

console.log('------------------------------------------------');

// Show odd, and even numbers beside the numeric number

showNumbers(10);

function showNumbers(limit) {

    for (let i = 1; i <= limit; i++) {
        if (i % 2 === 0)
            console.log(i, "EVEN");
        else
            console.log(i, 'ODD');
        // This below code is also the same implementation as above.
        // const message = (i % 2 == 0) ? 'EVEN' : 'ODD';
        // console.log(i, message);
    }
}

// Complete list of Falsy Values below : Count Truthy
// undefined
// null
// ''--> empty string
// false
// 0 
// NaN

console.log('----------------------------------------------');
const array = [0, null, undefined, '', false, NaN, 2, 3];
console.log(countTruthy(array));

function countTruthy(array) {
    let count = 0;
    for (let value of array) {
        if (value)
            count++; // if the result is truthy then count is incremented
        return count;
    }
}

console.log('-------------------------------------------------');

// String Properties

const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
};

showProperties(movie);

function showProperties(obj) {
    for (let key in obj)
        if (typeof obj[key] === 'string')
            console.log(key, obj[key]);
}

console.log('--------------------------------------------');

// Sum of multiples of 3 and 5.
// Multiples of 3: 3, 6, 9 ( if the number is 10 )
// Multiples of 5: 5, 10 ( if the number is 10 )

console.log(sum(10));

function sum(limit) {
    let sum = 0;

    for (let i = 0; i <= limit; i++) {
        if (i % 3 === 0 || i % 5 === 0)
            sum += i;
    }
    return sum;

}

console.log('-------------------------------------------------');

// Calculate average grades

const marks = [90, 90, 90];
// Average = 70
// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

console.log(calculateGrade(marks));
// We can divide the below one function into two separate functions
// function calculateGrade(marks) {
//     let sum = 0;
//     for (mark of marks) {
//         sum += mark;
//     }
//     let average = sum / marks.length;

//     if (average < 60) return 'F';
//     if (average < 70) return 'D';
//     if (average < 80) return 'C';
//     if (average < 90) return 'B';
//     return 'A';

// }

function calculateGrade(marks) {

    const average = calculateAverage(array);

    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return 'A';

}

function calculateAverage(array) {
    let sum = 0;
    for (value of array)
        sum += value;
    return sum / value.length; // or array.length

}

console.log('--------------------------------------------')

// SHOW STARS

showStars(5);

function showStars(rows) {
    for (let row = 1; row <= rows; row++) {
        let pattern = '';
        for (let i = 0; i < row; i++)
            pattern += '*';
        console.log(pattern);
    }
}

console.log('---------------------------------------------------')

// SHOW PRIMES
// Prime (whose factors are only 1 and itself)
// Composite
// 12 = 1, 2, 3, 4, 6, 12.
// Can be divided evenly by its factors
// 11 = 1, 11
// 13 = 1, 13

showPrimes(20);

// function showPrimes(limit) {
//     for (let number = 2; number <= limit; number++) {
//         // 2 -to- current(number)
//         let isPrime = true;
//         for (let factor = 2; factor < number; factor++) {
//             if (number % factor === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }

//         if (isPrime) console.log(number);
//     }
// }

// another way to do in two different functions the above one as below

function showPrimes(limit) {
    for (let number = 2; number <= limit; number++) {

        if (isPrime(number)) console.log(number);
    }
}

function isPrime(number) {

    // let isPrime = true;
    for (let factor = 2; factor < number; factor++) {
        if (number % factor === 0) {
            // isPrime = false;
            // break;
            return false;
        }
    }

    // return isPrime;
    return true;
}
console.log('-----------------------------------------------------------');

// OBJECTS CHAPTER STARTS HERE...
// Object Oriented Programming ( OOP )

// // let radius = 1;
// // let x = 1;
// // let y = 1;

// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     isVisible: true,
//     draw: function () {
//         console.log('draw');
//     }
// };

// circle.draw();

// function draw() { }
// function move() { }

// Factory Functions...

// function createCircle() {
//     const circle = {
//         radius: 1,
//         location: {
//             x: 1,
//             y: 1
//         },
//         isVisible: true,
//         draw: function () {
//             console.log('draw');
//         }
//     };

//     return circle;
// }

// The above createCircle() function would be written like below also.
// function createCircle(radius) {
//     return {
//         // radius: radius, // in modern javascript if key-value pair is the same name we can write it as below
//         radius,

//         // draw: function () {
//         //     console.log('draw_');
//         // }
//         // we can write the above function as below
//         draw() {
//             console.log('draw');
//         }
//     };
// }

// // const circle1 = createCircle(); // radius --> undefined
// const circle1 = createCircle(1); // radius --> 1
// console.log(circle1);

// const circle2 = createCircle(2);
// console.log(circle2);

console.log('...................................................................');
// Constructor Functions..........................................................

// Camel Notation : oneTwoThreeFour
// Pascal Notation : OneTwoThreeFour

// Factory Function
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    };
}

const myCircle = createCircle(1);
console.log(myCircle);

// Constructor Function
function Circle(radius) {
    this.radius = radius;
    // In JavaScript properties are dynamic 
    // once we create properties, if you want you can add some more properties or 
    // methods to the existing property.
    this.draw = function () {
        console.log('draw');
    }
}

const circle = new Circle(1);
console.log(circle);

// new --> 1. creates empty js object, ex: const x = {}; but you can not see it.
//         2. this is points to radius and draw() function.
//         3. finally the this object returns the final object from Circle() function, ex: return this;

console.log('..................................................................');
// Dynamic Nature of Objects......................

const circle_2 = {
    radius: 1
};

// circle_2 = {}; --> assignment to constant variable is not possible.
// but we can do adding and removing objects

circle_2.color = 'yellow';
circle_2.draw = function () { }

delete circle_2.color;
delete circle_2.draw;

console.log(circle_2);

// Constructor Property.................................................
// every object in js has a property called constructor.
// and that references the function that was used to construct or create that object

// // Factory Function
// function createCircle_2(radius_2) {
//     return {
//         radius_2,
//         draw_2: function () {
//             console.log('draw_2');
//         }
//     };

// }
// const circle3 = createCircle_2(1);

// // Constructor Function
// function Circle_2_1(radius_2) {
//     this.radius_2 = radius_2;
//     this.draw_2 = function () {
//         console.log('draw_2');
//     }
// }
// const another = new Circle_2_1(1);
// // if you type in browser console like : another.constructor + ENTER --> shows its function object properties
// // circle3.constructor + ENTER --> its function object properties here 

// let x = {};
// let x = new Object();
// new String(); // '', "", ``, literals
// new Boolean(); // true, false
// new Number(); // 1, 2,3,4,....

console.log('-----------------------------------------------------');
// Functions are Objects.............................................
function Circle_4(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

Circle_4.call({}, 1);
// The above statement also write as below
// const another_2 = new Circle_4(4);
// or write as below also
// Circle_4.call(window, 1);
// if you want to write as second arment is an array then write as below
// Circle_4.apply({}, [1,2,3]); // second argument as an array

// output on console:
// Circle_4.name + ENTER --> "Circle_4"
// Circle_4.length + ENTER --> 1
// const Circle5 = new function ('radius','
// this.radius = radius;
// this.draw = function () {
// console.log('draw');
//     }
// ');

// const another_3 = new Circle5(1);
console.log('--------------------------------------------------');

// Value vs Reference Types
// Value Types : 
// Number, String, Boolean, Symbol, undefined, null
// Reference Types :
// Object, Function, Array

// Value Type:
let x2 = 10;
let y2 = x2;
console.log(y2);

x2 = 20;
console.log(x2);

// Reference Type: 
let x3 = { value: 30 };
let y3 = x3;

x3.value = 40;
// output on console :
// y3 + ENTER --> {value: 40}
// x3 + ENTER --> {value: 40}
// so
// Primitives are copied by their Value
// Objects are copied by their Reference

// Second Example for value vs reference

// Value Type - 2: 
let number2 = 50;

function increase(number2) {
    number2++; // this is number is independent of declared number above
    console.log(number2);
}

increase(number2);
console.log(number2);

// Reference Type - 2: 
let obj = { value: 60 };

function increase2(obj) {
    obj.value++;
    console.log(obj.value); // output : 61
}

increase2(obj);
console.log(obj); // output : 61

console.log('-------------------------------------------------');
// Enumerating Properties of an Object
const circle4 = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

for (let key in circle4)
    // console.log(key); // gives properties & methods of object
    console.log(key, circle4[key]); // gives values of properties & methods of object

// for-of loop is used to only iterable objects: arrays & maps
// for (let key of circle4) // not iterable with for-of loop
//     console.log(key);

// but we can use like this below
for (let key of Object.keys(circle4))
    console.log(key);
// here Object is built-in constructor function
// i.e. function Object() {}
// const x = { value: 1 }; // Object literal syntax, this value is 1 internally 
// so this value literal translated to call this object constructor function
// i.e. looks like: const x = new Object();
// In JS all functions are objects.These objects have properties & methods
// those properties & methods are accessed by using .(dot) notation

for (let entry of Object.entries(circle4))
    console.log(entry);

if ('radius' in circle4) console.log('yes');

console.log('----------------------------------------------------');

// Cloning an Object

const circle5 = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

// copy all the "circle5" objects into "another_4" object
// const another_4 = {};

// copying and cloning the object is a little bit odd so we use...as below.
// for (let key in circle5)
//     another_4[key] = circle5[key];
// console.log(another_4);

// another_4['radius'] = circle5['radius'];

// in modern js better way to use : Object.assign() method.

// const another_4 = Object.assign({}, circle5);
// for example if we put any property in object{}
// const another_4 = Object.assign({ color: 'yellow' }, circle5);

// the simplest way of cloning an object is spread-object notation i.e.
const another_4 = { ...circle5 };
// copying all the properties & methods into curly brackets as above
console.log(another_4);

console.log('-----------------------------------------');
// String
// String primitive
const message2 = 'hello this is my second message';
// on console: typeof message2 + ENTER --> "string"

// String object
const another_5 = new String('hello'); // on console: typeof another_5 + ENTER --> "object"

console.log('---------------------------------------');

// Template Literals
// String primitive
const message3 =
    'This is my\n' +
    '\'third\'message'; // this looks like ugly
// Object {}
// Boolean true, false
// String '', ""
// Template ` ` (back-tick characters) introduced in ES6

const another_6 =
    `This is my
'fourth' message. `;
// now if you see: message3 and another_6 are identical
// another_6 is clear and good manner while using back-tick characters

const name3 = 'Bill';
// this is below, is normally we write but it is not good way to write.
// const message4 = 'Hi ' + name3 + ', \n';
// if we would like to include a name in the below text.
// we write the name3 dynamically in back-ticks template.
// you can write any expression/function in curly brackets.

const email =
    `Hi ${name3}... and he is ${9 + 21}, years old.

You are learning  javascript..

Thanks & Regards,
Kiran.
`
// the above email format is as it it when we print on console or write
// email message to anyone.
console.log('-------------------------------------------------------');
// Date Built-in Object
const now = new Date();
const date1 = new Date('May 11 2018 09:00');
const date2 = new Date(2018, 4, 11, 9);
now.setFullYear(2019);

// onconsole we can try these outputs:
// now.toDateString()
// "Mon Apr 22 2019"
// now.toTimeString()
// "17:10:31 GMT+0200 (Central European Summer Time)"
// now.toISOString()
// "2019-04-22T15:10:31.951Z"

console.log('------------------------------------------------');

// Exercise : 1. Address Object
// street
// city
// zipcode
// showAddress(address)

// let address = {
//     street: 'a',
//     city: 'b',
//     zipcode: 'c'
// };

// function showAddress(address) {
//     for (let key in address) {
//         console.log(key, address[key]);
//     }

// }

// showAddress(address);

// Exerciese - 2: 
// Factory and Constructor Functions

//let address = createAddress('a', 'b', 'c');
let address = new Address('a', 'b', 'c'); // for Constructor Function
console.log(address);

// Factory Function
function createAddress(street, city, zipcode) {
    return {
        // if key and value are the same then to make code is cleaner we just write as
        // street: street, or street, like that we write all 3 properties write like below
        street,
        city,
        zipcode
    };
}

// Constructor Function
function Address(street, city, zipcode) {
    this.street = street;
    this.city = city;
    this.zipcode = zipcode;
}

// Exercise - 3: Object Equality