
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
    setTimeout(()=> console.log("2nd timer"),0);   // this by m-2 in whhich we dont use {}
    process.nextTick(()=> console.log("2nd nexttixk it is"));
    setImmediate(()=> console.log("2nd setimmediate"));
    console.log("read file succeessfully");
});


process.nextTick(()=>console.log("proceess nexttick"));   // i done this by m-2 u can you use proper callback func also by use {} this.


console.log("this is last");