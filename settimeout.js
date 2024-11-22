console.log("heyyyy")

var x = 2;
var y = 4;
setTimeout(()=>{
    console.log("set time and then move further");
},0);

function domultiply(x,y){
    const ress = x*y;
    return ress;
    
    }
    var z = domultiply(x,y);
    console.log("multiply give us", z);
    console.log("end of it ");