let arr = [1, 2, [3, [4, 5, 6], 7], 8];
let newArr = [];
function flatingArray(data){
    for(let i = 0; i< data.length; i++){
        if(Array.isArray(data[i])){
            flatingArray(data[i])
        }else{
            newArr.push(data[i]);
        }
    }
}

flatingArray(arr);
console.log(newArr)