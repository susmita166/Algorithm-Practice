let arr = [1,2,3,4,5]
let n = 5
let d = 2

for(let i = 0; i < d; i++){
    let getFirstElement = arr.shift();
    arr.push(getFirstElement)
}

console.log(arr)

let tempArr = [];
let tempArr2 = [];
for(let i = 0; i < arr.length; i++){
    if(i >= 2){
        tempArr.push(arr[i]);
    }else{
        tempArr2.push(arr[i])
    }
}

let mergeTwoArr = tempArr.concat(tempArr2);
console.log(mergeTwoArr)