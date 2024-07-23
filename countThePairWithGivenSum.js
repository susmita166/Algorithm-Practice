let arr = [1, 5, 7, 1];
let sum = 6;
let count = 0;
for(let i = 0; i< arr.length; i++){
    for(let j = i+1; j <arr.length; j++){
        if(arr[i] + arr[j] == sum){
            count++;
        }
    }
}
console.log(count);