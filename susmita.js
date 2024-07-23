let newObj = {
    name:"Susmita Nayak",
    Age:27,
    Gender:"Female"
}
let newArr = [];
newArr.push(newObj)
newArr.push({
    name:"Subhasmita Nayak",
    Age:5,
    Gender:"Female"
})
newArr.push({
    name:"Ankita Biswal",
    Age:24,
    Gender:"Female"
})

for(let key in newArr){
    console.log(key," : ", newArr[key]);
}