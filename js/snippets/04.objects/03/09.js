// using object lateral
let person = {
    name: 'Sam'
}

console.log(person.name); // Sam

let student = person;

// changes the property of an object
student.name = 'John';

// changes the origins object property
console.log(person.name); // John