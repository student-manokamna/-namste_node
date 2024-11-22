
// modules protect their variables and functions from leaking 


//   console.log("it is executed")
// function calculateSum(a,b){
//     sum= a+b;
//     console.log(sum);
// }
// module.exports =calculateSum;

//  if there are two var r present and we want to export these then we do so by wrapping it in inside a obj



// console.log("it is executed")
// var x = "hello duniya";
// function calculateSum(a,b){
//     sum= a+b;
//     console.log(sum);
// }
// //  m-1 
// module.exports ={
//     x:x,
//     calculateSum:calculateSum
// }
// m-2 
// module.exports ={x,calculateSum};


//  in ES MODULES : there is differnet way of exporting and importing 



// console.log("it is executed")
// var x = "hello duniya";
//  export function calculateSum(a,b){        // so we here do direct exporting 
//     const  sum= a+b;
//     console.log(sum);
// }


// so now move again to cs module so .... hide es module for a while 

console.log("it is executed")
var x = "hello duniya";
 function calculateSum(a,b){        // so we here do direct exporting 
    const  sum= a+b;
    console.log(sum);
}
console.log(module.exports);
module.exports = {x,calculateSum};   // see m-2 of this in nb 

// output of this is:
// very important node js
// it is executed
// hello duniya
// 30


