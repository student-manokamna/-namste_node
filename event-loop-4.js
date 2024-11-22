
const fs = require("fs");

setImmediate(()=>{
    console.log("it is set immmediate");
});
setTimeout(()=>{
    console.log("set time ")
},0);
Promise.resolve().then(()=>{
    console.log("Promises");
});



fs.readFile("./file.txt","utf-8", ()=>{
    
    console.log("read file succeessfully");
});


process.nextTick(()=>{
    process.nextTick(()=>console.log("inner nexttick it is "))
    console.log("proceess nexttick")
});   


console.log("this is last");