console.log("hello jii")
const fs = require("fs");   // it is node.js module 
const https = require("https"); // it is  in node.js module  which is present in node.js docs 


var x = 2;
var y = 4;

// A FUNC WHICH IS SYNC IN NATURE : as this block the thread line means code tabhi aage jayega jab tk ye run na ho jaye 
fs.readFileSync("./file.txt","utf8");
console.log("okay now start after above is done ");

https.get("https://dummyjson.com/products/1",(res)=>{
    console.log("fetch data successfully");
});

setTimeout(()=>{
    console.log("set time for 5 sec");
},5000);



fs.readFile("./file.txt","utf8", (err,data)=>{
    console.log("file data :", data);

});
function domultiply(x,y){
const ress = x*y;
return ress;

}
var z = domultiply(x,y);
console.log("multiply give us", z);
console.log("end of it ");
// see esme js engine vala code etni fast pront hota hh lekin ye libuv vala takes time to print 

