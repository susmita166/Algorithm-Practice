const person = {
    firstName: 'John',
    lastName: 'Doe',
    greet: function(greeting) {
        console.log(`${greeting}, ${this.firstName} ${this.lastName}!`);
    }
};

const anotherPerson = {
    firstName: 'Jane',
    lastName: 'Smith'
};

console.log("***********call method************");
person.greet.call(anotherPerson, 'Hello'); // Outputs: Hello, Jane Smith!

console.log("***********bind method************");
const greetJane = person.greet.bind(anotherPerson);
greetJane('Hello');