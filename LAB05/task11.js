function valTimesIndex(arr){
      return arr.map(function(value,index,array){
		return value*index;
	});   
}
console.log(valTimesIndex([1,2,3]));
console.log(valTimesIndex([1,-2,-3]));