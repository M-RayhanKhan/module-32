/**
 Truthy:
1. true
2. any number (+v, -v) will be truthy other than 0
3. any string other than empty string
4.'0' , 'false'
5.{}, []

 Falsy:
1.false
2.0
3.'' empty(string)
4.undefined
5.null
 * */

const x = ''
if (x) {
    // console.log('value of x is Truthy');
} else {
    // console.log('value of x is Falsy');
}

const y = true;
if(!y){
  console.log('value is falsy');
}else{
    console.log('value is truthy');
}