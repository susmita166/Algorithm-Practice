let arr1 = [10, 5, 2, 23, 19]
let arr2=  [19, 5, 3]
let count = 0

for(let i = 0; i< arr2.length; i++){
    if(arr1.includes(arr2[i])){
        count++;
    }
}
if(count == arr2.length){
    console.log("Arr2 is subset of Arr1")
}else{
    console.log("Arr2 is not subset of Arr1")
}