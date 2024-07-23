let arr = [1, 2, 3, 4, 5];
let n = 5;
let rotatePosition = 1;

for(let i = 0; i< rotatePosition; i++){
    let val = arr.pop();
    arr.unshift(val);
}

console.log(arr)