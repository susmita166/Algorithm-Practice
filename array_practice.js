//1. Create an array of strings representing different fruits: "Apple", "Banana", "Cherry", "Date". Use a for loop to iterate over the array and log each fruit.
// let fruits = ["Apple", "Banana", "Cherry", "Date"];
// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i])
// }

//2. Use the forEach method to iterate over the same fruits array and log each fruit.

// let fruits = ["Apple", "Banana", "Cherry", "Date"];
// fruits.forEach((data)=>{
//     console.log(data);
// })

//3. Create an array of numbers: [1, 2, 3, 4, 5]. Use the map method to create a new array where each element is doubled.

// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.map((data)=> data*2);
// console.log(newArr)

//4. Use the filter method to create a new array containing only the even numbers from the array of numbers.

// let arr = [1,2,3,4,5,6,7,8,9,10];
// let newEvenArr = arr.filter((data)=>data%2 == 0);
// console.log(newEvenArr)


//5.Create an array of numbers: [5, 10, 15, 20]. Use the reduce method to calculate the sum of all elements in the array.

// let arr = [1, 2, 3, 4, 5];
// let sum = arr.reduce((acc, data)=>{
//     acc = acc + data;
//     return acc;
// }, 0);

// console.log(sum);

//6.Use the sort method to sort the following array of numbers in ascending order: [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5].

// let arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
// arr.sort();
// console.log(arr);

//7.Create an array with duplicate elements: [1, 2, 2, 3, 4, 4, 5]. Use the filter method and indexOf to create a new array with only unique elements.

let arr = [1, 2, 2, 3, 4, 4, 5];
let uniqueArr = arr.filter();