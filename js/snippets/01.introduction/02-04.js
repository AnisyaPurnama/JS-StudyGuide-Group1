const number1 = 3 / 0;
console.log(number1); // returns Infinity

const number2 = -3 / 0;
console.log(number2); // returns -Infinity

// strings can't be divided by numbers
const number3 = "abc" / 3;
console.log(number3); // returns NaN