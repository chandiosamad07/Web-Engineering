function isEven(num){
    if(num%2===0){
        return true;
    }
    else{
        return false;
    }
}
function isOdd(num){
    if(!(num%2===0)){
        return true;
    }
    else{
        return false;
    }
}
function isPrime(num) {
  for(var i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}

function numfact(num , callback){
    return callback(num);
}

console.log(numfact(59,isEven));
console.log(numfact(59,isOdd));
console.log(numfact(59,isPrime));