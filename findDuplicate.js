let arr = [1, 2, 2, 3, 4, 4, 4, 5, 5];

let newObj = {};
let newArr = [];

//*********************************Here is the By using map method*****************************

// let duplicateArr = (data)=>{
//     data.map(item =>{
//         if(newObj[item]){
//             newObj[item] = newObj[item] + 1;
//         }else{
//             newObj[item] = 1;
//         }
//     })
//     for(let key in newObj){
//         if((newObj[key]) > 1){
//             newArr.push(key)
//         }
//     }
//     return newArr;
// }
// let storeDulicate = duplicateArr(arr);
// console.log(storeDulicate);

// return data.reduce((accumulator, current) => {
//     if (accumulator[current]) {
//         accumulator[current] = accumulator[current] + 1;
//     } else {
//         accumulator[current] = 1;
//     }
//     return accumulator;
// }, {});

//*********************************Here is the By using reduce method*****************************
let duplicateArr = (data) =>{
    let occenranceData = data.reduce((accumulator, current) =>{
        if(accumulator[current]){
           accumulator[current] = accumulator[current] + 1;
        }else{
           accumulator[current] = 1
        }
        return accumulator;
    },{});

    for(let key in occenranceData){
        if(occenranceData[key] > 1){
            newArr.push(key);
        }
    }
    return newArr;
}

let storeDulicate = duplicateArr(arr);
console.log(storeDulicate);