let arr = [1, 2, 2, 3, 4, 4, 4, 5, 5];

let newObj = {};


// ***************************Here is the 1st method*************************
// let uniqueVal = arr.map(item =>{
//    if(newObj[item]){
//     newObj[item] = newObj[item] + 1;
//    }else{
//       newObj[item] = 1;
//    }
// });

// for(let key in newObj){
//    console.log(key);
// }


// *********************************Here is the 2nd method*****************************
// let newArr = [];
// let uniqueVal = arr.map(item =>{
//     if(!newObj[item]){
//         newObj[item] = 1;
//     }
// });
// for(let key in newObj){
//     newArr.push(key);
// }+





// console.log(newArr);


//*************************************By using array property******************************

let newArr = [];
// let uniqueVal = [... new Set(arr)];
// console.log(uniqueVal);


let uniqueValue = arr.map(item =>{
    if(!newArr.includes(item)){
        newArr.push(item);
    }
})
console.log(newArr)