let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// for(let i = arr.length-1; i >=0 ; i --){
//     console.log(arr[i]);
// }

// let applyPush = arr.push(8);
// console.log(arr);
// console.log(applyPush);



// let newArr = [];

// let multiplyArr = arr.reduce((acc,curnt)=>{
//     curnt = curnt * 2;
//     newArr.push(curnt);
//     return newArr;
// },2);

// console.log(multiplyArr);


// let afterPop = arr.pop();
// console.log(afterPop);
// console.log(arr);


// let arrowFunEvenOddCondition = (data) =>{
//     if(data % 2 == 0) return data;
// }


// let resultArray = arr.filter(arrowFunEvenOddCondition);
// console.log(resultArray);


// let arwFunc = (item) =>{
//     if(item > 3) return item;
// }

// let val = arr.find(arwFunc);

// console.log(val);


// const arwFunc = (x, y, z = 30) =>{
//     console.log(x + "," +y + "," +z)
// }

// arwFunc(10, 20);


// function checkValue(x, y){
//     let data = new Promise((resolve, reject) =>{
//         if(x == y){
//             resolve ("data is equal")
//         }else{
//             reject("Data is not equal")
//         }
//     })
//     return data;
// }

// checkValue(10, 10)
// .then(result =>{
//     console.log(result);
// })
// .catch(error =>{
//     console.log(error)
// })


function dataEqualOrNot(x, y){
    return new Promise((resolve, reject) =>{
        if(x === y){
            resolve("Data is equal");
        }else{
            reject("Data is not equal")
        }
    })
    
}

dataEqualOrNot(10, "10")
.then(data =>{
    console.log(data);
})
.catch(error =>{
    console.log(error);
})



// let val = (function()
// 	     {
// 		console.log("hello");
// 	     }())

let arrValue = [1,1,2,3,4,5,3,5,4,4];
// let val = arrValue.reduce((acc, current)=>{
//     if(acc[current]){
//         acc[current] = acc[current]+1;
//     }else{
//         acc[current] = 1;
//     }
//     return acc;
// },{});

// let getVal = val;
// console.log(getVal);


