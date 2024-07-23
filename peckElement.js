let arr = [10, 20, 15, 2, 23, 90, 67];

for(let i = 1; i < arr.length-1; i++){
    if(arr[i] >arr[i-1] && arr[i] > arr[i+1]){
        console.log("peackElement is", arr[i], ": and the index is", i);
    }
}