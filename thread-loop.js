const fs = require("fs");
const crypto =  require("crypto");

// to change the size of threadpool which is by default is 4 , we can do so as:

process.env.UV_THREADPOOL_SIZE=2;

crypto.pbkdf2("password","salt",500000,50,"sha512",(err, key)=>{
    console.log("1: - crypto is generated"); 
});
crypto.pbkdf2("password","salt",500000,50,"sha512",(err, key)=>{
    console.log("2: - crypto is generated"); 
});
crypto.pbkdf2("password","salt",500000,50,"sha512",(err, key)=>{
    console.log("3: - crypto is generated"); 
});
crypto.pbkdf2("password","salt",500000,50,"sha512",(err, key)=>{
    console.log("4: - crypto is generated"); 
});
// crypto.pbkdf2("password","salt",500000,50,"sha512",(err, key)=>{
//     console.log("5: - crypto is generated"); 
// });


 