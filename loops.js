/********************************************** FOR LOOPS **********************************************/

// Create a loop that executes ten times and logs the values 1..10

// Code Here

// Create a loop that loops through the array below and prints the individual values inside the array
const arr = ['first', 2, { third: true }, [4]];

// Code Here

// Create a loop that loops through the array below and subtracts 1 from each value
let nums = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// Code Here

// Create a loop that loops through the array below and adds the doubled value of the array to a new array
let singles = [3, 5, 7, 9, 11, 13, 15, 17, 19, 21];
let doubles = [];

// Code Here

// Create a loop that appends the numbers 1 through 10 to a string
let string = '';

// Code Here

// Create a loop that creates a string from the values in the array below. Put a space between each value
const phraseArr = ['The', 'arsonist', 'has', 'oddly', 'shaped', 'feet'];
let phraseStr = '';

// Code Here

// Create a loop that loops 11 ten times and logs the numbers 10..1 and then logs 'BLAST OFF!' at the last iteration

// Code Here

/********************************************** WHILE LOOPS **********************************************/

// Create a while loop that loops 10 times and logs the numbers 1..10

// Code Here

/********************************************** CALLBACKS **********************************************/

// Create a function that takes in callMe as callback and invokes the callback

function callMe() {
  console.log('I was called');
}

// Code Here

// Create function that takes in a callback and loops through the array below and invokes the callback for each item in the array

const someNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function logger(value) {
  console.log(value);
}

// Code Here

/********************************************** TERNARIES **********************************************/

// Create a ternary that evaluates if the number is greater than 10. If it is, return 10. If it isn't, return the number

const num = 5;

// Code Here

// Convert the function below to use a ternary instead of an if else block

function yesOrNo(bool) {
  if (bool) {
    return 'yes';
  } else {
    return 'no';
  }
}

// Convert the nested ternary into an if block and a ternary

function canDrinkAndDrive(age) {
  return age >= 21
    ? 'You Can Drink and Drive! (Not at the same time)'
    : age >= 16
    ? 'You can drive!'
    : 'You are too young to drive or drink!';
}
