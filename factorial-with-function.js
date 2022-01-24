let a=4;
let result=1;
function factorial(val1) {
  for (var i = a; i >=1; i--) {
      result=(i*result)
  }
  console.log(result)
}

factorial(a);