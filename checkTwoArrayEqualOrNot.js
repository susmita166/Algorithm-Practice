let arr1 = [1,2,5]
let arr2= [2,4,15]
let count = 0;

for(let i = 0; i < arr1.length; i++){
    if((arr2.includes(arr1[i]))==false){
        count++;
    }
}

if(count>0){
    console.log("Array is Not Equal")
}else{
    console.log("Array is Equal")
}
