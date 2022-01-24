//  array sorting


// const student_mark=[29,12,-21,45,45.6]

// student_mark.sort(function(a,b){return a-b});

// console.log(student_mark)


// maximum value in an array

// const student_mark = [23 , 12 , 43 , 22 ,1 ]
 
// function max_value(arr) {
//   return Math.max.apply(null,arr )
// }

// console.log(max_value(student_mark))

//  check max,min value
// const num = [3,-4,-2,89]
// num.push(345)
// num.unshift(-6)

// num.splice(6)
// num.sort();

// console.log(num)

// console.log(num.sort(function(a,b){return a-b}))

// function max_value(arr){return Math.max.apply(null , arr) }

// console.log(max_value(num))

//  function min_value(arr){return Math.min.apply(null , arr) }

// console.log(min_value(num))

// home made method to find min/mad



// const mark = [34 , 52 , 64 , 68]

// function max_value(arr) {
//   let len = arr.length;
//   let max = -Infinity;
//   while (len--) {
//     if (arr[len] > max) {
//       max = arr[len];
//     }
//   }
//   return max;
// }
  
// console.log(max_value(mark))


// const mark = [34 , 52 , 64 , 68]


// function min_value(arr) {

//   let len = arr.length;
//   let min = Infinity;
//   while (len--) {
//     if (arr[len] < min) {
//       min = arr[len];
//     }
//   }
//   return min;
// }
//  console.log(min_value(mark))


//  mapping in array


// const num1 =[2,3,4,5,6]

// num2=num1.map(myFunction)
 
//  function myFunction(value) {
//          return value*2;
//  }

 
// function min_value(arr){return Math.min.apply(null , arr) }

//  console.log(min_value(num2))

//  filter in array

// const num = [54,11,23,567,]
// num2=num.filter(myFunction)

// function myFunction(value) {
//     return value > 18;
// }

// console.log(num2)


// reduce method in array to sum the array value

// const num = [54,11,23,567,]
// num2=num.filter(myFunction)

// function myFunction(value) {
//     return value > 18;
// }

// console.log(num2)


//  check index postion

// const num = [24,635,765,10098]
 
// let postion = num.indexOf(635)  ;

// console.log(postion)


// start with a specific number


// const string_a = ['jfhbbfjdasfb' , 'nfevdhfvehwffuwie']

// const start=string_a.filter((name) => name.startsWith('j'))

// console.log(start)

// vowel replace with number

// const str = 'cancotainsomevowels';
// const replaceVowels = (str = '') => {
//    const vowels = 'aeiou';
//    let res = '';
//    for(let i = 0; i < str.length; i++){
//       const el = str[i];
//       if(vowels.includes(el)){  
//          res += (i + 1);
//       }else{
//          res += el;
//       };
//    };
//    return res;
// };
// console.log(replaceVowels(str));

//  splite an array

// var arr = [0,1,2,3,4,5,6,7,8,9,10]
// , newarr

// while (arr.length > 0) {

// newarr = arr.splice(0,2)

// console.log(newarr)

// }

//  splite an array with function

var array = [0,1,2,3,4,5,6,7,8,9]
   
var breakarray = function (arr,value){

  arrays = []
  
  while (array.length > 0){
    arrays.push(array.splice(0,value));
  }
  return arrays;
}

console.log(breakarray(array,3))

//  count same number of element in a array

const str = 'jsdfhlJLJajsjsl'
 
const array = Array.from(str)

const count = array.filter(elem => elem === 'j').length;

console.log(count)

var sumstr = function(text)
{
var sum = 0 ;
    var numstr = ''
    for (var i = 0; i < text.length; i++) {
       var total = text[i]
       if (total =  text[i]) {
         numstr += total;
       }
       if (i==text.lenght -1) {
         sum +=Number.parseInt(numstr);
       }   
    }
 
 return sum;
}

console.log(sumstr('jeiehoi34eh????'))
