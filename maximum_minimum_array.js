let arr = [1, 345, 234, 21, 56789];
let max = arr[0];
let min = arr[0];

let getMaxOrMin = arr.map((data) =>{
    if(data < min){
        min = data;
    }
    if(data > max){
        max = data
    }
});
console.log("max : ", max,"min: ",min)