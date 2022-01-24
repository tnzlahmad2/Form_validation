const x=1;

function calculator(firstvalue,secondvalue,op) {
  if(x==0){
    return add(firstvalue,secondvalue)
  }
  
  else{
     return sub(firstvalue,secondvalue)
  }
}

function add(val1,val2) {
    return val1+val2;
}
function sub(val1,val2) {
    return val1-val2;
}

  let a=1;
  let b=3;
  let op='-'
  let result=calculator(a,b,op);
  console.log(result);
 
 