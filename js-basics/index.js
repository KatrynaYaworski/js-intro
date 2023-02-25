//Variables
//Used to store data temporarily. We store the data somewhere and give that data a name. 
//With this name we can read the data at the given location in the future. 
//A variable is like a box. What you put in the box is the value that we assign to the variable that's the data. And the label that we put on the box is the name of our variable. 
//Use ‘Let’ to declare a variable. Then give it a name. And always terminate with a semi colon. 

//let name = 'Katryna';
//console.log(name);

//Rules-
// Cannot be a reserved keyword
// Should be meaningful
// Cannot start with a number (1name)
//Cannot contain a space or hyphen (-)
//Are Case-sensitive

//let firstName = 'Katryna';
//let lastName = 'Yaworski';


//PRIMITIVES
//let name = 'Katryna'; // String Literal
//let age = 30; // Number Literal
//let isApproved = false; // Boolean Literal, Can be True or False
//let firstName; //Undefined or can be set to undefined.
//let lastName = null; //Null used in situations where we want to clear the value of a variable.
//let selectedColor = null;

//OBJECTS
//let name = 'Katryna';
//let age = 30;
//{} Curly Braces = Object Literal
//let person = {
  //name: 'Katryna',
  //age: 30
//};
// Dot Notation
//person.name = 'John';

//Bracket Notation
//person['name'] = 'Mary';
//console.log(person.name);

//ARRAY
//let selectedColors = ['red', 'blue'];
//selectedColors[2] = 1;
//console.log(selectedColors.length);

//FUNCTIONS
//function - Declare Function From Function Keyboard greet- Name of the function ()- part of the syntax for declaring functions {
  //Between the curly braces is the "Body of the function" Where we put the logic of the function.
  //The logic of the following function is to display a message on the console.
  //console.log('Hello World); Is a Statement. Which means it requires a semi colon. A Function does not require a semi colon.
  //greet (); used to call the function**
  //function greet() {
    //console.log('Hello World');
    // }
 
 //function greet(Parameter) { Body/Logic}
 //greet(Argument)-Calls the Function
  
 //function greet(name, lastName) {
//console.log('Hello ' + name + ' ' +lastName);
 // }
 // greet('John', 'Yaworski');
 // greet('Mary');


//Performing a task
// function greet(name, lastName) {
//   console.log('Hello' + name + ' ' + lastName)
// }
// greet('John', 'Smith');

// //Calculating a value
// function square(number) {
//   return number * number;
// }

// console.log(square(2));

// let x = 11;
// let y = 3;
//Addition
// console.log(x + y);
// //Subtraction
// console.log(x - Y);
// //Multiplication
// console.log(x * y);
// //Division
// console.log(x / y);
// //Remainder of Division
// console.log(x % y);
// //Exponentiation
// console.log(x ** y);

// //Increment (++)
// console.log(x++);
// console.log(x);

// //Decrement (--)
// Console.log(--x);

// let x = 10;
// //The following will both have the same output
// x = x + 5;
// x += 5;

// console.log(x);

// let x = 1;

// //Relational
// console.log(x > 0);
// console.log(x >= 1);
// console.log(x < 1);
// console.log(x <= 1);

// //Equality
// console.log(x === 1);
// console.log(x !== 1);

// //Strict Equality (Type + Value)
// console.log(1 === 1);
// console.log('1' === 1);

// //Lose Equality (Value)
// console.log(1 == 1);
// console.log('1' == 1);
// console.log(true == 1);

//If customer has more than 100 points,
// they are a 'gold' customer, otherwise,
// they are a 'silver' customer,

// let points = 100;
// let customer = points > 100 ? 'gold' : 'silver';

// console.log(customer);

// Logical AND (&&)
// // Returns TRUE if both operands are TRUE
// console.log(true && true);
// console.log(false && false);

//Logical OR (||)
// Returns TRUE if one of the operands is TRUE
// let highIncome = false;
// let goodCreditScore = false;
// let eligibleForLoan = highIncome || goodCreditScore;

// console.log('Eligible', eligibleForLoan);

// // NOT (!)

// let applicationRefused = !eligibleForLoan;
// console.log('Application Refused', applicationRefused);

// Falsy (false)
// undefined
// null
// 0 
// false
// ''
// NaN

//Anything that is not Falsy -> Truthy

//Short-circuiting


// let userColor = undefined;
// let defaultColor = 'blue';
// let currentColor = userColor || defaultColor;

// console.log(currentColor);

//Google Decimal to Binary Converter*

// 1 = 000000001
// 2 = 000000010


// let a = 'red';
// let b = 'blue';

// let c = a;
// a = b;
// b = c;

// console.log(a);
// console.log(b);

// IF & Else
//Hour
//If hour is between 6am and 12pm: Good morning!
// If it is between 12pm and 6pm: Good afternoon!
// // Otherwise: Good evening!
// 1 - 11 = 1a - 11a
// 12 - 24 = 12p - 12a

// let hour = 24;

// if (hour <= 6 && hour < 12) 
//   console.log('Good morning!');
//   else if (hour >= 12 && hour < 18)
//   console.log('Good afternoon');
// else
// console.log('Good evening');


//Switch Case Compared to IF Else
// let role='poop';

// switch (role) {
//   case 'guest':
//     console.log('Guest User');
//     break;

//   case 'moderator':
//     console.log('Moderator User');
//     break;

//   default:
//     console.log('Unknown User');
// }
  
//IF Else

// if(role === 'guest') console.log('Guest User');
// else if(role === 'moderator') console.log('Moderator User');
// else (console.log('Unknown User'));


//For Loop
// for (initialExpression; condition; Increment expression)
// //Initial Expression will execute as long as the condition is true.
// for(let i = 0; i <= 5; i++) {
//   if (i % 2 !==0) console.log(i);
// }

//While Loop
//declaring the variable is not apart of the loop- like in For loops

// let i = 0;
// while (condition){
//   Statement;
//   Increment;
// }

let i = 0;
while(i <= 5) {
  if (i % 2 !==0) console.log(i);
  i++;
}
