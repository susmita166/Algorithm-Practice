let arr = [1, 4, 45, 6, 10, 8]
let n = 6;
let sum = 16;

for(let i = 0; i < arr.length; i++){
    for(let j = i+1; j < arr.length; j++){
        if(arr[i] + arr[j] == sum){
            console.log("The Given Sum Value We Can Get By Adding", arr[i],"And ", arr[j]);
        }
    }
}
