/**
 * 8 ways to get undefined
 * 1.variable that is not initialized wil give undefined 
 * 2.function with no return
 * 3. parameter that is not passed will be undefined 
 * 4.if return has nothing on th fight side will return undefined
 * 5. property tha does't exists on an object will give you undefined;
 * 6.accessing array elements outside of the index range
 * 7.deleting an element outside of the index range
 * 8.set a value directly to undefined
 * */ 

let first;
// console.log(first);

// function myNumber (a, b, c, d){
//     const result = a + b + c + d
//     // console.log(a,b,c,d);
// }

// console.log(myNumber(5, 5));

function noNegative(a, b){
  if (a < 0 || b < 0) {
    return
  }
  return a + b;
}

const total = noNegative(2, -5)
// console.log(total);

const fifth = {id: 1, name: 'pri', age: 40};
// console.log(fifth.age, fifth.salary);

const ninth = null;

// console.log(typeof null);

const data = {result:[], update: null};
console.log(data.result);

const sixth = [45, 65 ,20]
// console.log(sixth[0], sixth[2], sixth[10]);
