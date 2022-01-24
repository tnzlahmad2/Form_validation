function area(raduis){
  let sqr=square(raduis);
  let p=returnPie();
  let result=multiPly(sqr,p)
  return result;
}
 
let rad=1;

function multiPly(val1,val2){
  return val1*val2;
}
function returnPie(){
  return 3.14;
}
function square(rads){
  return rads*rads;
}
console.log(area(rad))
 
 
 
 
 
 
 
 
 
 
 function area(raduis){
  
  return multiPly(square(raduis),returnPie())

}
 
let rad=10;

function multiPly(val1,val2){
  return val1*val2;
}
function returnPie(){
  return 3.14;
}
function square(rads){
  return rads*rads;
}
console.log(area(rad))
 
 
 
 
 
 
 
 
 
 
 