//String Manipulation Functions:
//Write a function that reverses a given string.
let original = "Hello World";
let reversed = "";
for (let i = original.length - 1; i >= 0; i--) {
    reversed += original[i];
}
console.log(reversed);

//Create a function that counts the number of characters in a string.
let text = "Onesmus Mutyauvyu";
console.log(`The string length is: ${text.length}`);

// Implement a function that capitalizes the first letter of each word in a sentence.
function myself(str) 
{
    str = str.split(" ");
    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}

console.log(myself("i am onesmus mutyauvyu: a software developer at gomycode."));


//Array Functions:
//Write functions to find the maximum and minimum values in an array of numbers.
function numbers() {
	let Array = [50, 60, 20, 10, 40, 70, 80, 90, 100];
	let minValue = Math.min(...Array);
	let maxValue = Math.max(...Array);
	
	console.log(`The minimum value is: ${minValue}`);
	console.log(`The maximum value is: ${maxValue}`);
}
numbers();

//Create a function that calculates the sum of all elements in an array.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
for (let i = 0; i < numbers.length; i++ ) {
  sum += numbers[i];
}

console.log(`The sum is: ${sum}`);

//Implement a function that filters out elements from an array based on a given condition.
const numbers = [1, 2, 3, 4, 5];
const filteredArray = numbers.filter(num => num !== 3);
console.log(filteredArray);


//Mathematical Functions:
//Write a function to calculate the factorial of a given number.
const number = parseInt(prompt('Enter a positive integer: '));

if (number < 0) { // checking if number is negative
    console.log('Error! Factorial for negative number does not exist.');
}

else if (number === 0) { // if number is 0
    console.log(`The factorial of ${number} is 1.`);
}

else { // if number is 1
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${number} is: ${fact}.`);
}

//Create a function to check if a number is prime or not.
const number = parseInt(prompt("Enter a positive number: ")); // take input from the user
let isPrime = true;

if (number === 1) { // check if number is equal to 1
    console.log("1 is neither prime nor composite number.");
}

else if (number > 1) { // check if number is greater than 1

    for (let i = 2; i < number; i++) { // looping through 2 to number-1
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}

else { // check if number is less than 1
    console.log("The number is not a prime number.");
}

//Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )
const numbers = parseInt(prompt('Enter the number of terms: ')); // take input from the user
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= numbers; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
