let arr = [1, 3, 5, 2, 2, 5, 3, 1, 0, 1, 3, 1, 2, 2, 1, 3, 1];
let n = 5;
let count = 0;

function getPreviousSum(getIndex){
    return sum = arr.reduce((acc, current, index)=>{
        if(index < getIndex){
            acc = acc + current;
        }
        return acc;
    },0);
}

function getAfterSum(getIndex){
    return sum = arr.reduce((acc, current, index)=>{
        if(index > getIndex){
            acc = acc + current;
        }
        return acc;
    },0)
}

for(let i = 0; i < arr.length ; i ++){
    if(getPreviousSum(i) == getAfterSum(i)){
        console.log("The equilibrium point is", i+1);
        count ++;
    }
}
if(count == 0){
    console.log("There is no equilibrium point")
}

