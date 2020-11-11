// BigInt value
const value1 = 900719925124740998 n;

// Adding two big integers
const result1 = value1 + 1 n;
console.log(result1); // returns "900719925124740999n"

const value2 = 900719925124740998 n;

// Error! BitInt and number cannot be added
const result2 = value2 + 1;
console.log(result2);