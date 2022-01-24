function calculator(firstValue,secondValue,op){
 
    switch (op) {
      case '+':
        return add(firstValue,secondValue);
        break;
      case '-':
        return subtract(firstValue,secondValue);
        break;
      default:
        return add(firstValue,secondValue);
      
    }
  
  }
  function add(val1,val2){
    return val1+val2;
  }
  function subtract(val1,val2){
     return val1-val2;
  }
  let  a=1;
  let b=3;
  let op='-'
  let result=calculator(a,b,op);
  console.log(result);
  
  
  
  