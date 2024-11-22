const fs = require("fs");
const a =100;



setImmediate(()=>{
    console.log("it is set immmediate");
});

fs.readFile("./file.txt","utf-8", ()=>{
    console.log("read file succeessfully");
});

setTimeout(()=>{
    console.log("set time ")
},0);

function printa(){
console.log("a is:", a);
}
printa();
console.log("this is last");