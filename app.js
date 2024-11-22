// var name = "namste-node";
// var a = 10;
// var b = 20;

// console.log(name);
// console.log(a+b);
// console.log(global);
// // global obj in node.js is global and in browser it is window
 // to run this code run this in terminal(cntrl+~);  and then has to write node (file name)
// //  eg: for this we write node app.js
// console.log(this);
// console.log(globalThis);
// console.log(globalThis===global);


// ............ use of module or require 
// require("./xyz.js");
// // require("./sum.js");   writing alone canot work as it give error bcz from one module to another we cant do like this so for to solve we have to follow export and import
// const calculateSum = require("./calculate/sum.js");     // this is importing way
// console.log(globalThis===global);
// var a =10;
// var b = 20;
// calculateSum(a,b);


//  if there are two var r present and we want to export these then we do so by wrapping it in inside a obj

// require("./xyz.js");
// // require("./sum.js");   writing alone canot work as it give error bcz from one module to another we cant do like this so for to solve we have to follow export and import
// const obj= require("./calculate/sum.js");     // m-2 for this is  const {x,calculateSum}= require("./sum.js");  this is known as obj destructure .. and then u can direct write calculateSum(a,b) and comsole.log(x)

// console.log(obj.x);
// var a =10;
// var b = 20;
// obj.calculateSum(a,b);

//  in ES MODULES : there is differnet way of exporting and importing 

// for import
// import { calculateSum } from "./sum.js"; 

// var a =10;
// var b = 20;
// var x = "hello "
// calculateSum(a,b);
// console.log(x);
// //  there is no need of require in ES module 


// so now again switch to cs module by hide es module 

require("./xyz.js");
// const {x,calculateSum} = require("./calculate/sum.js");
// const {calculateMultiply} = require("./calculate/multiply.js");
// we hide above bcz by creating calaculate folder we define calculatesum and multiply in one that is given below(nicche) so we hide uper vala ...

const {calculateMultiply, calculateSum}=require("./calculate");

const data = require("./data.json");
console.log(data);

// console.log(x); // as it is niot defiend in calxculate folder so we hide it otherwise it come 

var a =10;
 var b = 20;
  calculateSum(a,b);
  calculateMultiply(a,b);

//   output of this is:
// very important node js
// it is executed
// hello duniya
// 30





