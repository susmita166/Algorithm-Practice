// var student = {
//     name : "David Rayy",
//     sclass : "VI",
//     rollno : 12 
// };

//1. list the properties
// let val = [];
// for(let key in student){
//     val.push(key);
// }
// console.log(val)

//2.delete the rollno property

// delete student.rollno;
// console.log(student);

//3.get object length

// let length = Object.keys(student).length;
// console.log(length)

//4.display the reading status

// var library = [ 
//     {
//         author: 'Bill Gates',
//         title: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         author: 'Steve Jobs',
//         title: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         author: 'Suzanne Collins',
//         title:  'Mockingjay: The Final Book of The Hunger Games', 
//         readingStatus: false
//     }
// ];

// let readingStatus = [];
// for(let obj in library){
//     readingStatus.push(library[obj].readingStatus)

//     if(library[obj].readingStatus == true){
//         console.log("Already read",library[obj].author,"by ", library[obj].title)
//     }else{
//         console.log("You still need to read",library[obj].author,"by ", library[obj].title)
//     }
// }


//5.Adding new Property

// var library = [ 
//     {
//         author: 'Bill Gates',
//         title: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         author: 'Steve Jobs',
//         title: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         author: 'Suzanne Collins',
//         title:  'Mockingjay: The Final Book of The Hunger Games', 
//         readingStatus: false
//     }
// ];

// for(let obj in library){
//     library[obj].publisher = ['A', 'B', 'C', 'D']
// }

//6. Access and log the second publisher from the library's publisher array.
// var library = [ 
//     {
//         author: 'Bill Gates',
//         title: 'The Road Ahead',
//         readingStatus: true,
//         publisher : ['A', 'B', 'C', 'D']
//     },
//     {
//         author: 'Steve Jobs',
//         title: 'Walter Isaacson',
//         readingStatus: true,
//         publisher : ['A', 'B', 'C', 'D']
//     },
//     {
//         author: 'Suzanne Collins',
//         title:  'Mockingjay: The Final Book of The Hunger Games', 
//         readingStatus: false,
//         publisher : ['A', 'B', 'C', 'D']
//     }
// ];

// for(let obj in library){
//     console.log(library[obj].publisher[1]);
// }


//7. Add a new publisher to the publisher array.
// var library = [ 
//     {
//         author: 'Bill Gates',
//         title: 'The Road Ahead',
//         readingStatus: true,
//         publisher : ['A', 'B', 'C', 'D']
//     },
//     {
//         author: 'Steve Jobs',
//         title: 'Walter Isaacson',
//         readingStatus: true,
//         publisher : ['A', 'B', 'C', 'D']
//     },
//     {
//         author: 'Suzanne Collins',
//         title:  'Mockingjay: The Final Book of The Hunger Games', 
//         readingStatus: false,
//         publisher : ['A', 'B', 'C', 'D']
//     }
// ];

// for(let obj in library){
//     library[obj].publisher.push("E");
// }

// console.log(library)



//8. Access and log the position of the second employee.

// let obj = {
//     name: "TechCorp",
//     employees: [
//         { name: "Alice", position: "Developer" },
//         { name: "Bob", position: "Designer" }
//     ]
// }

// console.log(obj.employees[1].position);

//***************************Methods Inside Object***************************************//  


//9. Create an object representing a calculator with methods for add, subtract, multiply, and divide. Each method should take two arguments and return the result.

// let object = {
//     add: function(a, b){
//         return a + b;
//     },

//     substract: function(a, b){
//         return a - b;
//     },

//     multiplication: function(a, b){
//         return a * b;
//     },

//     devide: function(a, b){
//         return a / b;
//     }
// }
// console.log("Sum =",object.add(10, 5));
// console.log("Substract =", object.substract(10, 5));
// console.log("Mutiplication =",object.multiplication(10, 5))
// console.log("Devide =",object.devide(10, 5))


//10. Call the add method of the calculator object with arguments 5 and 3 and log the result.

// let calculator = {
//     add: function(a, b){
//         return a + b;
//     }
// }
// console.log("Sum = ", calculator.add(5, 3));



//***************************Object Iteration***************************************//  
//11.Create a JavaScript object with three key-value pairs. Iterate over the object using a for...in loop and log each key and value.

// let obj = {
//     Name: "Susmita Nayak",
//     Age : 27,
//     Gender:"Female"
// }

// for(let key in obj){
//     console.log(key)
//}



//12.Write a function that takes an object as an argument and returns an array of all the keys in the object.

// let obj = {
//     Name: "Susmita Nayak",
//     Age : 27,
//     Gender:"Female"
// }

// let newFunc = (obj) =>{
//     let newArr = [];
//     for(let key in obj){
//         newArr.push(key);
//     }
//     return newArr;
// }

// console.log(newFunc(obj));


//***************************Advanced Object Manipulation***************************************//  

//13.Create a function that takes two objects and merges them into a new object. If both objects have a property with the same key, the value from the second object should be used.


// let newFunc = (obj1, obj2) =>{
//     let newObj = {...obj1, ...obj2};
//     return newObj;
// }
// let obj1 = {
//     author: 'Bill Gates',
//     title: 'The Road Ahead',
//     readingStatus: true
           
// }
// let obj2 = {
//     author: 'Steve Jobs',
//     title: 'Walter Isaacson',
//     readingStatus: true
    
// }
// console.log(newFunc(obj1, obj2));


//14.   Create a JavaScript object to represent a library. The library should have a name, address, and an array of books (each book being an object with title and author properties). Write a method in the library object to add a new book to the books array.

let newObj = {
    name: "Patia Library",
    adress: "Nandan Vihar, Patia, Bhubaneswar",
    books:
    [
        {
            bookName : "Can Love Happen Twice",
            author : "Ravinder Singh"
        },
        {
            bookName : "Sita’s Ramayana",
            author : "Samhita Arni"
        }
    ],
    addBook : function(obj){
        this.books.push(obj)
    }
}


let newBook = {
    bookName : "Can Love Happen Twice",
    author : "Ravinder Singh"
}

newObj.addBook(newBook)
console.log(newObj.addBook(newBook));