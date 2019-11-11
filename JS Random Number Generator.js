var num1 = prompt('Please provide your first number:');
var num2 = prompt('Please provide a second number:');
alert('We are not calculating a random number from ' + num1 +' to ' + num2);


num1 = parseInt(num1) * Math.random();
num2 = parseInt(num2) * Math.random();

alert ('Your lucky random number is ' + Math.ceil((Math.round(num1) + Math.round(num2)) / 2));


//checking the math
console.log (num1);
console.log (num2);
console.log (Math.round(num1));
console.log (Math.round(num2));