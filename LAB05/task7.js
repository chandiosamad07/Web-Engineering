
function find (num, fun){
for (var i=0;i<num.lenth;i++){
    let count = 0;
    if(fun(num[i])){
    count=count+1;
    if(count===1){
    return num[i];
    }
   }
  }
}
console.log(find([8,11,4,27], function(val){return val >= 10})); 
console.log(find([8,11,4,27], function(val){return val === 5})); 