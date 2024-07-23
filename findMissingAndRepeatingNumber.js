let arr = [ 1, 3, 3, 8, 5, 5, 8];
let obj = {
     missingNumbers : [],
     repeatingNumber :{

     }
}
let getNumber;



for(let i = 1; i < arr[(arr.length)-1]; i++){
    if(!arr.includes(i)){
        obj.missingNumbers.push(i);
    }
}

for(let i = 0; i < arr.length; i++){
    getNumber = arr[i];
    if(obj.repeatingNumber[getNumber]){
        obj.repeatingNumber[getNumber] = obj.repeatingNumber[getNumber] +1;
    }else{
        obj.repeatingNumber[getNumber] = 1;
    }
}
console.log(obj);