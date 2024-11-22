
const fs = require("fs");
const a =100;



setImmediate(()=>{
    console.log("it is set immmediate");
});
Promise.resolve().then(()=>{
    console.log("Promises");
});
// m-2 for this is : as jab ek hi line m ho tou {} ye lgane ki jaruart nhi hh 
// promises.resolve().then(()=>console.log("promises"));
//The .then() method is called on the resolved promise, and it takes a callback function as an argument. 


fs.readFile("./file.txt","utf-8", ()=>{
    console.log("read file succeessfully");
});

setTimeout(()=>{
    console.log("set time ")
},0);
process.nextTick(()=>console.log("proceess nexttick"));   // i done this by m-2 u can you use proper callback func also by use {} this.

function printa(){
console.log("a is:", a);
}
printa();
console.log("this is last");